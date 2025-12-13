# 📧 Local Email Testing Guide

## ✅ Setup Complete!

Your local email testing is ready. Here's how to test the Gmail functionality:

---

## 🚀 How to Test Locally

### Step 1: Start the Email Server (Terminal 1)

Open a **NEW terminal** and run:

```bash
cd c:\Users\RAKESH\Desktop\neoonehealth\frontend
npm run email-server
```

You should see:
```
🚀 ========================================
📧 Local Email Server Running!
========================================
🌐 Server: http://localhost:3001
📬 Email API: http://localhost:3001/api/send-email
📧 Emails will be sent to: rakeshrevathi2006@gmail.com
🔑 Using Resend API Key: re_BzNNJa1c_...
========================================
```

### Step 2: Start React App (Terminal 2 - Already Running)

Your React app is already running at `http://localhost:3000`

### Step 3: Test the Contact Form

1. Open browser: `http://localhost:3000`
2. Navigate to **Contact** page
3. Fill out the form:
   - Full Name: Test User
   - Email: test@example.com
   - Role: Manager
   - Phone: +91 1234567890
   - Company: Test Company
   - Industry: Technology
   - Employee Count: 100-500
   - Challenges: Select any

4. Click through all 3 steps
5. Click **"Schedule My Demo"**

### Step 4: Check Results

**In Terminal 1 (Email Server):**
You'll see:
```
📧 Received email request: {...}
📤 Sending email to rakeshrevathi2006@gmail.com...
✅ Email sent successfully!
```

**In Browser Console (F12):**
```
Sending to: http://localhost:3001/api/send-email
Email sent successfully: {...}
```

**In Gmail:**
- Check `rakeshrevathi2006@gmail.com`
- Look in **Inbox** or **Spam** folder
- You should receive a beautifully formatted email!

---

## 📧 Email Configuration

- **API Key**: `re_BzNNJa1c_B9oci26iDXGckLaxKD4rKBSh`
- **From**: `onboarding@resend.dev`
- **To**: `rakeshrevathi2006@gmail.com`

---

## 🔧 Troubleshooting

### Email Server Won't Start?

```bash
# Make sure port 3001 is free
netstat -ano | findstr :3001

# If something is using it, kill the process or change port in server-local.js
```

### Email Not Sending?

1. **Check API Key**: Verify in `server-local.js` line 11
2. **Check Internet**: Resend needs internet connection
3. **Check Resend Dashboard**: Visit https://resend.com/emails to see sent emails
4. **Check Gmail Spam**: Sometimes emails go to spam first

### Form Submission Error?

1. **Check Console**: Press F12 → Console tab
2. **Verify Email Server is Running**: Should see logs in Terminal 1
3. **Check Network Tab**: F12 → Network → Look for `/api/send-email` request

---

## 📝 What Happens

```
User fills form (localhost:3000)
        ↓
Submits to http://localhost:3001/api/send-email
        ↓
Local Express server receives request
        ↓
Calls Resend API with your key
        ↓
Resend sends email
        ↓
Email arrives at rakeshrevathi2006@gmail.com
```

---

## 🎯 Production vs Development

### Local Development (Now):
- React: `http://localhost:3000`
- Email API: `http://localhost:3001/api/send-email`
- Server: `server-local.js`

### Production (After Vercel Deploy):
- React: `https://your-app.vercel.app`
- Email API: `https://your-app.vercel.app/api/send-email`
- Server: `/api/send-email.js` (Vercel serverless)

The Contact form automatically detects the environment and uses the right endpoint!

---

## ✅ Ready to Test!

1. **Terminal 1**: Run `npm run email-server`
2. **Terminal 2**: Already running `npm start`
3. **Browser**: Go to Contact page and submit form
4. **Gmail**: Check rakeshrevathi2006@gmail.com

**Your local email testing is ready!** 🎉
