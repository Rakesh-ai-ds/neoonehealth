// Local development server for testing Resend email functionality
// This file is ONLY for local testing - Vercel will use /api/send-email.js in production

const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
const PORT = 3001;

// Your Resend API Key
const resend = new Resend('re_BzNNJa1c_B9oci26iDXGckLaxKD4rKBSh');

// Middleware
app.use(cors());
app.use(express.json());

// Email endpoint - matches the production API route
app.post('/api/send-email', async (req, res) => {
    console.log('📧 Received email request:', req.body);

    try {
        const { name, email, phone, company, message, subject } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        console.log('📤 Sending email to rakeshrevathi2006@gmail.com...');

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'NeoOne Health <onboarding@resend.dev>',
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

        console.log('✅ Email sent successfully!', data);

        return res.status(200).json({
            success: true,
            message: 'Email sent successfully to rakeshrevathi2006@gmail.com',
            id: data.id
        });

    } catch (error) {
        console.error('❌ Error sending email:', error);
        return res.status(500).json({
            error: 'Failed to send email',
            details: error.message
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Local email server is running!' });
});

app.listen(PORT, () => {
    console.log('\n🚀 ========================================');
    console.log('📧 Local Email Server Running!');
    console.log('========================================');
    console.log(`🌐 Server: http://localhost:${PORT}`);
    console.log(`📬 Email API: http://localhost:${PORT}/api/send-email`);
    console.log(`📧 Emails will be sent to: rakeshrevathi2006@gmail.com`);
    console.log(`🔑 Using Resend API Key: re_BzNNJa1c_...`);
    console.log('========================================\n');
    console.log('💡 To test: Fill out the contact form at http://localhost:3000');
    console.log('✉️  Check rakeshrevathi2006@gmail.com for emails!\n');
});
