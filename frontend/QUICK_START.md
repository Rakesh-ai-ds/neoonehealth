# NeoOne Health - Quick Deployment Guide

## ✅ Your Configuration

**Resend API Key**: `re_BzNNJa1c_B9oci26iDXGckLaxKD4rKBSh`  
**Recipient Email**: `rakeshrevathi2006@gmail.com`  
**Sender Email**: `onboarding@resend.dev`

All form submissions will be sent to **rakeshrevathi2006@gmail.com**

---

## 🚀 Deploy to Vercel (3 Easy Steps)

### Step 1: Push to GitHub

```bash
cd c:\Users\RAKESH\Desktop\neoonehealth\frontend

# Initialize git (if not already done)
git init
git add .
git commit -m "NeoOne Health website with Resend integration"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/neoonehealth.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New"** → **"Project"**
3. **Import** your GitHub repository
4. Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

5. **Add Environment Variable**:
   - Click **"Environment Variables"**
   - Add:
     - **Name**: `RESEND_API_KEY`
     - **Value**: `re_BzNNJa1c_B9oci26iDXGckLaxKD4rKBSh`
   - Click **"Add"**

6. Click **"Deploy"**

### Step 3: Test

1. Wait for deployment to complete (2-3 minutes)
2. Visit your Vercel URL (e.g., `https://neoonehealth.vercel.app`)
3. Go to Contact page
4. Fill and submit the form
5. Check `rakeshrevathi2006@gmail.com` for the email!

---

## 📧 How It Works

```
User fills Contact Form
        ↓
Submits to /api/send-email
        ↓
Resend API sends email
        ↓
Email arrives at rakeshrevathi2006@gmail.com
```

**No database needed!** All form data is sent directly to your email.

---

## 🎯 What You'll Receive

Every form submission will send an email to `rakeshrevathi2006@gmail.com` with:

- **Name**: User's full name
- **Email**: User's work email
- **Phone**: User's phone number (if provided)
- **Company**: Company name
- **Role**: User's job title
- **Industry**: Company industry
- **Employee Count**: Number of employees
- **Primary Challenges**: Selected challenges
- **Message**: Any additional message

---

## 🔧 Local Testing (Optional)

To test locally before deploying:

```bash
# Install Vercel CLI
npm install -g vercel

# Run local development with serverless functions
cd c:\Users\RAKESH\Desktop\neoonehealth\frontend
vercel dev

# Visit http://localhost:3000
# Test the contact form
```

---

## ⚡ Quick Fixes

### Email not arriving?

1. **Check Spam folder** in Gmail
2. **Verify API key** in Vercel environment variables
3. **Check Vercel logs**: Dashboard → Your Project → Functions tab

### Form not submitting?

1. **Open browser console** (F12) to check for errors
2. **Verify API route** is deployed (check `/api/send-email` in Vercel)

---

## 🎉 You're All Set!

Your website will automatically:
- ✅ Send all form submissions to your Gmail
- ✅ Work without any database
- ✅ Handle all data through email
- ✅ Be fully functional on Vercel

**No backend server needed!**

---

## 📝 Important Notes

1. **API Key Security**: The API key is hardcoded as fallback but should be set in Vercel environment variables for production
2. **Email Limit**: Resend free tier = 3,000 emails/month (more than enough!)
3. **Sender Email**: Using `onboarding@resend.dev` (Resend's default). You can verify your own domain later.

---

## 🔗 Useful Links

- **Resend Dashboard**: https://resend.com/emails
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Your Email**: https://mail.google.com

---

**Need help?** Check the DEPLOYMENT.md file for detailed troubleshooting!
