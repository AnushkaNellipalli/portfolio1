# Anushka Nellipalli – Developer Portfolio (React + Vite)

## Run locally
    npm install
    npm run dev        # http://localhost:5173

## Production build
    npm run build && npm run preview

## Customize
Edit `src/config.js`: profile, social links, LeetCode numbers, project features, GitHub repo URLs
(GitHub buttons stay as "coming soon" until a URL is set) and screenshots (put images in `public/`, e.g. `screenshot: '/shopsphere.png'`).

## Upload to GitHub
    git init && git add . && git commit -m "Portfolio"
    git branch -M main
    git remote add origin https://github.com/AnushkaNellipalli/<repo-name>.git
    git push -u origin main

## Deploy on Vercel
1. Go to vercel.com > Add New > Project, import the GitHub repo.
2. Framework: Vite (auto-detected). Build: `npm run build`, output: `dist`.
3. Click Deploy.
