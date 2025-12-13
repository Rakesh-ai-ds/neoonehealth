# NeoOne Health - Resend Email Integration & Vercel Deployment Guide

## 📧 Resend API Setup

### Step 1: Get Your Resend API Key

1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to **API Keys** section
4. Click **Create API Key**
5. Copy your API key (starts with `re_`)

### Step 2: Configure Environment Variables

#### For Local Development:

1. Create `.env.local` file in the `frontend` folder:
```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and add your keys:
```env
RESEND_API_KEY=re_your_actual_api_key_here
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=your-email@example.com
```

#### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:
   - `RESEND_API_KEY` = your Resend API key
   - `FROM_EMAIL` = onboarding@resend.dev (or your verified domain)
   - `TO_EMAIL` = your email where you want to receive form submissions

### Step 3: Verify Your Domain (Optional but Recommended)

For production, verify your domain in Resend:

1. Go to Resend Dashboard → **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `neoonehealth.com`)
4. Add the DNS records provided by Resend
5. Wait for verification
6. Update `FROM_EMAIL` to use your domain (e.g., `contact@neoonehealth.com`)

---

## 🚀 Vercel Deployment Guide

### Prerequisites

- GitHub account
- Vercel account (free tier is fine)
- Your code pushed to GitHub

### Step 1: Push Code to GitHub

```bash
cd c:\Users\RAKESH\Desktop\neoonehealth\frontend
git init
git add .
git commit -m "Initial commit - NeoOne Health website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/neoonehealth.git
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Create React App
   - **Root Directory**: `./` (or `frontend` if you kept the folder structure)
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Add Environment Variables (from Step 2 above)
6. Click **Deploy**

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
cd c:\Users\RAKESH\Desktop\neoonehealth\frontend
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? neoonehealth
# - Directory? ./
# - Override settings? No

# Add environment variables
vercel env add RESEND_API_KEY
vercel env add FROM_EMAIL
vercel env add TO_EMAIL

# Deploy to production
vercel --prod
```

### Step 3: Test Your Deployment

1. Visit your Vercel URL (e.g., `https://neoonehealth.vercel.app`)
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email inbox for the form submission

---

## 📁 Project Structure

```
frontend/
├── api/
│   └── send-email.js          # Vercel serverless function for Resend
├── src/
│   ├── pages/
│   │   └── Contact.js         # Updated with Resend integration
│   └── ...
├── .env.local.example         # Environment variables template
├── vercel.json                # Vercel configuration
└── package.json
```

---

## 🔧 How It Works

1. **User fills out contact form** → Contact.js
2. **Form submits to** → `/api/send-email`
3. **Serverless function** → Calls Resend API
4. **Resend sends email** → To your configured email address
5. **User sees success message** → Form submission complete

---

## 🛠️ Troubleshooting

### Email not sending?

1. **Check API Key**: Verify `RESEND_API_KEY` is correct in Vercel environment variables
2. **Check Logs**: Go to Vercel Dashboard → Your Project → Deployments → Click deployment → Functions tab
3. **Verify Email**: Make sure `TO_EMAIL` is a valid email address
4. **Domain Issues**: If using custom domain, ensure it's verified in Resend

### Form not submitting?

1. **Check Console**: Open browser DevTools → Console tab for errors
2. **Network Tab**: Check if `/api/send-email` request is being made
3. **CORS Issues**: Vercel should handle this automatically, but check if request is blocked

### Local Testing

To test locally with the API:

```bash
# Install Vercel CLI
npm install -g vercel

# Run development server with Vercel functions
vercel dev
```

Then visit `http://localhost:3000`

---

## 📝 Customization

### Change Email Template

Edit `api/send-email.js` and modify the `html` content in the `resend.emails.send()` call.

### Change Recipient Email

Update the `TO_EMAIL` environment variable in Vercel.

### Add Multiple Recipients

In `api/send-email.js`, change:
```javascript
to: [process.env.TO_EMAIL],
```
to:
```javascript
to: ['email1@example.com', 'email2@example.com'],
```

---

## 🎉 You're Done!

Your NeoOne Health website is now live with working email functionality!

**Live URL**: Check your Vercel dashboard for your deployment URL

**Custom Domain**: You can add a custom domain in Vercel Settings → Domains

---

## 📞 Support

- Resend Docs: https://resend.com/docs
- Vercel Docs: https://vercel.com/docs
- React Docs: https://react.dev

