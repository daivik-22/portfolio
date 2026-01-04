---
description: How to run and deploy the portfolio website
---

# Running & Deploying Your Portfolio

Follow these steps to get your portfolio live.

## 1. Running Locally
// turbo
1. Navigate to the project directory:
   ```bash
   cd portfolio
   ```
// turbo
2. Install dependencies:
   ```bash
   npm install
   ```
// turbo
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the link displayed in your terminal (usually `http://localhost:5173`).

---

## 2. Deployment Options

### Option A: Vercel (Recommended - Fastest)
1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New"** > **"Project"**.
4. Import your portfolio repository.
5. Vercel will automatically detect Vite settings. Click **"Deploy"**.
6. Your site will be live on a `vercel.app` domain in seconds.

### Option B: GitHub Pages
1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Update `vite.config.ts`:
   Add `base: '/your-repo-name/'` to the config.
3. Add these scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run the deploy command:
   ```bash
   npm run deploy
   ```

### Option C: Netlify
1. Log in to [netlify.com](https://netlify.com).
2. Drag and drop your `dist` folder (after running `npm run build`) onto the Netlify dashboard.
3. Or connect your GitHub repo for continuous deployment.

---

## 3. Post-Deployment Checklist
- [ ] Verify all Social Links (GitHub, LinkedIn, Email).
- [ ] Check mobile responsiveness on a real device.
- [ ] Update the `resume.pdf` in the `public/` folder with your actual resume.
