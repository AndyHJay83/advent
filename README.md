# The Magician's Desk - Advent Calendar

A magical, self-contained advent calendar website featuring an interactive card-based interface that unlocks each day in December.

## Features

- 🎴 **24 Interactive Cards**: Beautifully designed cards that flip open to reveal daily content
- 🔒 **Date-Based Locking**: Cards unlock automatically based on the current date (only in December)
- 💾 **Persistent Progress**: Uses localStorage to remember which cards you've opened
- ✨ **Magical Animations**: Smooth 3D card flips, sparkle effects, and background animations
- 🎨 **Magical Theme**: Warm wooden desk background with candlelight glow and floating dust motes
- 📱 **Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices
- 🔊 **Optional Audio**: Background fireplace sound (requires audio file in assets folder)
- 🎭 **Modal Popups**: Detailed content revealed in elegant modal windows

## Files Structure

```
advent/
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # JavaScript functionality
├── assets/             # Optional assets folder
│   └── fireplace.mp3   # Optional background audio (not included)
└── README.md           # This file
```

## Setup

1. **Clone or download** this repository
2. **Optional**: Add a background audio file
   - Place a fireplace crackle or ambient sound file at `assets/fireplace.mp3`
   - The audio toggle will automatically hide if the file doesn't exist
3. **Deploy to GitHub Pages**:
   - Push to a GitHub repository
   - Go to Settings → Pages
   - Select source: `main` branch, `/root` folder
   - Your site will be live at `username.github.io/repo-name`

## Customization

### Changing Content

Edit the `adventContent` object in `script.js` to customize the content for each day:

```javascript
const adventContent = {
    1: {
        title: "Day 1: Your Title",
        content: "<p>Your HTML content here</p><blockquote>Your quote</blockquote>"
    },
    // ... etc
};
```

### Styling

All styles are in `style.css`. Key CSS variables you can customize:

```css
:root {
    --wood-dark: #4a3c2a;
    --wood-medium: #6b5537;
    --gold: #d4af37;
    --deep-red: #8b2635;
    /* ... more variables */
}
```

### Fonts

The site uses Google Fonts (Cormorant Garamond and Great Vibes). These are loaded via CDN in the HTML head. To use different fonts:

1. Choose fonts from [Google Fonts](https://fonts.google.com/)
2. Update the `<link>` tag in `index.html`
3. Update the `font-family` properties in `style.css`

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript and CSS Grid/Flexbox support
- localStorage support (for progress persistence)

## License

Feel free to use and modify this project for your own advent calendar!

---

*Made with ✨ magic ✨*

