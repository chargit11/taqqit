// State management
let currentFilter = 'All';
let allPins = pins;

// DOM Elements
const grid = document.getElementById('grid');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalAvatar = document.getElementById('modalAvatar');
const modalUser = document.getElementById('modalUser');
const categoryContainer = document.getElementById('categoryContainer');
const searchInput = document.getElementById('searchInput');
const fabBtn = document.getElementById('fabBtn');

// Generate color based on index for visual variety
function generateColor(seed) {
    const colors = [
        '#2a2a2a',
        '#1a3a3a',
        '#3a2a1a',
        '#2a1a3a',
        '#1a2a3a',
        '#3a1a2a',
        '#1a3a2a',
        '#2a3a1a'
    ];
    return colors[seed % colors.length];
}

// Create pin card element
function createPinCard(pin, index) {
    const card = document.createElement('div');
    card.className = 'pin-card';
    card.onclick = () => openModal(pin, index);
    
    const imageHeight = pin.height;
    const bgColor = generateColor(index);
    
    card.innerHTML = `
        <div class="pin-image" style="height: ${imageHeight}px; background: ${bgColor};"></div>
        <div class="pin-content">
            <h3 class="pin-title">${pin.title}</h3>
            <p class="pin-description">${pin.description}</p>
            <div class="pin-footer">
                <div class="pin-user">
                    <div class="user-avatar">${pin.user.charAt(0)}</div>
                    <div class="user-name">${pin.user}</div>
                </div>
                <button class="save-btn" onclick="event.stopPropagation(); savePin('${pin.title}');">Save</button>
            </div>
        </div>
    `;
    
    return card;
}

// Load and display pins
function loadPins(pinsToShow = pins) {
    grid.innerHTML = '';
    
    if (pinsToShow.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <h3>No pins found</h3>
                <p>Try adjusting your search or filter</p>
            </div>
        `;
        return;
    }
    
    pinsToShow.forEach((pin, index) => {
        grid.appendChild(createPinCard(pin, index));
    });
}

// Filter pins by category
function filterByCategory(category) {
    currentFilter = category;
    
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === category) {
            btn.classList.add('active');
        }
    });
    
    // Filter pins
    if (category === 'All') {
        loadPins(pins);
    } else {
        const filtered = pins.filter(pin => pin.category === category);
        loadPins(filtered);
    }
}

// Search functionality
function searchPins(query) {
    query = query.toLowerCase().trim();
    
    if (!query) {
        filterByCategory(currentFilter);
        return;
    }
    
    const baseFilter = currentFilter === 'All' ? pins : pins.filter(pin => pin.category === currentFilter);
    
    const filtered = baseFilter.filter(pin => {
        return pin.title.toLowerCase().includes(query) ||
               pin.description.toLowerCase().includes(query) ||
               pin.user.toLowerCase().includes(query);
    });
    
    loadPins(filtered);
}

// Open modal with pin details
function openModal(pin, index) {
    const bgColor = generateColor(index);
    
    modalImage.style.background = bgColor;
    modalImage.style.height = `${pin.height}px`;
    modalTitle.textContent = pin.title;
    modalDescription.textContent = pin.description;
    modalUser.textContent = pin.user;
    modalAvatar.textContent = pin.user.charAt(0);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Save pin (placeholder function)
function savePin(title) {
    console.log(`Saved: ${title}`);
    // In a real app, this would save to a backend or local storage
    alert(`Saved: ${title}`);
}

// Load categories
function loadCategories() {
    categoryContainer.innerHTML = '';
    
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        if (category === 'All') {
            btn.classList.add('active');
        }
        btn.textContent = category;
        btn.onclick = () => filterByCategory(category);
        categoryContainer.appendChild(btn);
    });
}

// Initialize app
function init() {
    loadCategories();
    loadPins();
    
    // Event listeners
    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Search functionality
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchPins(e.target.value);
        }, 300);
    });
    
    // FAB button (placeholder)
    fabBtn.addEventListener('click', () => {
        alert('Create new pin feature coming soon!');
    });
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
