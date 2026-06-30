# EduWings – ایڈیوونگز

**Promoting reading through evidence-based research**  
تحقیق پر مبنی مواد کے ذریعے مطالعے کا فروغ

A bilingual (English/Urdu) educational publishing website built with Jekyll, Tailwind CSS, and vanilla JavaScript. Deployed to GitHub Pages at:

**https://kitabomori.github.io/**

---

## Table of Contents

1. [What this site is](#what-this-site-is)
2. [First-time setup](#first-time-setup)
3. [How to add new content](#how-to-add-new-content)
4. [Testing locally](#testing-locally)
5. [Deploying](#deploying)
6. [Colour reference](#colour-reference)
7. [Adding social links and Google Form](#adding-social-links-and-google-form)
8. [File structure overview](#file-structure-overview)

---

## What this site is

EduWings publishes six types of content:

| Type | Folder | Purpose |
|------|--------|---------|
| Blogs | `_collections/_blogs/` | Evidence-based arguments (800–1000 words) |
| Op-Eds | `_collections/_opeds/` | Experience-grounded opinion with recommendations |
| Letters | `_collections/_letters/` | Personal letters from educators and students |
| Book Reviews | `_collections/_book_reviews/` | Critical reviews of education-related books |
| Reflections | `_collections/_reflections/` | Short personal observations |
| Calls | `_collections/_calls/` | Announcements and calls for submissions |

---

## First-time setup

### Prerequisites

- [Git](https://git-scm.com/)
- [Ruby 3.2+](https://www.ruby-lang.org/)
- [Node.js 20+](https://nodejs.org/)

### Clone and install

```bash
git clone https://github.com/kitabomori/kitabomori.github.io.git
cd kitabomori.github.io
gem install jekyll bundler
bundle install
npm install
```

---

## How to add new content

You do not need to know code to add content. Follow these steps:

### Step 1 – Copy the template

Copy `_drafts/template-post.md` into the correct folder. For example, to add a new letter:

```
_collections/_letters/my-letter-title.md
```

Use only lowercase letters, numbers, and hyphens in the filename (no spaces).

### Step 2 – Edit the front matter

Open the file and fill in the values at the top:

```yaml
---
layout: post
title_en: "Your English Title"
title_ur: "آپ کا اردو عنوان"
date: 2026-07-01
description_en: "A one-sentence summary in English."
description_ur: "ایک جملے میں اردو خلاصہ۔"
---
```

### Step 3 – Write your content

Below the front matter, write your content using this pattern:

```liquid
{% if site.lang == 'ur' %}

اردو متن یہاں لکھیں۔

{% else %}

Write your English content here.

{% endif %}
```

If you only have English content, you can write it without the Liquid tags — just put it directly in the file. The Urdu build will display it as well until a translation is added.

### Step 4 – Save and push

If using the GitHub website:
1. Go to your repository at `https://github.com/kitabomori/kitabomori.github.io`
2. Navigate to the correct folder (e.g. `_collections/_letters/`)
3. Click **Add file → Create new file**
4. Paste your content
5. Click **Commit changes**

If using VS Code or the terminal:
```bash
git add .
git commit -m "Add new letter: my-letter-title"
git push
```

The site will rebuild automatically within 2–3 minutes.

---

## Testing locally

To preview the site on your computer before pushing:

```bash
# Build CSS first
npm run build:css:dev

# Serve the English version
bundle exec jekyll serve --config _config_shared.yml,_config_en.yml

# In a second terminal, serve the Urdu version on a different port
bundle exec jekyll serve --config _config_shared.yml,_config_ur.yml --port 4001
```

Open `http://localhost:4000` for English, `http://localhost:4001` for Urdu.

---

## Deploying

Deployment is automatic. Every time you push to the `main` branch, GitHub Actions will:

1. Build the Tailwind CSS
2. Build both language versions of the site
3. Deploy to the `gh-pages` branch

You do not need to do anything else.

**First deployment:** Go to your repository Settings → Pages → Source, and select `gh-pages` branch, root folder. Save. The site will be live at `https://kitabomori.github.io/`.

---

## Colour reference

| Colour | Hex | Used for |
|--------|-----|---------|
| Teal | `#009F93` | Header, footer, nav, buttons, headings, links |
| White | `#FFFFFF` | Page backgrounds, cards, light mode |
| Green | `#00C851` | Ticker text |

No other accent colours are used anywhere on the site.

---

## Adding social links and Google Form

### YouTube and social media

Open `_includes/footer.html`. Find this comment:

```html
<!-- YouTube: replace # with your channel URL when ready -->
<a href="#" style="color:#FFFFFF;">YouTube</a>
```

Replace `#` with your YouTube channel URL, for example:

```html
<a href="https://www.youtube.com/@YourChannel" style="color:#FFFFFF;">YouTube</a>
```

Add more links in the same format for other platforms.

### Google Form (Contact page)

Open `pages/contact.md`. Find this block:

```html
<!-- Google Form embed: replace the src URL below with your actual Google Form embed link when ready -->
<!-- <iframe src="YOUR_GOOGLE_FORM_EMBED_URL_HERE" ...></iframe> -->
```

Remove the `<!--` and `-->` comment markers, then replace `YOUR_GOOGLE_FORM_EMBED_URL_HERE` with your actual Google Form embed URL.

---

## File structure overview

```
kitabomori.github.io/
├── .github/workflows/deploy.yml   ← GitHub Actions: builds and deploys
├── _config_shared.yml             ← Collections and settings shared by both languages
├── _config_en.yml                 ← English-specific config (lang, font, direction)
├── _config_ur.yml                 ← Urdu-specific config (lang, font, direction RTL)
├── _data/navigation.yml           ← All nav links (edit to add/remove menu items)
├── _includes/                     ← Reusable HTML fragments
│   ├── head.html                  ← <head> block (fonts, CSS, metadata)
│   ├── header.html                ← Top navigation bar
│   ├── footer.html                ← Footer (edit for social links)
│   └── ticker.html                ← Scrolling news ticker (Home only)
├── _layouts/                      ← Page templates
│   ├── base.html                  ← Root layout (html, head, body)
│   ├── page.html                  ← For standard pages
│   └── post.html                  ← For collection items
├── _collections/                  ← All published content lives here
│   ├── _blogs/
│   ├── _opeds/
│   ├── _letters/                  ← Sample: letter-to-teacher.md
│   ├── _book_reviews/
│   ├── _reflections/
│   └── _calls/
├── pages/                         ← Static pages
│   ├── home.md
│   ├── guidelines.md
│   ├── reflections.md
│   ├── main-ne-kya-dekha.md
│   ├── contact.md
│   ├── search.md
│   └── privacy.md
├── _drafts/
│   └── template-post.md           ← Copy this to create new content
├── assets/
│   ├── css/main.css               ← Tailwind input (edit for style changes)
│   └── js/
│       ├── theme.js               ← Dark mode logic
│       └── search.js              ← Client-side search
├── search_index.json              ← Auto-generated search index
├── index.html                     ← Language-detect redirect
├── 404.html                       ← Bilingual 404 page
├── tailwind.config.js             ← Tailwind configuration + brand colours
├── postcss.config.js
├── package.json
├── Gemfile
└── README.md
```

---

## Contact

kitabomori@gmail.com
