# EmailJS Setup Guide

Your contact form is now integrated with EmailJS! Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email account
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use this template content:

**Subject:**
```
New Contact Form Submission: {{subject}}
```

**Body:**
```
You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. You can customize the template as you like
5. Click **Save** and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** (e.g., `abcDEF123xyz`)
3. Copy this key

## Step 5: Configure Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcDEF123xyz
```

## Step 6: Test the Form

1. Start your development server:
```bash
npm run dev
```

2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email inbox for the message
5. You should see a success message on the form

## Features Included

✅ **Email Notifications** - Receive emails directly to your inbox
✅ **Loading State** - Shows spinner while sending
✅ **Success Message** - Green notification when email sent successfully
✅ **Error Handling** - Red notification if something goes wrong
✅ **Form Reset** - Automatically clears form after successful submission
✅ **Auto-hide Messages** - Success/error messages disappear after 5 seconds

## Free Tier Limits

- **200 emails per month** (free plan)
- Unlimited templates
- No credit card required

## Troubleshooting

### "Failed to send message" error:
- Check that all environment variables are set correctly
- Verify your EmailJS service is connected and active
- Make sure your email template exists
- Check browser console for detailed error messages

### Emails not arriving:
- Check your spam/junk folder
- Verify the template has the correct field names
- Make sure your EmailJS account is verified

### Environment variables not working:
- Restart your dev server after changing `.env`
- Make sure variable names start with `VITE_`
- Check that `.env` file is in the project root

## Security Note

⚠️ Make sure `.env` is in your `.gitignore` file to keep your credentials private!

The `.env.example` file is provided as a template for others who clone your repository.

## Support

If you need help, visit the [EmailJS Documentation](https://www.emailjs.com/docs/)
