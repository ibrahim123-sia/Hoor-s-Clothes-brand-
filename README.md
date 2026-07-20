# Hoor's Clothes Brand

Hoor's Clothes Brand is an online clothing store where customers can browse and shop for clothes from the comfort of their home. The website makes it easy to explore new arrivals, best-selling items, and different clothing categories, then add favorites to the cart and place an order without ever visiting a physical shop. The goal is to give customers a simple, fast, and enjoyable online shopping experience.

An e-commerce storefront for Hoor's Clothes Brand, built with React and Vite.

## Features

- Home page with hero section, best sellers, new arrivals, features, testimonials, and newsletter signup
- Product listing page with category filtering
- Product detail page
- Shopping cart (add-to-cart)
- Responsive UI styled with Tailwind CSS

## Tech Stack

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/) 7
- [React Router](https://reactrouter.com/) 7
- [Tailwind CSS](https://tailwindcss.com/) 3
- [ESLint](https://eslint.org/)

## Project Structure

```
Hoor-s-Clothes-brand-/
└── frontend/          # React + Vite frontend application
    ├── public/        # Static assets (includes Netlify _redirects for SPA routing)
    └── src/
        ├── assets/        # Images
        ├── components/    # Reusable UI components (Navbar, Footer, Hero, etc.)
        ├── data/          # Product data
        ├── pages/         # Route-level pages (Home, Products, ProductDetail)
        └── utils/         # Helper utilities
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module reloading.

### Build

```bash
npm run build
```

Builds the production bundle to `frontend/dist`.

### Preview

```bash
npm run preview
```

Serves the production build locally for a final check.

### Lint

```bash
npm run lint
```

## Deployment

The `frontend/public/_redirects` file configures SPA fallback routing for Netlify. Deploy the `frontend` directory with:

- Build command: `npm run build`
- Publish directory: `frontend/dist`

## License

All rights reserved.
