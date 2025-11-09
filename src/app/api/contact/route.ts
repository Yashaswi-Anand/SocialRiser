import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, userType, instagram, youtube, description } = body;

    // Validate required fields
    if (!name || !email || !userType || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter with Hostinger SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'contact@socialriser.com',
        pass: process.env.SMTP_PASSWORD || '',
      },
    });

    // Email content
    const mailOptions = {
      from: `"Social Riser Contact Form" <${process.env.SMTP_USER || 'contact@socialriser.com'}>`,
      to: 'contact@socialriser.com',
      replyTo: email,
      subject: `New ${userType} collabration with ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            }
            .header {
              background: linear-gradient(135deg, #1cb299 0%, #224c94 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background: #f8f9fa;
              border-left: 4px solid #1cb299;
              border-radius: 5px;
            }
            .label {
              font-weight: bold;
              color: #224c94;
              margin-bottom: 5px;
            }
            .value {
              color: #333;
            }
            .badge {
              display: inline-block;
              padding: 5px 15px;
              background: linear-gradient(135deg, #1cb299 0%, #224c94 100%);
              color: white;
              border-radius: 20px;
              font-size: 14px;
              font-weight: bold;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🎯 New ${userType} Collabration With ${name}. </h1>
              <p style="margin: 10px 0 0 0;">Your Growth Our Success</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">🏷️ User Type:</div>
                <div class="value"><span class="badge">${userType}</span></div>
              </div>
              
              ${instagram ? `
              <div class="field">
                <div class="label">📸 Instagram:</div>
                <div class="value"><a href="${instagram}" target="_blank">${instagram}</a></div>
              </div>
              ` : ''}
              
              ${youtube ? `
              <div class="field">
                <div class="label">🎥 YouTube:</div>
                <div class="value"><a href="${youtube}" target="_blank">${youtube}</a></div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value" style="white-space: pre-wrap;">${description}</div>
              </div>
              
              <div class="footer">
                <p>This email was sent from the Social Riser contact form.</p>
                <p>Reply directly to this email to respond to ${name}.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Collabration With Brand/Influencer

Name: ${name}
Email: ${email}
User Type: ${userType}
${instagram ? `Instagram: ${instagram}` : ''}
${youtube ? `YouTube: ${youtube}` : ''}

Message:
${description}

---
This email was sent from the Social Riser contact form.
Reply directly to this email to respond to ${name}.
      `.trim(),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
