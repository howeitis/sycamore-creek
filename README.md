# Sycamore Creek Consulting Website (v1.0)

This repository contains the source code for the Sycamore Creek Consulting marketing website.

## Overview
*   **Type**: Static React Application (SPA)
*   **Framework**: React 18 + Vite
*   **Hosting**: GitHub Pages
*   **Integration**: Embedded into Google Sites via iframe
*   **Form Backend**: Formspree (AJAX submission)

## Project Structure
The project is a multi-page React app (using Vite's multi-page mode) designed to be embedded as individual components (About, Services, Contact) or viewed as a whole.

*   `src/pages/`: Main page components (`About.jsx`, `Services.jsx`, `Contact.jsx`, `TrackRecord.jsx`).
*   `src/data/`: Data files (`placements.js`).
*   `src/components/`: Reusable UI blocks (`Footer.jsx`, `Closing.jsx`, `Pedigree.jsx`).
*   `src/index.css`: Global styles, typography, and animations.

## Local Development

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Dev Server**:
    ```bash
    npm run dev
    ```
    Visit `http://localhost:5173/` (or the port shown in terminal).

## Deployment

The site is hosted on GitHub Pages. To deploy updates:

1.  **Commit your changes**:
    ```bash
    git add .
    git commit -m "Description of changes"
    git push
    ```

2.  **Deploy**:
    ```bash
    npm run deploy
    ```
    This command runs the build script (`vite build`) and pushes the `dist` folder to the `gh-pages` branch.

## Key Features (v1.0)
*   **Design System**: "Modern Heritage" theme (British Racing Green, Parchment, Teal).
*   **Performance**: Preconnected fonts, optimized build.
*   **Animations**: `fadeInUp` entrance animations and hover effects.
*   **Contact Form**: integrated with Formspree (ID: `xzdaglle`).
*   **Print Friendly**: CSS print styles included.
