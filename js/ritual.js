// Get ritual ID from URL
function getRitualIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Load and display ritual details
async function loadRitualDetails() {
    const ritualId = getRitualIdFromUrl();

    if (!ritualId) {
        showError('No ritual ID provided');
        return;
    }

    try {
        const response = await fetch('data/rituals.json');
        if (!response.ok) {
            throw new Error('Failed to load rituals data');
        }

        const data = await response.json();
        const ritual = data.rituals.find(r => r.id === ritualId);

        if (!ritual) {
            showError('Ritual not found');
            return;
        }

        renderRitualDetail(ritual, data);
        renderRelatedRituals(ritual, data.rituals);

    } catch (error) {
        console.error('Error loading ritual:', error);
        showError('Failed to load ritual details');
    }
}

// Clear element content safely
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// Render ritual detail
function renderRitualDetail(ritual, data) {
    const container = document.getElementById('ritualDetail');
    if (!container) return;

    // Update page title
    document.title = `${ritual.title} - Indian Rituals`;
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) {
        pageTitle.textContent = `${ritual.title} - Indian Rituals`;
    }

    // Clear container
    clearElement(container);

    // Create header
    const header = document.createElement('div');
    header.className = 'ritual-detail-header';

    const icon = document.createElement('div');
    icon.className = 'ritual-detail-icon';
    icon.textContent = ritual.icon;

    const title = document.createElement('h1');
    title.className = 'ritual-detail-title';
    title.textContent = ritual.title;

    const meta = document.createElement('div');
    meta.className = 'ritual-detail-meta';

    const categoryBadge = document.createElement('span');
    categoryBadge.className = 'ritual-detail-category';
    const category = data.categories.find(c => c.id === ritual.category);
    categoryBadge.textContent = category ? category.name : ritual.category;

    meta.appendChild(categoryBadge);
    header.appendChild(icon);
    header.appendChild(title);
    header.appendChild(meta);

    // Create body
    const body = document.createElement('div');
    body.className = 'ritual-detail-body';

    // Practice section
    addSection(body, 'The Practice', ritual.practice);

    // Meaning section
    addSection(body, 'The Meaning', ritual.meaning);

    // Scientific reason section
    addSection(body, 'Scientific & Practical Reasons', ritual.scientificReason);

    // Historical context section
    if (ritual.historicalContext) {
        addSection(body, 'Historical Context', ritual.historicalContext);
    }

    // Regional variations section
    if (ritual.regionalVariations) {
        addSection(body, 'Regional Variations', ritual.regionalVariations);
    }

    container.appendChild(header);
    container.appendChild(body);
}

// Helper function to add a section
function addSection(container, title, content) {
    const section = document.createElement('div');
    section.className = 'ritual-section';

    const heading = document.createElement('h2');
    heading.textContent = title;

    const text = document.createElement('div');

    // Split content by newlines and create paragraphs
    const paragraphs = content.split('\n\n');
    paragraphs.forEach(para => {
        if (para.trim()) {
            // Check if it's a list
            if (para.includes('•') || para.includes('- ')) {
                const list = document.createElement('ul');
                const items = para.split('\n').filter(line => line.trim());
                items.forEach(item => {
                    const cleanItem = item.replace(/^[•\-]\s*/, '').trim();
                    if (cleanItem) {
                        const li = document.createElement('li');
                        li.textContent = cleanItem;
                        list.appendChild(li);
                    }
                });
                text.appendChild(list);
            } else {
                const p = document.createElement('p');
                p.textContent = para.trim();
                text.appendChild(p);
            }
        }
    });

    section.appendChild(heading);
    section.appendChild(text);
    container.appendChild(section);
}

// Render related rituals
function renderRelatedRituals(currentRitual, allRituals) {
    const relatedSection = document.getElementById('relatedSection');
    const relatedGrid = document.getElementById('relatedGrid');

    if (!relatedSection || !relatedGrid) return;

    // Find related rituals (same category, excluding current)
    const related = allRituals.filter(r =>
        r.category === currentRitual.category && r.id !== currentRitual.id
    ).slice(0, 3); // Show max 3 related rituals

    if (related.length === 0) {
        relatedSection.style.display = 'none';
        return;
    }

    relatedSection.style.display = 'block';
    clearElement(relatedGrid);

    related.forEach(ritual => {
        const card = document.createElement('a');
        card.href = `ritual.html?id=${encodeURIComponent(ritual.id)}`;
        card.className = 'ritual-card';

        const image = document.createElement('div');
        image.className = 'ritual-image';
        image.textContent = ritual.icon;

        const content = document.createElement('div');
        content.className = 'ritual-content';

        const title = document.createElement('h3');
        title.textContent = ritual.title;

        const description = document.createElement('p');
        description.textContent = ritual.shortDescription;

        content.appendChild(title);
        content.appendChild(description);
        card.appendChild(image);
        card.appendChild(content);

        relatedGrid.appendChild(card);
    });
}

// Show error message
function showError(message) {
    const container = document.getElementById('ritualDetail');
    if (!container) return;

    clearElement(container);

    const errorDiv = document.createElement('div');
    errorDiv.className = 'loading';
    errorDiv.style.color = '#ef4444';
    errorDiv.textContent = message;

    container.appendChild(errorDiv);
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadRitualDetails);
} else {
    loadRitualDetails();
}
