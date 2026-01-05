// index.ts
var index_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    };
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }
    try {
      if (path === "/api/log-access" && request.method === "POST") {
        return await handleLogAccess(request, env, corsHeaders);
      }
      if (path === "/api/get-logs" && request.method === "GET") {
        return await handleGetLogs(request, env, corsHeaders);
      }
      if (path === "/api/get-stats" && request.method === "GET") {
        return await handleGetStats(request, env, corsHeaders);
      }
      if (path === "/api/health") {
        return new Response(JSON.stringify({ status: "ok", timestamp: (/* @__PURE__ */ new Date()).toISOString() }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
      return new Response("Not Found", { status: 404, headers: corsHeaders });
    } catch (error) {
      console.error("Worker error:", error);
      return new Response(JSON.stringify({ error: "Internal Server Error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }
  }
};
async function handleLogAccess(request, env, corsHeaders) {
  try {
    const data = await request.json();
    const accessLog = {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      accessCode: data.accessCode,
      districtName: data.districtName,
      ipAddress: request.headers.get("CF-Connecting-IP") || "unknown",
      userAgent: request.headers.get("User-Agent") || "unknown",
      success: data.success,
      sharePointUrl: data.sharePointUrl
    };
    const logId = `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    await env.ACCESS_LOGS.put(logId, JSON.stringify(accessLog));
    const logsListKey = "logs_list";
    const existingList = await env.ACCESS_LOGS.get(logsListKey);
    const logsList = existingList ? JSON.parse(existingList) : [];
    logsList.unshift(logId);
    if (logsList.length > 1e3) {
      logsList.pop();
    }
    await env.ACCESS_LOGS.put(logsListKey, JSON.stringify(logsList));
    if (data.success && env.ADMIN_EMAIL) {
      await sendEmailNotification(env.ADMIN_EMAIL, accessLog);
    }
    return new Response(JSON.stringify({ success: true, logId }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error logging access:", error);
    return new Response(JSON.stringify({ error: "Failed to log access" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
}
async function handleGetLogs(request, env, corsHeaders) {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !await verifyAuth(authHeader, env)) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get("limit") || "100");
    const offset = parseInt(url.searchParams.get("offset") || "0");
    const logsListKey = "logs_list";
    const existingList = await env.ACCESS_LOGS.get(logsListKey);
    const logsList = existingList ? JSON.parse(existingList) : [];
    const paginatedIds = logsList.slice(offset, offset + limit);
    const logs = [];
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
      offset
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error getting logs:", error);
    return new Response(JSON.stringify({ error: "Failed to get logs" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
}
async function handleGetStats(request, env, corsHeaders) {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !await verifyAuth(authHeader, env)) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }
    const logsListKey = "logs_list";
    const existingList = await env.ACCESS_LOGS.get(logsListKey);
    const logsList = existingList ? JSON.parse(existingList) : [];
    const logs = [];
    for (const logId of logsList) {
      const logData = await env.ACCESS_LOGS.get(logId);
      if (logData) {
        logs.push(JSON.parse(logData));
      }
    }
    const stats = {
      totalAccesses: logs.length,
      successfulAccesses: logs.filter((log) => log.success).length,
      failedAccesses: logs.filter((log) => !log.success).length,
      uniqueDistricts: new Set(logs.map((log) => log.districtName)).size,
      accessesByDistrict: {},
      recentAccesses: logs.slice(0, 10),
      accessesByDay: {}
    };
    logs.forEach((log) => {
      stats.accessesByDistrict[log.districtName] = (stats.accessesByDistrict[log.districtName] || 0) + 1;
    });
    logs.forEach((log) => {
      const day = log.timestamp.split("T")[0];
      stats.accessesByDay[day] = (stats.accessesByDay[day] || 0) + 1;
    });
    return new Response(JSON.stringify(stats), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error getting stats:", error);
    return new Response(JSON.stringify({ error: "Failed to get stats" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
}
async function verifyAuth(authHeader, env) {
  try {
    const base64Credentials = authHeader.split(" ")[1];
    const credentials = atob(base64Credentials);
    const [username, password] = credentials.split(":");
    if (username !== env.ADMIN_EMAIL) {
      return false;
    }
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return hashHex === env.ADMIN_PASSWORD_HASH;
  } catch (error) {
    console.error("Auth verification error:", error);
    return false;
  }
}
async function sendEmailNotification(adminEmail, log) {
  try {
    const emailBody = {
      personalizations: [
        {
          to: [{ email: adminEmail }]
        }
      ],
      from: {
        email: "noreply@drkale.net",
        name: "School Portal Tracker"
      },
      subject: `Portal Access: ${log.districtName}`,
      content: [
        {
          type: "text/html",
          value: `
            <h2>School Portal Access Notification</h2>
            <p><strong>District:</strong> ${log.districtName}</p>
            <p><strong>Access Code:</strong> ${log.accessCode}</p>
            <p><strong>Time:</strong> ${new Date(log.timestamp).toLocaleString()}</p>
            <p><strong>IP Address:</strong> ${log.ipAddress}</p>
            <p><strong>Status:</strong> ${log.success ? "\u2705 Successful" : "\u274C Failed"}</p>
            ${log.sharePointUrl ? `<p><strong>SharePoint URL:</strong> ${log.sharePointUrl}</p>` : ""}
            <hr>
            <p style="font-size: 12px; color: #666;">
              This is an automated notification from your School District Portal tracking system.
            </p>
          `
        }
      ]
    };
    await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailBody)
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
export {
  index_default as default
};
