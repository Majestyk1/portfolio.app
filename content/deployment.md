# Deployment & Launch

## Hosting Options
- **Netlify / Vercel:** Easy continuous deployment from a Git repository. Both offer free tiers with HTTPS, custom domain support, and serverless functions if needed. Ideal for React/Vite apps.  
- **Firebase Hosting:** Integrated with Firebase services. Good for PWAs with fast CDN delivery. Also provides free SSL and simple CLI deployment.  
- **GitHub Pages:** A simple, free option for static sites, especially useful if you want to host directly from your GitHub repo. Best used with SPA routing fallback configured.

## Launch Steps
1. **Finalize content:** Proofread all copy, ensure all images are optimized (compressed and appropriately sized), and double-check accessibility tags.
2. **Set up environment:** Add `.env` file with any required public environment variables. Ensure proper build command is configured (e.g., `vite build`).
3. **Build the project:** Run `npm run build` to generate the production-ready version of your site.
4. **Test locally:** Serve the build locally using `vite preview` or a similar tool to ensure everything works as expected.
5. **Deploy:** Connect your GitHub repo to Vercel, Netlify, or Firebase. Set up auto-deploy on `main` branch or push manually.
6. **Configure domain:** Set up a custom domain (e.g., `majestykdev.com`) and update DNS settings if needed. Enable HTTPS.
7. **Verify deployment:** Check that all links, animations, and forms work on both desktop and mobile. Test contact form if implemented.

## SEO & Metadata
- **Title & meta description:** Set a clear, descriptive page title (e.g., "Majestyk Vaughns – Full-Stack Developer") and a short meta description including skills or technologies.
- **Open Graph tags:** Configure `og:title`, `og:description`, and `og:image` for better previews when sharing your site on social platforms.
- **Alt text:** Ensure all images and icons include descriptive alt attributes for accessibility and SEO.
- **Semantic HTML:** Use correct heading levels (`<h1>` through `<h4>`), landmarks (e.g., `<nav>`, `<main>`, `<footer>`), and ARIA attributes where needed.
- **Sitemap & robots.txt:** Add a basic `sitemap.xml` and `robots.txt` file to help search engines crawl your site effectively.

## Post-Launch Checklist
- [ ] Test site on multiple devices (iOS, Android, tablet, desktop).
- [ ] Audit accessibility using Lighthouse or axe DevTools.
- [ ] Run performance tests and address any issues with load time or layout shifts.
- [ ] Add analytics (e.g., Google Analytics or Plausible) to monitor user engagement.
- [ ] Share the site with mentors, peers, and on platforms like LinkedIn.
- [ ] Backup repo and keep documentation up to date.
- [ ] Schedule routine updates (e.g., every 1–2 months) to add new projects or improvements.



