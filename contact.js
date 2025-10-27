export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone') || 'Not provided';
    const role = formData.get('role');
    const message = formData.get('message');

    // Send email using Cloudflare Email Workers
    const emailContent = `
New Consultation Request from Dr. Kale Website

Name: ${name}
Email: ${email}
Phone: ${phone}
Role: ${role}

Evaluation Needs:
${message}

---
This message was sent from the contact form at www.drkale.net
Reply directly to this email to respond to ${name} at ${email}
    `.trim();

    // Use Cloudflare's MailChannels API (free for Cloudflare Pages)
    const emailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'email@drkale.net', name: 'Dr. Kale' }],
            reply_to: { email: email, name: name },
          },
        ],
        from: {
          email: 'noreply@drkale.net',
          name: 'Dr. Kale Website Contact Form',
        },
        subject: 'New Consultation Request - Dr. Kale Website',
        content: [
          {
            type: 'text/plain',
            value: emailContent,
          },
        ],
      }),
    });

    if (emailResponse.ok) {
      return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: 'Failed to send email. Please try again.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}

