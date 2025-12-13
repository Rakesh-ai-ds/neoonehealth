import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_BzNNJa1c_B9oci26iDXGckLaxKD4rKBSh');

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, phone, company, message, subject } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'NeoOne Health <onboarding@resend.dev>', // Change this to your verified domain
            to: ['rakeshrevathi2006@gmail.com'],
            subject: subject || `New Contact Form Submission from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B4F6C;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f7fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #0B4F6C;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="border: 1px solid #e0e0e0; margin: 20px 0;">
          
          <p style="color: #666; font-size: 12px;">
            This email was sent from the NeoOne Health contact form.
          </p>
        </div>
      `,
        });

        return res.status(200).json({
            success: true,
            message: 'Email sent successfully',
            id: data.id
        });

    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({
            error: 'Failed to send email',
            details: error.message
        });
    }
}
