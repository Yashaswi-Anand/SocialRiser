import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Create reusable transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Or your domain's SMTP server
      port: 465,
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER, // contact@domain.com
        pass: process.env.EMAIL_PASS, // password / app password
      },
    });

    // Mail options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, 
      to: process.env.EMAIL_USER, // Always send to your company email
      subject: `New Contact Form Submission`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email, // Allows you to directly reply to the user's email
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}