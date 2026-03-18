# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Indian Rituals Explained** - A vanilla JavaScript web application that documents and explains the deep meanings, scientific reasoning, and historical context behind Indian traditions and rituals.

### Purpose
Many rituals and traditions followed in India have lost their original meaning and scientific reasoning over time. This project preserves cultural knowledge by explaining:
- The practice and how it's performed
- Cultural and spiritual meaning
- Scientific and practical reasons
- Historical context
- Regional variations across India

## Technology Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript (no frameworks)
- **Data Storage**: JSON file (`data/rituals.json`)
- **Deployment**: Static site (can be hosted on any web server)

This is intentionally kept simple with no build process or dependencies.

## Running the Application

### Quick Start (Recommended)

Start a local web server to avoid CORS issues:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx http-server -p 8000
```

Then open: `http://localhost:8000`

### Alternative: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

### Simple File Access

Double-click `index.html` to open directly in browser (may have CORS restrictions in some browsers).

## Project Structure

```
/
├── index.html           # Home page with categories and ritual listings
├── ritual.html          # Individual ritual detail page
├── css/
│   └── styles.css      # All styling, uses CSS custom properties
├── js/
│   ├── app.js          # Home page: categories, search, filtering
│   └── ritual.js       # Ritual detail page: displays individual ritual
├── data/
│   └── rituals.json    # ALL content - categories and rituals
├── assets/
│   └── images/         # Place any images here (currently unused)
└── README.md           # User-facing documentation
```

## Key Architecture Concepts

### Data Model

All content is in `data/rituals.json` with two main arrays:

1. **Categories**: Define ritual types (daily-life, temple-visits, life-events, festivals, gestures)
2. **Rituals**: Individual ritual entries with comprehensive details

Each ritual includes:
- `id`: Unique identifier (kebab-case)
- `title`: Display name
- `category`: Category ID reference
- `icon`: Emoji representation
- `shortDescription`: One-line summary for cards
- `practice`: How the ritual is performed
- `meaning`: Cultural/spiritual significance
- `scientificReason`: Scientific explanation and benefits
- `historicalContext`: Historical background (optional)
- `regionalVariations`: Regional differences (optional)

### Page Flow

1. **index.html**: Lists all categories and rituals, with search/filter
   - JavaScript: `js/app.js`
   - Functions: `loadRitualsData()`, `renderCategories()`, `renderRituals()`, `filterByCategory()`, `setupSearch()`

2. **ritual.html**: Displays single ritual details
   - JavaScript: `js/ritual.js`
   - Gets ritual ID from URL query parameter: `?id=ritual-id`
   - Functions: `loadRitualData()`, `displayRitual()`

### Styling

Uses CSS custom properties (CSS variables) defined in `:root` for consistent theming:
- Primary orange color scheme
- Responsive grid layouts
- Mobile-first design

## Common Development Tasks

### Adding a New Ritual

1. Open `data/rituals.json`
2. Add new object to the `rituals` array:

```json
{
  "id": "unique-ritual-id",
  "title": "Ritual Name",
  "category": "category-id",
  "icon": "🙏",
  "shortDescription": "Brief one-line description",
  "practice": "How it's performed...",
  "meaning": "Cultural significance...",
  "scientificReason": "Scientific explanation...\n\n• Bullet points with benefits",
  "historicalContext": "Historical background (optional)",
  "regionalVariations": "Regional differences (optional)"
}
```

**Important**: Use `\n\n` for paragraph breaks and `•` for bullet points.

### Adding a New Category

1. Open `data/rituals.json`
2. Add to the `categories` array:

```json
{
  "id": "category-id",
  "name": "Display Name",
  "icon": "📿",
  "description": "Brief description"
}
```

3. Update rituals to use the new category ID

### Modifying Styles

Edit `css/styles.css`:
- Color scheme: Modify CSS variables in `:root`
- Layout: Look for `.container`, `.grid`, `.card` classes
- Responsive: Media queries are at the bottom of the file

### Testing Content Changes

1. Start local server
2. Edit `data/rituals.json`
3. Refresh browser to see changes immediately
4. No build process needed

## Content Guidelines

### Writing Standards
- Use clear, accessible language for general audience
- Cite sources when making scientific claims
- Use bullet points (•) for lists in JSON fields
- Use `\n\n` for paragraph breaks in JSON text fields
- Be respectful and culturally sensitive
- Acknowledge regional variations

### Text Formatting in JSON

**Paragraphs**: Use `\n\n` to separate paragraphs
```json
"text": "First paragraph.\n\nSecond paragraph."
```

**Bullet Lists**: Use `•` or `-` at the start of lines
```json
"scientificReason": "Benefits:\n\n• First benefit\n• Second benefit\n• Third benefit"
```

### Security Notes

- The code uses `escapeHtml()` function to prevent XSS in `js/app.js:10-14`
- URL parameters are properly encoded with `encodeURIComponent()`
- No user-generated content is stored; all content is curated in JSON file

## Current Content

The application includes 8 rituals across 5 categories:

**Categories:**
- Daily Life (4 rituals)
- Temple Visits (1 ritual)
- Life Events (1 ritual)
- Festivals (0 rituals)
- Gestures (2 rituals)

**Existing Rituals:**
1. Touching Feet After Accidental Contact
2. Giving with the Right Hand
3. Throwing Coins in Temple Ponds
4. Saptapadi - Seven Steps Around Fire
5. Namaste - The Traditional Greeting
6. Removing Footwear Before Entering Home
7. Rangoli at the Entrance
8. Tulsi Plant in the Courtyard

## Cultural Sensitivity

This project deals with religious and cultural practices:
- Approach all content with respect and accuracy
- Present both traditional and scientific perspectives
- Avoid making judgments about belief validity
- Acknowledge multiple interpretations may exist
- Include regional variations where known

## Future Enhancements (from README.md)

Potential improvements:
- Multi-language support (Hindi, Tamil, Telugu, etc.)
- User contribution system with moderation
- Images and videos for better understanding
- Audio pronunciations for Sanskrit terms
- Social sharing functionality
- Favorites/bookmarking feature
- Migration to Next.js for better performance and SEO
- Database integration for easier content management
- Admin panel/CMS for content management

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Uses modern JavaScript (async/await, arrow functions, template literals) but no framework-specific features.
