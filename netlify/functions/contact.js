const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Check if environment variables are set
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing environment variables:', {
                EMAIL_USER: !!process.env.EMAIL_USER,
                EMAIL_PASS: !!process.env.EMAIL_PASS
            });
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({
                    error: 'Server configuration error. Please contact the administrator.',
                    success: false
                })
            };
        }

        // Parse the request body
        let body;
        try {
            body = JSON.parse(event.body);
        } catch (parseError) {
            console.error('Error parsing request body:', parseError);
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Invalid request format' })
            };
        }

        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'All fields are required' })
            };
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Invalid email format' })
            };
        }

        console.log('Creating email transporter...');

        // Create transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        console.log('Email transporter created successfully');

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

        console.log('Sending email...');

        // Send email
        await transporter.sendMail(mailOptions);

        console.log('Email sent successfully');

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                message: 'Message sent successfully!',
                success: true
            })
        };

    } catch (error) {
        console.error('Error in contact function:', error);

        // Provide more specific error messages
        let errorMessage = 'Failed to send message. Please try again later.';

        if (error.code === 'EAUTH') {
            errorMessage = 'Authentication failed. Please check email configuration.';
        } else if (error.code === 'ECONNECTION') {
            errorMessage = 'Connection failed. Please try again later.';
        }

        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: errorMessage,
                success: false,
                details: process.env.NODE_ENV === 'development' ? error.message : undefined
            })
        };
    }
}; 