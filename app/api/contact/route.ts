import { NextResponse } from 'next/server'
import { saveSubmission } from '@/lib/db'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body
    
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 })
    }
    
    // Save locally
    const submission = saveSubmission({ name, email, subject: subject || 'No Subject', message })
    
    // Attempt to send email
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER || '"WexLogic Contact Form" <noreply@wexlogic.com>',
        to: 'info@wexlogic.com',
        subject: `New Lead: ${subject || 'No Subject'} - from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
      });
    } catch (emailErr) {
      console.error('Nodemailer error (but saved locally):', emailErr);
      // We don't fail the request if email sending fails, as we still saved it to db.json
    }
    
    return NextResponse.json({ success: true, submission })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}
