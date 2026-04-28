# Practice app

A tiny counter app whose only purpose is to teach you how to deploy something to Vercel. Once this is live and you can see it on your phone, you'll know exactly how to deploy the real app.

What it does: shows a number, lets you increment / decrement / reset it. The count persists in localStorage so refreshing the page doesn't lose it.

---

## Step 1: Run it on your Mac (5 min)

Open Terminal, `cd` into this folder, then:

```bash
npm install
npm run dev
```

You'll see something like:

```
  VITE v5.x.x  ready in 234 ms

  ➜  Local:   http://localhost:5173/
```

Open that URL in your browser. You should see a card with the count and three buttons. Click around. Refresh the page — the count survives. ✓

If this works, the local dev environment is good. Stop the dev server (Ctrl+C) and move on.

---

## Step 2: Push to GitHub (5 min)

### 2a. Make sure you have git and a GitHub account

```bash
git --version
```

If that errors, install git: `brew install git` (or download from git-scm.com).

If you don't have a GitHub account, make one at github.com.

### 2b. Create a new GitHub repo

1. Go to **github.com**
2. Click the **+** in the top right → **New repository**
3. Name it whatever (e.g. `practice-app`)
4. Leave it **Public** or **Private** — doesn't matter for this
5. **Don't** check any of the "initialize with README" boxes
6. Click **Create repository**

GitHub now shows you a setup page. Copy the section that says "…or push an existing repository from the command line" — should look like:

```bash
git remote add origin https://github.com/YOUR_USERNAME/practice-app.git
git branch -M main
git push -u origin main
```

### 2c. In Terminal, in this project folder, run:

```bash
git init
git add .
git commit -m "first commit"
```

Then paste the three commands GitHub gave you (the `git remote add origin …` block).

If GitHub asks you to authenticate, follow the prompts. Modern GitHub uses either browser auth or a personal access token — it'll guide you.

After this finishes, refresh the GitHub repo page in your browser. You should see all your files there. ✓

---

## Step 3: Deploy to Vercel (5 min)

### 3a. Make a Vercel account

1. Go to **vercel.com**
2. Click **Sign Up**
3. **Choose "Continue with GitHub"** — important, this links the accounts
4. Authorize Vercel when GitHub asks

### 3b. Import the repo

1. On Vercel's dashboard, click **Add New → Project**
2. You'll see a list of your GitHub repos. Find `practice-app` and click **Import**
3. Vercel auto-detects "Vite" as the framework. Don't change anything.
4. Click **Deploy**

You'll see a build log streaming. Wait ~30-60 seconds for "Build Completed."

### 3c. See your live app

Vercel gives you a URL like `practice-app-yourname.vercel.app`. Click it. You should see the counter app, live on the internet. ✓

Open the URL on your phone — same app, working. ✓

---

## Step 4: Make a change and redeploy (2 min)

This proves the magic of Vercel: you push code, it auto-deploys.

1. Open `src/App.jsx` in your editor
2. Change `your count` to something else like `taps`
3. Save the file
4. In Terminal:

```bash
git add .
git commit -m "rename label"
git push
```

5. Go back to Vercel's dashboard. You'll see a new deployment kicking off automatically.
6. ~30 seconds later, refresh your live URL — the change is there. ✓

That's the whole loop. **Edit → commit → push → live.**

---

## What you've learned

1. How to run a Vite project locally (`npm install`, `npm run dev`)
2. How to push code to GitHub (`git init`, `git add`, `git commit`, `git push`)
3. How to import a GitHub repo into Vercel
4. How automatic redeploys work on every push

When you build the real planning app, this entire flow stays the same. Just a different repo with more files.

---

## Common stumbles

**"npm install" fails with weird errors**
You probably need a newer version of Node.js. Install via `brew install node` or download from nodejs.org. Verify with `node --version` — should be 18+.

**"git push" asks for username/password**
GitHub no longer accepts passwords. You need either:
- HTTPS auth via browser (it'll pop open)
- A personal access token (github.com → Settings → Developer settings → Personal access tokens)
- SSH keys (more advanced)

**"Build Failed" on Vercel**
Check the log. Most often this means `npm run build` doesn't actually work locally either. Run `npm run build` on your Mac first to surface the real error.

**The site shows but the buttons do nothing**
Hard refresh (Cmd+Shift+R) — sometimes the browser caches an old version.
