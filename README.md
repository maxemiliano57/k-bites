# K-Bites

K‑Bites is a Korean food explorer app that helps people find iconic and trending dishes, learn ingredients, and save their favorites. The app showcases Korean cuisine through visuals, cultural notes, and a simple, modern interface.

---

## Planned Features

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
