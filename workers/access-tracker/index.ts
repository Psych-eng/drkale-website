/**
 * Cloudflare Worker: School Portal Access Tracker
 * 
 * This worker logs all access code usage and sends email notifications.
 * It uses Cloudflare KV for storage and MailChannels for email delivery.
 */

interface Env {
  ACCESS_LOGS: KVNamespace;
  ADMIN_EMAIL: string;
  ADMIN_PASSWORD_HASH: string;
}

interface AccessLog {
  timestamp: string;
  accessCode: string;
  districtName: string;
  ipAddress: string;
  userAgent: string;
  success: boolean;
  sharePointUrl?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    // Enable CORS
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // Route: Log access attempt
      if (path === '/api/log-access' && request.method === 'POST') {
        return await handleLogAccess(request, env, corsHeaders);
      }

      // Route: Get access logs (admin only)
      if (path === '/api/get-logs' && request.method === 'GET') {
        return await handleGetLogs(request, env, corsHeaders);
      }

      // Route: Get statistics (admin only)
      if (path === '/api/get-stats' && request.method === 'GET') {
        return await handleGetStats(request, env, corsHeaders);
      }

      // Route: Health check
      if (path === '/api/health') {
        return new Response(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      return new Response('Not Found', { status: 404, headers: corsHeaders });
    } catch (error) {
      console.error('Worker error:', error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};

/**
 * Handle logging an access attempt
 */
async function handleLogAccess(request: Request, env: Env, corsHeaders: Record<string, string>): Promise<Response> {
  try {
    const data = await request.json() as {
      accessCode: string;
      districtName: string;
      success: boolean;
      sharePointUrl?: string;
    };

    const accessLog: AccessLog = {
      timestamp: new Date().toISOString(),
      accessCode: data.accessCode,
      districtName: data.districtName,
      ipAddress: request.headers.get('CF-Connecting-IP') || 'unknown',
      userAgent: request.headers.get('User-Agent') || 'unknown',
      success: data.success,
      sharePointUrl: data.sharePointUrl,
    };

    // Generate unique log ID
    const logId = `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Store in KV
    await env.ACCESS_LOGS.put(logId, JSON.stringify(accessLog));

    // Also store in a list for easy retrieval (last 1000 logs)
    const logsListKey = 'logs_list';
    const existingList = await env.ACCESS_LOGS.get(logsListKey);
    const logsList: string[] = existingList ? JSON.parse(existingList) : [];
    
    logsList.unshift(logId); // Add to beginning
    if (logsList.length > 1000) {
      logsList.pop(); // Remove oldest if over 1000
    }
    
    await env.ACCESS_LOGS.put(logsListKey, JSON.stringify(logsList));

    // Send email notification if successful access
    if (data.success && env.ADMIN_EMAIL) {
      await sendEmailNotification(env.ADMIN_EMAIL, accessLog);
    }

    return new Response(JSON.stringify({ success: true, logId }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error logging access:', error);
    return new Response(JSON.stringify({ error: 'Failed to log access' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}

/**
 * Handle getting access logs (admin only)
 */
async function handleGetLogs(request: Request, env: Env, corsHeaders: Record<string, string>): Promise<Response> {
  try {
    // Simple authentication check
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !await verifyAuth(authHeader, env)) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '100');
    const offset = parseInt(url.searchParams.get('offset') || '0');

    // Get logs list
    const logsListKey = 'logs_list';
    const existingList = await env.ACCESS_LOGS.get(logsListKey);
    const logsList: string[] = existingList ? JSON.parse(existingList) : [];

    // Get paginated logs
    const paginatedIds = logsList.slice(offset, offset + limit);
    const logs: AccessLog[] = [];

    for (const logId of paginatedIds) {
      const logData = await env.ACCESS_LOGS.get(logId);
      if (logData) {
        logs.push(JSON.parse(logData));
      }
    }

    return new Response(JSON.stringify({
      logs,
      total: logsList.length,
      limit,
      offset,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error getting logs:', error);
    return new Response(JSON.stringify({ error: 'Failed to get logs' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}

/**
 * Handle getting statistics (admin only)
 */
async function handleGetStats(request: Request, env: Env, corsHeaders: Record<string, string>): Promise<Response> {
  try {
    // Simple authentication check
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !await verifyAuth(authHeader, env)) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Get all logs
    const logsListKey = 'logs_list';
    const existingList = await env.ACCESS_LOGS.get(logsListKey);
    const logsList: string[] = existingList ? JSON.parse(existingList) : [];

    const logs: AccessLog[] = [];
    for (const logId of logsList) {
      const logData = await env.ACCESS_LOGS.get(logId);
      if (logData) {
        logs.push(JSON.parse(logData));
      }
    }

    // Calculate statistics
    const stats = {
      totalAccesses: logs.length,
      successfulAccesses: logs.filter(log => log.success).length,
      failedAccesses: logs.filter(log => !log.success).length,
      uniqueDistricts: new Set(logs.map(log => log.districtName)).size,
      accessesByDistrict: {} as Record<string, number>,
      recentAccesses: logs.slice(0, 10),
      accessesByDay: {} as Record<string, number>,
    };

    // Count by district
    logs.forEach(log => {
      stats.accessesByDistrict[log.districtName] = (stats.accessesByDistrict[log.districtName] || 0) + 1;
    });

    // Count by day
    logs.forEach(log => {
      const day = log.timestamp.split('T')[0];
      stats.accessesByDay[day] = (stats.accessesByDay[day] || 0) + 1;
    });

    return new Response(JSON.stringify(stats), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error getting stats:', error);
    return new Response(JSON.stringify({ error: 'Failed to get stats' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}

/**
 * Verify admin authentication
 */
async function verifyAuth(authHeader: string, env: Env): Promise<boolean> {
  try {
    // Basic auth format: "Basic base64(username:password)"
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = atob(base64Credentials);
    const [username, password] = credentials.split(':');

    // Simple check: username should be admin email
    if (username !== env.ADMIN_EMAIL) {
      return false;
    }

    // Hash the password and compare
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex === env.ADMIN_PASSWORD_HASH;
  } catch (error) {
    console.error('Auth verification error:', error);
    return false;
  }
}

/**
 * Send email notification using MailChannels
 */
async function sendEmailNotification(adminEmail: string, log: AccessLog): Promise<void> {
  try {
    const emailBody = {
      personalizations: [
        {
          to: [{ email: adminEmail }],
        },
      ],
      from: {
        email: 'noreply@drkale.net',
        name: 'School Portal Tracker',
      },
      subject: `Portal Access: ${log.districtName}`,
      content: [
        {
          type: 'text/html',
          value: `
            <h2>School Portal Access Notification</h2>
            <p><strong>District:</strong> ${log.districtName}</p>
            <p><strong>Access Code:</strong> ${log.accessCode}</p>
            <p><strong>Time:</strong> ${new Date(log.timestamp).toLocaleString()}</p>
            <p><strong>IP Address:</strong> ${log.ipAddress}</p>
            <p><strong>Status:</strong> ${log.success ? '✅ Successful' : '❌ Failed'}</p>
            ${log.sharePointUrl ? `<p><strong>SharePoint URL:</strong> ${log.sharePointUrl}</p>` : ''}
            <hr>
            <p style="font-size: 12px; color: #666;">
              This is an automated notification from your School District Portal tracking system.
            </p>
          `,
        },
      ],
    };

    await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailBody),
    });
  } catch (error) {
    console.error('Error sending email:', error);
    // Don't throw - we don't want email failures to break logging
  }
}
