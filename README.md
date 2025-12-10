# Digital Humanities Final Project - Mass Communication Website

## Project Overview
An interactive data story website analyzing celebrity apology discourse on Bluesky through 2,081 posts. This website serves as the mass communication deliverable for Ryan Phua's UCLA Digital Humanities 120 final project.

## Features

### 🎨 Design
- **Dark Mode Data Journalism Aesthetic** - Professional, modern design with vibrant accent colors
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Accessible** - WCAG compliant with keyboard navigation and screen reader support

### ✨ Interactive Elements
- **Scroll-Triggered Animations** - Content reveals as you scroll through the page
- **Animated Number Counters** - Statistics count up when they come into view
- **Progress Bar** - Visual indicator of reading progress
- **Smooth Scrolling** - Elegant navigation between sections
- **PDF Preview Modal** - Click to preview the academic whitepaper

### 📊 Content Sections
1. **Hero Section** - Eye-catching introduction with key statistics
2. **Background** - Context about apology culture and Bluesky platform
3. **Methods** - Visual timeline of research methodology
4. **Key Findings** - Interactive data visualizations with insights
5. **Takeaways** - Main conclusions for general audience
6. **Sources** - Academic citations and references
7. **About** - Project and student information

### 📈 Key Statistics Highlighted
- 2,081 Bluesky posts analyzed
- 51% positive sentiment, 43% negative, 6% neutral
- 18% variance explained by topic (F=12.45, p<0.001)
- 17 disconnected network components
- 68% positive sentiment for authenticity-focused topics vs 28% for skepticism-focused

## File Structure
```
/workspace/
├── index.html              # Main HTML file with all content
├── styles.css              # Complete styling and animations
├── script.js               # JavaScript for interactivity
├── assets/
│   ├── images/            # Data visualizations and charts
│   │   ├── network_1_single.png
│   │   ├── network_1_components_grid.png
│   │   └── [other analysis screenshots]
│   └── whitepaper/        # PDF whitepaper location
│       ├── placeholder.pdf # Placeholder PDF (current)
│       └── whitepaper.pdf  # Final whitepaper (to be added)
└── README.md              # This file
```

## How to Use

### Local Development
1. The website is currently running on a local HTTP server
2. Access it at: **https://8050-39c628ba-a7a2-4f95-aaef-8a5d27c5219d.sandbox-service.public.prod.myninja.ai**
3. All files are in the `/workspace` directory

### Adding the Final Whitepaper
To replace the placeholder PDF with the actual whitepaper:
1. Save your final whitepaper PDF as `whitepaper.pdf`
2. Place it in the `assets/whitepaper/` directory
3. The website will automatically use it instead of the placeholder

### Deployment Options
**Option 1: Use the Deploy Tool (Permanent Hosting)**
```bash
# This will deploy to a permanent public URL
# Only use when ready for final submission
```

**Option 2: Download and Host Elsewhere**
- Download all files (index.html, styles.css, script.js, assets/)
- Upload to any web hosting service (GitHub Pages, Netlify, Vercel, etc.)
- Ensure the folder structure is maintained

## Technical Details

### Technologies Used
- **HTML5** - Semantic markup for accessibility
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript** - No dependencies, pure JS for performance
- **Intersection Observer API** - Efficient scroll animations
- **CSS Custom Properties** - Easy theme customization

### Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Optimizations
- Lazy loading for images
- RequestAnimationFrame for smooth animations
- Passive event listeners for scroll performance
- Minimal external dependencies (zero!)
- Optimized CSS with hardware acceleration

### Accessibility Features
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Skip to content link
- High contrast mode support
- Reduced motion support for users with vestibular disorders
- Focus indicators for keyboard users

## Customization

### Changing Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
    --accent-primary: #00d9ff;    /* Primary accent color */
    --accent-secondary: #7c3aed;  /* Secondary accent color */
    --bg-dark: #0a0e27;           /* Dark background */
    /* ... more variables */
}
```

### Updating Content
All content is in `index.html`. Each section is clearly marked with comments:
```html
<!-- Hero Section -->
<!-- Background Section -->
<!-- Methods Section -->
<!-- etc. -->
```

### Adding More Visualizations
1. Add images to `assets/images/`
2. Reference them in HTML:
```html
<img src="assets/images/your-image.png" alt="Description" class="data-image">
```

## Project Context

### Research Question
"What factors in Bluesky apology discourse correlate with positive versus negative sentiment, and how do these patterns inform our understanding of effective public accountability?"

### Key Findings
1. **Topic is Primary Factor** - Explains 18% of sentiment variance
2. **Authenticity Matters** - 68% positive for authentic vs 28% for skeptical discourse
3. **Platform Architecture** - Decentralization enables more nuanced conversations
4. **Language Choices** - Specific markers predict sentiment with large effect size

### Academic Sources
The website includes 10 peer-reviewed academic sources covering:
- Digital communication and platform studies
- Sentiment analysis and discourse analysis
- Social media and celebrity culture
- Network analysis and community dynamics

## Credits
- **Student**: Ryan Phua
- **Course**: UCLA Digital Humanities 120
- **Term**: Fall 2024
- **Project Type**: Final Project - Mass Communication Deliverable

## Support
For questions or issues with the website, refer to the project documentation or contact the course instructor.

---

**Note**: This website is designed to be accessible to general audiences, not just academics. The language is intentionally clear and engaging, with minimal jargon and a story-driven narrative approach.