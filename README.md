# Dramatcp

Personal site. Astro blog template, dark theme, no comments/likes/views/analytics by design.

Live at: https://fytsai-yolo.github.io/dramatcp/

## Publishing a new article

This is the whole workflow:

1. Add a Markdown file under `src/content/blog/`, e.g. `src/content/blog/my-post.md`:

   ```yaml
   ---
   title: '文章標題'
   description: '一句話描述，用於列表頁、RSS、搜尋結果'
   pubDate: 2026-09-27
   tags: ['breaking', '工程']
   ---
   Article body in Markdown goes here.
   ```

   Frontmatter fields:
   - `title`, `description`, `pubDate` — required
   - `tags` — array of strings, optional (defaults to empty)
   - `updatedDate` — optional, date
   - `heroImage` — optional, relative path to an image under `src/assets/`

2. Commit and push to `main`:

   ```sh
   git add src/content/blog/my-post.md
   git commit -m "Add: my-post"
   git push
   ```

3. GitHub Actions builds and deploys automatically (`.github/workflows/deploy.yml`). Check progress with:

   ```sh
   gh run watch
   ```

   Live in ~30–60 seconds after the push.

## Local preview

```sh
npm install
npm run astro -- dev --background
```

Opens at `http://localhost:4321/dramatcp/` — note the `/dramatcp` path prefix; it matches the deployed GitHub Pages project-site path (see `base` in `astro.config.mjs`). Manage the background server with:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

To check a production build before pushing:

```sh
npm run build
npm run preview
```

## Structure

```
src/
├── consts.ts          site name, bio/description, contact email
├── content/blog/      articles (Markdown/MDX)
├── pages/             routes: /, /blog, /about, /rss.xml
├── layouts/            BlogPost.astro — shared article layout
├── components/        Header, Footer, BaseHead (meta/OG/fonts), etc.
└── styles/global.css  theme variables, typography, code blocks
```

## Content privacy: drafts vs. published (decided 2026-09-28)

- This repo (`dramatcp`) is public and holds only *published* content.
- Drafts, voice transcripts, and review notes will live in a separate **private** repo (proposed name `dramatcp-drafts`, to be created in Phase 1 of the writing-workflow project). The Obsidian vault points at that repo, not this one.
- Publishing = copy the finished file from the drafts repo into `src/content/blog/` here, flip `draft: false`, commit, push to `main`. That copy step is the one manual publish action.
- Chosen over a gitignored folder inside this repo because a separate repo makes leakage structurally impossible (drafts are never in this repo's working tree at all) rather than relying on `.gitignore` rules never being wrong or bypassed.
- Rejected: making this repo private outright — GitHub Free doesn't support Pages on private repos (needs Pro), and it would also hide the published site's source, which has some value as a public portfolio piece.

## Notes

- Site name, bio, about text, and contact email live in [`src/consts.ts`](src/consts.ts) — edit there, not per-page.
- Deploying elsewhere later (custom domain, Cloudflare Pages, etc.) means revisiting `site` and `base` in `astro.config.mjs`; a custom domain at the root removes the need for `base` entirely.
- Not implemented on purpose: comments, likes/view counts, analytics, search, multi-language, newsletter. See project notes for the v2 list (performance log, English posts, project pages, custom domain).
