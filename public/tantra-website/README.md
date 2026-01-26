# Tantra Healing Website

A beautiful, responsive website for a Tantra healing practitioner.

## Folder Structure

```
tantra-website/
├── index.html      # Main HTML file (pure HTML, no inline code)
├── style.css       # All CSS styling
├── script.js       # JavaScript for FAQ accordion & mobile menu
├── src/            # Images folder
│   ├── hero-image.jpg
│   ├── about-image.jpg
│   └── logo-icon.png
└── README.md       # This file
```

## Required Images

Add these images to the `src/` folder:

1. **hero-image.jpg** - Main hero section image (recommended: 600x400px or larger)
2. **about-image.jpg** - About section portrait image (recommended: 500x450px)
3. **logo-icon.png** - Logo icon (recommended: 40x40px, transparent PNG)

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Pure HTML structure (no inline styles or scripts)
- ✅ FAQ accordion functionality
- ✅ Smooth scroll navigation
- ✅ Mobile hamburger menu
- ✅ Modern, clean aesthetic with soft, calming colors

## How to Use

1. Download all files including the `src` folder
2. Add your images to the `src/` folder
3. Update pricing information (currently shows €xxx)
4. Customize text content as needed
5. Host on any web server

## Customization

### Colors
Edit the CSS custom properties in `style.css`:
```css
:root {
    --primary: #9a6b7c;      /* Main accent color */
    --primary-light: #c4a4af;
    --primary-dark: #7a4f5e;
    --secondary: #d4a574;
    --background: #fdfbf9;
    --text: #4a3f44;
}
```

### Fonts
Uses Google Fonts:
- **Cormorant Garamond** - Elegant serif for headings
- **Open Sans** - Clean sans-serif for body text

## Browser Support

Compatible with all modern browsers:
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Creating a ZIP Package

To create a downloadable ZIP:
1. Select all files: `index.html`, `style.css`, `script.js`, `src/` folder
2. Right-click → "Compress" or "Send to → Compressed folder"
3. Rename to `tantra-website.zip`
