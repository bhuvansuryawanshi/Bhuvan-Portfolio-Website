const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Parse the request body
        const { name, email, subject, message } = JSON.parse(event.body);

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'All fields are required' })
            };
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid email format' })
            };
        }

        // Create transporter using Gmail (you'll need to set up app password)
        const transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASS  // Your Gmail app password
            }
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'bhuvansuryawanshi0@gmail.com',
            subject: `Portfolio Contact: ${subject}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from your portfolio website contact form.</em></p>
      `,
            replyTo: email
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Message sent successfully!',
                success: true
            })
        };

    } catch (error) {
        console.error('Error sending email:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Failed to send message. Please try again later.',
                success: false
            })
        };
    }
}; 