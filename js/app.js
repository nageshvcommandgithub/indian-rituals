// Global data storage
let ritualsData = {
    categories: [],
    rituals: []
};

let currentFilter = null;

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Load rituals data
async function loadRitualsData() {
    try {
        const response = await fetch('data/rituals.json');
        if (!response.ok) {
            throw new Error('Failed to load rituals data');
        }
        ritualsData = await response.json();
        return ritualsData;
    } catch (error) {
        console.error('Error loading rituals data:', error);
        return null;
    }
}

// Initialize home page
async function initHomePage() {
    const data = await loadRitualsData();
    if (!data) {
        console.error('Failed to initialize: No data loaded');
        return;
    }

    renderCategories(data.categories);
    renderRituals(data.rituals);
    setupSearch();
}

// Render categories
function renderCategories(categories) {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;

    grid.innerHTML = '';

    categories.forEach(category => {
        const count = ritualsData.rituals.filter(r => r.category === category.id).length;

        const card = document.createElement('div');
        card.className = 'category-card';
        card.dataset.category = category.id;
        card.onclick = () => filterByCategory(category.id);

        const icon = document.createElement('span');
        icon.className = 'category-icon';
        icon.textContent = category.icon;

        const title = document.createElement('h3');
        title.textContent = category.name;

        const description = document.createElement('p');
        description.textContent = category.description;

        const countBadge = document.createElement('span');
        countBadge.className = 'category-count';
        countBadge.textContent = `${count} ritual${count !== 1 ? 's' : ''}`;

        card.appendChild(icon);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(countBadge);

        grid.appendChild(card);
    });
}

// Render rituals
function renderRituals(rituals, searchTerm = '') {
    const grid = document.getElementById('ritualsGrid');
    const noResults = document.getElementById('noResults');
    const sectionTitle = document.getElementById('sectionTitle');

    if (!grid) return;

    let filteredRituals = rituals;

    // Apply category filter
    if (currentFilter) {
        filteredRituals = filteredRituals.filter(r => r.category === currentFilter);
        const categoryName = ritualsData.categories.find(c => c.id === currentFilter)?.name;
        if (sectionTitle) {
            sectionTitle.textContent = categoryName ? `${categoryName} Rituals` : 'All Rituals';
        }
    } else {
        if (sectionTitle) {
            sectionTitle.textContent = searchTerm ? 'Search Results' : 'All Rituals';
        }
    }

    // Apply search filter
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredRituals = filteredRituals.filter(ritual =>
            ritual.title.toLowerCase().includes(term) ||
            ritual.shortDescription.toLowerCase().includes(term) ||
            ritual.practice.toLowerCase().includes(term) ||
            ritual.meaning.toLowerCase().includes(term)
        );
    }

    // Show/hide no results message
    if (noResults) {
        noResults.style.display = filteredRituals.length === 0 ? 'block' : 'none';
    }
    grid.style.display = filteredRituals.length === 0 ? 'none' : 'grid';

    // Clear existing content
    grid.innerHTML = '';

    // Render filtered rituals
    filteredRituals.forEach(ritual => {
        const card = document.createElement('a');
        card.href = `ritual.html?id=${encodeURIComponent(ritual.id)}`;
        card.className = 'ritual-card';

        const image = document.createElement('div');
        image.className = 'ritual-image';
        image.textContent = ritual.icon;

        const content = document.createElement('div');
        content.className = 'ritual-content';

        const category = document.createElement('span');
        category.className = 'ritual-category';
        category.textContent = getCategoryName(ritual.category);

        const title = document.createElement('h3');
        title.textContent = ritual.title;

        const description = document.createElement('p');
        description.textContent = ritual.shortDescription;

        content.appendChild(category);
        content.appendChild(title);
        content.appendChild(description);

        card.appendChild(image);
        card.appendChild(content);

        grid.appendChild(card);
    });
}

// Filter rituals by category
function filterByCategory(categoryId) {
    // Toggle filter
    if (currentFilter === categoryId) {
        currentFilter = null;
    } else {
        currentFilter = categoryId;
    }

    // Update active state on category cards
    document.querySelectorAll('.category-card').forEach(card => {
        if (card.dataset.category === currentFilter) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    // Re-render rituals with filter
    const searchInput = document.getElementById('searchInput');
    renderRituals(ritualsData.rituals, searchInput ? searchInput.value : '');
}

// Get category name by ID
function getCategoryName(categoryId) {
    const category = ritualsData.categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            renderRituals(ritualsData.rituals, e.target.value);
        }, 300);
    });

    // Search on button click
    const searchButton = document.querySelector('.search-button');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            renderRituals(ritualsData.rituals, searchInput.value);
        });
    }

    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            renderRituals(ritualsData.rituals, e.target.value);
        }
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomePage);
} else {
    initHomePage();
}
