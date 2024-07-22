import nodemailer from "nodemailer";
import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
	
	try {
		const {firstName, lastName, email, phoneNumber, message} = await request.json();

		// Create a nodemailer transporter
		const transporter = nodemailer.createTransport({
			// @ts-ignore
			host: process.env.SMTP_HOST, port: process.env.SMTP_PORT, auth: {
				user: process.env.SMTP_USER, pass: process.env.SMTP_PASS
			}
		});

		// Send email to the specified address
		await transporter.sendMail({
			from: process.env.SMTP_USER, to: process.env.TO_EMAIL, subject: 'New Contact Form Submission', text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phoneNumber}
        Message: ${message}
      `, html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
		});

		// Send confirmation email to the user
		await transporter.sendMail({
			from: process.env.SMTP_USER, to: email, subject: 'Thank you for contacting Ashiyana Dream Homes', text: `
        Dear ${firstName} ${lastName},
        
        Thank you for contacting Ashiyana Dream Homes. We have received your message and will get back to you soon.
        
        Best regards,
        Ashiyana Dream Homes Team
      `, html: `
        <h2>Thank you for contacting Ashiyana Dream Homes</h2>
        <p>Dear ${firstName} ${lastName},</p>
        <p>Thank you for contacting Ashiyana Dream Homes. We have received your message and will get back to you soon.</p>
        <p>Best regards,<br>Ashiyana Dream Homes Team</p>
      `
		});
		console.log("EMAILS SENT SUCCESSFULLY");

		return NextResponse.json({success: true, message: 'Emails sent successfully'}, {status: 200});
	} catch (error) {
		console.error('Error sending email:', error);
		return NextResponse.json({success: false, message: 'Error sending email'}, {status: 500});
	}
}

export async function GET(request: NextRequest) {
	return NextResponse.json({success: false, message: 'Method Not Allowed'}, {status: 405});
}
