# Deployment Guide for Lyons Masonry

This guide will help you push your project to GitHub and deploy it.

## Prerequisites

Before pushing to GitHub, ensure you have:

1. **Git installed** - Download from [git-scm.com](https://git-scm.com/downloads)
2. **Node.js and npm installed** - Download from [nodejs.org](https://nodejs.org/)
3. **GitHub account** - Sign up at [github.com](https://github.com/)

## Step 1: Install Dependencies

Open PowerShell or Command Prompt in the project directory and run:

```bash
npm install
```

## Step 2: Verify the Project

Run type checking to ensure there are no TypeScript errors:

```bash
npm run type-check
```

Build the project to verify everything works:

```bash
npm run build
```

## Step 3: Initialize Git Repository

If git is not already initialized in your project:

```bash
git init
```

## Step 4: Add Files to Git

Add all files to git (the .gitignore will automatically exclude node_modules and other unnecessary files):

```bash
git add .
```

Check what will be committed:

```bash
git status
```

## Step 5: Create Initial Commit

```bash
git commit -m "Initial commit: Lyons Masonry website"
```

## Step 6: Connect to GitHub Repository

Add the remote repository:

```bash
git remote add origin https://github.com/collinsadoff/Lyons-Masonry.git
```

Verify the remote was added:

```bash
git remote -v
```

## Step 7: Push to GitHub

Push your code to GitHub:

```bash
git branch -M main
git push -u origin main
```

You may be prompted to authenticate with GitHub. Follow the prompts to complete authentication.

## Step 8: Verify on GitHub

1. Go to https://github.com/collinsadoff/Lyons-Masonry
2. Verify all your files are there
3. Check that the README.md displays correctly

## Deploying the Website

### Option 1: Vercel (Recommended)

1. Sign up at [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Add environment variable: `GEMINI_API_KEY`
5. Click "Deploy"

### Option 2: Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add environment variable: `GEMINI_API_KEY`
7. Click "Deploy site"

### Option 3: GitHub Pages

1. Build the project: `npm run build`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
4. Run: `npm run deploy`
5. Enable GitHub Pages in repository settings

## Environment Variables for Production

Don't forget to set these environment variables in your deployment platform:

- `GEMINI_API_KEY` - Your Google Gemini API key

## Troubleshooting

### Git not recognized
- Restart your terminal after installing Git
- Ensure Git is in your system PATH

### npm not recognized
- Install Node.js from nodejs.org
- Restart your terminal after installation

### Authentication issues
- Use GitHub CLI: `gh auth login`
- Or use SSH keys: [GitHub SSH setup guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Run `npm run type-check` to find TypeScript errors

## Need Help?

- GitHub Docs: https://docs.github.com
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com

---

**Good luck with your deployment!** 🚀
