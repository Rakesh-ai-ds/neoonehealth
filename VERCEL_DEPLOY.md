# 🚀 Vercel Manual Deployment - NeoOne Health

## ✅ Simple 5-Step Deployment

### Step 1: Import Project on Vercel

1. Go to: https://vercel.com/new
2. Click **"Import Git Repository"**
3. Select: **`Rakesh-ai-ds/neoonehealth`**
4. Click **"Import"**

---

### Step 2: Configure Build Settings

**IMPORTANT - Use these EXACT settings:**

```
Framework Preset: Create React App
Root Directory: frontend
Build Command: npm run build
Output Directory: build
Install Command: npm install --legacy-peer-deps
```

**Screenshot of settings:**
- Framework Preset: **Create React App** (select from dropdown)
- Root Directory: **frontend** (type this)
- Build Command: **npm run build** (should auto-fill)
- Output Directory: **build** (should auto-fill)
- Install Command: **npm install --legacy-peer-deps** (IMPORTANT!)

---

### Step 3: Add Environment Variable

1. Scroll down to **"Environment Variables"**
2. Click **"Add"**
3. Enter:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_BzNNJa1c_B9oci26iDXGckLaxKD4rKBSh`
   - **Environment**: Select all (Production, Preview, Development)
4. Click **"Add"**

---

### Step 4: Deploy!

1. Click **"Deploy"** button
2. Wait 2-3 minutes
3. ✅ Done!

---

### Step 5: Test Your Website

1. Click the deployment URL (e.g., `https://neoonehealth.vercel.app`)
2. Navigate to **Contact** page
3. Fill and submit the form
4. Check `rakeshrevathi2006@gmail.com` for the email!

---

## 🔧 If Build Fails

### Check Install Command

Make sure you added `--legacy-peer-deps`:
```
npm install --legacy-peer-deps
```

This is REQUIRED because of dependency conflicts.

### Check Root Directory

Must be set to: **`frontend`**

Not `./frontend` or `/frontend`, just `frontend`

---

## 📧 Email Configuration

Your email is already configured:
- **API Key**: Built into the code
- **Recipient**: rakeshrevathi2006@gmail.com
- **Sender**: onboarding@resend.dev

Just add the environment variable and it works!

---

## ✅ Expected Result

After deployment:
- ✅ Website loads
- ✅ All pages work
- ✅ Contact form sends emails
- ✅ Mobile responsive
- ✅ All animations working

---

## 🎯 Quick Checklist

Before clicking Deploy:
- [ ] Root Directory = `frontend`
- [ ] Install Command = `npm install --legacy-peer-deps`
- [ ] Environment Variable `RESEND_API_KEY` added
- [ ] Framework = Create React App

---

## 🚀 Deploy Now!

https://vercel.com/new

**Your repository is ready!** Just follow the steps above.
