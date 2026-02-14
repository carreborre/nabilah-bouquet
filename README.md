# Nabilah Bouquet

Static website that opens a bouquet of flowers with a heartfelt message.

## Deploy (GitHub Pages)

1. Create a new GitHub repo (suggested name: `nabilah-bouquet`).
2. Run these commands in this folder:

```bash
git init
git add .
git commit -m "Initial: bouquet for Nabilah"
git branch -M main
git remote add origin https://github.com/<your-username>/nabilah-bouquet.git
git push -u origin main
```

3. Wait for the GitHub Actions Pages workflow to finish.
4. Your link will be:
   - https://<your-username>.github.io/nabilah-bouquet/

If you prefer manual Pages setup: Settings → Pages → Branch: `main` / root → Save.

## Local Preview

```bash
npx serve -p 8000
```

Open http://localhost:8000/
