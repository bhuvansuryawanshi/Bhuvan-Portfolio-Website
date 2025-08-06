# Contact Form Backend Setup

This guide will help you set up the contact form backend to send emails to your Gmail address.

## Prerequisites

1. A Gmail account
2. Netlify account (for hosting)

## Step 1: Set up Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security" → "2-Step Verification" (enable if not already enabled)
3. Go to "App passwords" (under 2-Step Verification)
4. Select "Mail" as the app and "Other" as the device
5. Generate the app password
6. Copy the generated password (16 characters)

## Step 2: Configure Netlify Environment Variables

1. Go to your Netlify dashboard
2. Select your site
3. Go to "Site settings" → "Environment variables"
4. Add the following environment variables:

```
EMAIL_USER = your-gmail@gmail.com
EMAIL_PASS = your-16-character-app-password
```

## Step 3: Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`

## Step 4: Test the Contact Form

1. Deploy your site
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email (bhuvansuryawanshi0@gmail.com) for the message

## Troubleshooting

### If emails aren't being received:
1. Check Netlify function logs in the dashboard
2. Verify environment variables are set correctly
3. Ensure Gmail app password is correct
4. Check spam folder

### If the form shows errors:
1. Check browser console for network errors
2. Verify the function URL is correct
3. Check Netlify function logs

## Security Notes

- Never commit your email password to version control
- Use environment variables for sensitive data
- The app password is more secure than your regular Gmail password
- Consider rate limiting for production use

## Alternative Email Services

If you prefer not to use Gmail, you can modify the `contact.js` function to use:
- SendGrid
- Mailgun
- AWS SES
- Resend

Just update the transporter configuration in the function accordingly. 