import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phoneNumber } = await request.json();

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      // @ts-ignore
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email to the SMTP_USER
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.TO_EMAIL,
      subject: 'New Brochure Download Request',
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phoneNumber}
      `,
      html: `
        <h2>New Brochure Download Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
      `,
    });

    console.log("EMAIL SENT SUCCESSFULLY");

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Error sending email' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({ success: false, message: 'Method Not Allowed' }, { status: 405 });
}
