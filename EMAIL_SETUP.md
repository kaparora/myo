# Email & Security Setup Guide

This guide explains how to set up email sending and reCAPTCHA verification for the contact form.

## Part 1: Set Up Resend for Email Sending

### 1. Create a Resend Account
1. Go to https://resend.com
2. Sign up with your email
3. Verify your email address

### 2. Get Your API Key
1. Go to https://resend.com/api-keys
2. Create a new API key
3. Copy the key

### 3. Configure Environment Variable
1. Open `.env.local`
2. Replace `your_resend_api_key_here` with your actual API key:
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

### 4. Set Up Email Domain (Important)
For production, you need to verify your domain with Resend:
1. In Resend dashboard, go to "Domains"
2. Add your domain
3. Follow the DNS configuration instructions
4. Update the `from` email in the API route to use your verified domain

For now, you can send from `contact@myodaycare.com` (requires domain verification).

---

## Part 2: Set Up Google reCAPTCHA v3

### 1. Create a Google Account
If you don't have one, go to https://accounts.google.com

### 2. Go to reCAPTCHA Admin Console
1. Visit https://www.google.com/recaptcha/admin
2. Click the "+" button to create a new site
3. Fill in the form:
   - **Label**: MYO Daycare
   - **reCAPTCHA type**: reCAPTCHA v3
   - **Domains**: Add your domain(s)
     - For local testing: `localhost`
     - For production: `myodaycare.com`

### 3. Copy Your Keys
After creating, you'll see:
- **Site Key**: For client-side
- **Secret Key**: For server-side

### 4. Configure Environment Variables
1. Open `.env.local`
2. Replace the placeholder values:
```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_actual_site_key_here
RECAPTCHA_SECRET_KEY=your_actual_secret_key_here
```

### 5. Set Contact Email
Update the email where form submissions should be sent:
```
CONTACT_EMAIL=garima@myodaycare.com
```

---

## Part 3: Test Locally

1. Restart your dev server: `npm run dev`
2. Go to http://localhost:3000/contact
3. Try submitting the form
4. Check that:
   - Form shows "sending..." while processing
   - Success message appears after submission
   - Email arrives at your contact email

---

## Part 4: Deploy to Vercel

When you deploy to Vercel:
1. Go to your Vercel project settings
2. Add environment variables:
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - `RECAPTCHA_SECRET_KEY`
   - `CONTACT_EMAIL`
3. Redeploy

---

## Security Features Enabled

✅ **Rate Limiting**: 5 submissions per hour per IP address
✅ **Honeypot Field**: Hidden field catches bots automatically
✅ **reCAPTCHA v3**: Google's invisible bot detection
✅ **Input Validation**: Required fields checked on server
✅ **HTTPS**: All communication encrypted

---

## Troubleshooting

### "reCAPTCHA is not configured"
- Check `.env.local` has both reCAPTCHA keys
- Make sure you used `NEXT_PUBLIC_` prefix for site key
- Restart dev server

### Emails not sending
- Check `RESEND_API_KEY` is correct
- Verify domain is added to Resend
- Check spam/junk folder

### Form submissions blocked
- Check rate limit (5 per hour per IP)
- Try from a different IP or wait an hour
- In development, limits are per IP address

---

## Next Steps

1. Get Resend API key
2. Get reCAPTCHA keys
3. Add to `.env.local`
4. Test locally
5. Deploy to Vercel
