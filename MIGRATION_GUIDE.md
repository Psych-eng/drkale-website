# Migration Guide: Moving from Manus to Cloudflare Pages

This guide explains how to migrate your website from Manus hosting to Cloudflare Pages when you're ready.

## When to Use This Guide

- When you decide to cancel your Manus subscription
- When you want to self-host on Cloudflare Pages (free forever)
- As a backup plan for business continuity

---

## Step 1: Download Your Website Files

1. Open the Manus Management UI
2. Click on the **Code** panel (left sidebar)
3. Click **"Download all files"** button
4. Save the ZIP file to your computer
5. Extract the ZIP file to a folder

---

## Step 2: Prepare for Cloudflare Pages

### What You'll Need:
- A GitHub account (free)
- A Cloudflare account (free)
- Your domain (drkale.net) managed in Cloudflare

### Build Settings for Cloudflare Pages:
```
Build command: pnpm install && pnpm build
Build output directory: client/dist
Root directory: (leave empty)
Node version: 22
```

---

## Step 3: Deploy to Cloudflare Pages

### Option A: Via GitHub (Recommended)

1. **Create a GitHub repository:**
   - Go to github.com
   - Click "New repository"
   - Name it: `drkale-website`
   - Make it private
   - Create repository

2. **Upload your website files:**
   - Upload the extracted folder contents to the repository
   - Commit the files

3. **Connect to Cloudflare Pages:**
   - Log in to Cloudflare dashboard
   - Go to **Pages** → **Create a project**
   - Click **"Connect to Git"**
   - Select your GitHub repository
   - Use the build settings above
   - Click **"Save and Deploy"**

4. **Wait for deployment:**
   - Cloudflare will build and deploy your site
   - You'll get a URL like: `drkale-website.pages.dev`

### Option B: Direct Upload (Faster, but manual updates)

1. **Build the website locally:**
   ```bash
   cd drkale-website-updated
   pnpm install
   pnpm build
   ```

2. **Upload to Cloudflare Pages:**
   - Go to Cloudflare dashboard → **Pages**
   - Click **"Upload assets"**
   - Drag the `client/dist` folder
   - Click **"Deploy site"**

---

## Step 4: Connect Your Custom Domain

1. **In Cloudflare Pages:**
   - Go to your deployed project
   - Click **"Custom domains"** tab
   - Click **"Set up a custom domain"**
   - Enter: `drkale.net`
   - Click **"Continue"**

2. **Cloudflare will automatically:**
   - Configure DNS records
   - Enable SSL/HTTPS
   - Set up CDN

3. **Wait 5-10 minutes** for DNS propagation

4. **Test your site:**
   - Visit `https://drkale.net`
   - Your new website should be live!

---

## Step 5: Update Contact Form (Web3Forms)

Your contact form will continue working automatically because it uses Web3Forms, which is independent of hosting. No changes needed!

---

## Ongoing Updates

### If you used GitHub (Option A):
1. Make changes to your website files
2. Commit and push to GitHub
3. Cloudflare automatically rebuilds and deploys

### If you used Direct Upload (Option B):
1. Make changes locally
2. Run `pnpm build`
3. Upload the new `client/dist` folder to Cloudflare Pages

---

## Backup Strategy

**Recommended practice:**

1. **Monthly:** Download website files from Manus
2. **After major changes:** Download and save a backup
3. **Before canceling Manus:** Complete this migration guide

---

## Cost Comparison

| Service | Manus | Cloudflare Pages |
|---------|-------|------------------|
| Hosting | Included in subscription | **Free forever** |
| SSL/HTTPS | Included | **Free** |
| CDN | Included | **Free** |
| Bandwidth | Included | **Unlimited (free)** |
| Builds | Unlimited | **500/month (free)** |
| Custom domain | Yes | **Yes (free)** |

---

## Troubleshooting

### Site not building on Cloudflare?
- Check that Node version is set to 22
- Verify build command: `pnpm install && pnpm build`
- Verify output directory: `client/dist`

### Domain not working?
- Wait 10-15 minutes for DNS propagation
- Clear your browser cache
- Check Cloudflare DNS settings

### Contact form not working?
- Verify Web3Forms access key is in the code
- Check browser console for errors
- Test form submission

---

## Need Help?

If you encounter issues during migration:
1. Check Cloudflare Pages documentation: https://developers.cloudflare.com/pages/
2. Contact Cloudflare support (free)
3. Refer back to this guide

---

## Summary

✅ **Download files from Manus** (Code panel → Download all files)  
✅ **Create GitHub repository** and upload files  
✅ **Connect to Cloudflare Pages** with build settings  
✅ **Add custom domain** (drkale.net)  
✅ **Test your site** - you're live!

**Estimated time:** 30-45 minutes

Your website will be hosted free forever on Cloudflare with the same performance and features as Manus hosting.
