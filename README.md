# K-Bites

K‑Bites is a Korean food explorer app that helps people find iconic and trending dishes, learn ingredients, and save their favorites. The app shows Korean cuisine through visuals, cultural notes, and a simple, modern interface.

---

## Features

| Feature | Description |
|---|---|
| **Dish Browser** | Browse a curated collection of iconic and trending Korean dishes |
| **Dish Details** | View dish descriptions, cultural context, and ingredient breakdowns |
| **Favorites System** | Save and manage your personal list of favorite dishes |
| **Ingredient Glossary** | Explore common Korean ingredients with descriptions and usage notes |
| **Random Dish Generator** | Discover something new with a single click |

---

## Tech Stack

- **Framework** — React 19
- **Build Tool** — Vite
- **Language** — JavaScript (JSX)
- **Font** — Noto Sans KR (Google Fonts)
- **Deployment** — Netlify
- **React Router v7** — client-side routing and navigation
- **localStorage** — favorites and random dish persistence

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/your-username/k-bites.git
cd k-bites
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Output is written to the `dist/` folder.

---

## Deployment

This project is configured for deployment on **Netlify**.

The `netlify.toml` at the root handles the build command, publish directory, and SPA redirects automatically.

To deploy:
1. Push this repository to GitHub
2. Connect the repo in the Netlify dashboard
3. Netlify will detect the config and deploy automatically on every push to `main`

---

## Project Structure

```
k-bites/
├── public/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page-level components
│   ├── data/           # Static data and constants
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── netlify.toml
└── vite.config.js
```
## Limitations

```
The dish and ingredient data is written directly into the code, which means there is no backend or database.
Favorites are stored in the browser's localStorage only and do not sync across devices.
The images are not lazy-loaded and may be slow when a user is first visiting the website.
```
## What I Learned

```
I learned that working with AI on this project is actually the most useful for making boilerplate and making the structure of the app/website but you still have to understand the code in order to catch what it gets wrong. One example of this is when I was debugging the images. Claude helped me notice that Vite only serves static files from the public/ folder, but I had come to find out that several filenames had spaces in them that were causing the URLs to break. I also learned that the most effective way to use Claude is to give it very specific and structured prompts, kind of like when I asked for a whole plan with data structures, routing, localStorage keys, and a component breakdown all in one sitting, which it generated in one try and I barely even had to change it. Overall,I think that Claude sped up my workflow, but when it came to the actual decision making of what to keep, what to change, and what to simplify, it all had to come from me and not from Claude.


