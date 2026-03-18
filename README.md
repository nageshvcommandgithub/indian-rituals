# Indian Rituals - Discovering the Wisdom Behind Traditions

A web application that explores the deep meaning and scientific reasons behind Indian rituals and traditions. Our ancestors designed these practices with profound understanding of nature, health, and social harmony. This project aims to preserve and share this timeless wisdom.

## 🌟 Features

- **Browse by Category**: Explore rituals organized by Daily Life, Temple Visits, Life Events, Festivals, and Gestures
- **Search Functionality**: Find specific rituals quickly with real-time search
- **Detailed Explanations**: Each ritual includes:
  - The practice and how it's performed
  - Cultural and spiritual meaning
  - Scientific and practical reasons
  - Historical context
  - Regional variations across India
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **No Dependencies**: Built with vanilla HTML, CSS, and JavaScript - no frameworks required

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (optional but recommended for development)

### Running the Application

#### Option 1: Direct File Access (Simple)

1. Open the project folder
2. Double-click on `index.html` to open it in your browser

**Note**: Some browsers may restrict loading local files. If you see errors, use Option 2.

#### Option 2: Using a Local Web Server (Recommended)

**If you have Python installed:**

```bash
# Python 3
cd indian-rituals
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open your browser and navigate to: `http://localhost:8000`

**If you have Node.js installed:**

```bash
# Install http-server globally
npm install -g http-server

# Run the server
cd indian-rituals
http-server -p 8000
```

Then open your browser and navigate to: `http://localhost:8000`

**Using VS Code:**

1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📁 Project Structure

```
indian-rituals/
├── index.html              # Home page with categories and ritual listings
├── ritual.html             # Ritual detail page
├── css/
│   └── styles.css         # All styling and responsive design
├── js/
│   ├── app.js             # Home page functionality and search
│   └── ritual.js          # Ritual detail page functionality
├── data/
│   └── rituals.json       # All ritual content (add your content here)
└── assets/
    └── images/            # Place any images here (optional)
```

## ✏️ Adding New Rituals

To add a new ritual, edit the `data/rituals.json` file:

### 1. Add to the rituals array:

```json
{
  "id": "unique-ritual-id",
  "title": "Name of the Ritual",
  "category": "category-id",
  "icon": "🙏",
  "shortDescription": "Brief one-line description",
  "practice": "How the ritual is performed...",
  "meaning": "The cultural and spiritual significance...",
  "scientificReason": "The scientific explanation and benefits...",
  "historicalContext": "Historical background (optional)",
  "regionalVariations": "How it varies across regions (optional)"
}
```

### 2. Categories available:

- `daily-life` - Everyday practices and gestures
- `temple-visits` - Rituals observed at temples
- `life-events` - Ceremonies for major milestones
- `festivals` - Celebratory traditions
- `gestures` - Meaningful hand and body gestures

### 3. Tips for writing content:

- **Be informative**: Provide clear explanations that anyone can understand
- **Use paragraphs**: Separate different points with `\n\n` for better readability
- **Use bullet points**: Start lines with `•` or `-` for lists
- **Keep it authentic**: Research thoroughly and cite sources when possible
- **Regional respect**: Acknowledge that practices may vary across different parts of India

## 🎨 Customization

### Changing Colors

Edit `css/styles.css` and modify the CSS variables in the `:root` section:

```css
:root {
    --primary-color: #d97706;      /* Main orange color */
    --primary-dark: #b45309;       /* Darker shade */
    --secondary-color: #7c2d12;    /* Brown accent */
    /* ... other colors ... */
}
```

### Adding New Categories

1. Add the category to the `categories` array in `data/rituals.json`:

```json
{
  "id": "your-category-id",
  "name": "Category Name",
  "icon": "📿",
  "description": "Description of this category"
}
```

2. Tag rituals with the new category ID

## 🔧 Future Enhancements

This is an MVP (Minimum Viable Product). Here are ideas for future improvements:

- **Multi-language Support**: Add Hindi, Tamil, Telugu, and other Indian languages
- **User Contributions**: Allow community members to submit new rituals
- **Images and Videos**: Add multimedia content for better understanding
- **Audio Pronunciations**: Help with Sanskrit terms and mantras
- **Social Sharing**: Share rituals on social media
- **Favorites**: Let users bookmark their favorite rituals
- **Migration to Next.js**: Move to a modern framework for better performance and SEO
- **Database Integration**: Store content in a database for easier management
- **Content Management System**: Admin panel for managing content

## 🤝 Contributing

This project aims to preserve cultural knowledge. Contributions are welcome!

1. Research thoroughly and ensure accuracy
2. Provide sources for scientific claims
3. Be respectful of cultural sensitivities
4. Write in clear, accessible language
5. Include regional variations when known

## 📝 Content Guidelines

When adding or editing content:

- **Accuracy**: Verify information from reliable sources
- **Respect**: Treat all traditions with respect and sensitivity
- **Clarity**: Write for a general audience, avoiding jargon
- **Balance**: Present both cultural and scientific perspectives
- **Sources**: Keep track of sources for future reference
- **Inclusivity**: Acknowledge that practices vary across regions and communities

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is intended for educational and cultural preservation purposes.

## 🙏 Acknowledgments

This project honors the wisdom of our ancestors and the rich cultural heritage of India. Special thanks to all who contribute to preserving and sharing this knowledge.

---

**Note**: This application is a living document. As we learn more about our traditions and their meanings, we can continue to update and enhance the content.
