// Menu data from Inaara Restaurant with premium presentation
const menuData = {
    beverages: [
        {
            name: "Artisanal Coffee Experience",
            description: "Premium roasted coffee beans, expertly brewed to perfection",
            price: "₹79",
            image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80",
            origin: "House Blend",
            dietary: ["veg", "vegan"],
            category: "beverages"
        },
        {
            name: "Himalayan Tea Selection",
            description: "Carefully curated tea leaves, steeped to aromatic excellence",
            price: "₹49",
            image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80",
            origin: "Mountain Estates",
            dietary: ["veg", "vegan"],
            category: "beverages"
        },
        {
            name: "Signature Cold Coffee Délice",
            description: "Rich cold coffee crowned with premium vanilla ice cream",
            price: "₹199",
            image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
            origin: "House Special",
            dietary: ["veg"],
            category: "beverages"
        },
        {
            name: "Fresh Mint Mojito",
            description: "Refreshing blend of fresh mint, lime, and sparkling soda",
            price: "₹129",
            image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80",
            origin: "Garden Fresh",
            dietary: ["veg", "vegan"],
            category: "beverages"
        },
        {
            name: "Blue Lagoon Refresher",
            description: "Tropical blue cocktail with exotic fruit essence",
            price: "₹119",
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80",
            origin: "Tropical Blend",
            dietary: ["veg"],
            category: "beverages"
        }
    ],

    appetizers: [
        {
            name: "Paneer Tikka Royale",
            description: "Succulent cottage cheese marinated in aromatic spices, grilled to perfection",
            price: "₹379",
            image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
            origin: "Punjab Heritage",
            dietary: ["veg"],
            category: "appetizers"
        },
        {
            name: "Paneer Malai Délicatesse",
            description: "Creamy cottage cheese in rich malai marinade with subtle herbs",
            price: "₹379",
            image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
            origin: "Mughal Tradition",
            dietary: ["veg"],
            category: "appetizers"
        },
        {
            name: "Tandoori Platter Assortiment",
            description: "Curated selection of our finest tandoori preparations",
            price: "₹399",
            image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
            origin: "Chef's Selection",
            dietary: ["veg"],
            category: "appetizers"
        },
        {
            name: "Mushroom Tikka Forest",
            description: "Wild mushrooms infused with earthy spices and smoky flavors",
            price: "₹349",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
            origin: "Forest Collection",
            dietary: ["veg", "vegan"],
            category: "appetizers"
        },
        {
            name: "Murg Tandoori Classique",
            description: "Traditional chicken marinated in yogurt and spices, coal-fired",
            price: "₹599",
            image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
            origin: "Tandoor Master",
            dietary: [],
            category: "appetizers"
        },
        {
            name: "Chicken Tikka Premium",
            description: "Tender chicken morsels in aromatic spice blend, charcoal grilled",
            price: "₹449",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&q=80",
            origin: "Traditional Recipe",
            dietary: [],
            category: "appetizers"
        }
    ],

    soups: [
        {
            name: "Cream of Tomato Velouté",
            description: "Silky smooth tomato soup with fresh cream and basil essence",
            price: "₹249",
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
            origin: "Classic French",
            dietary: ["veg"],
            category: "soups"
        },
        {
            name: "Dal Shorba Traditional",
            description: "Aromatic lentil consommé with warming spices and herbs",
            price: "₹199",
            image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&q=80",
            origin: "Indian Heritage",
            dietary: ["veg", "vegan"],
            category: "soups"
        },
        {
            name: "Sweet Corn Végétale",
            description: "Golden corn kernels in rich vegetable broth with garden herbs",
            price: "₹249",
            image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&q=80",
            origin: "Farm Fresh",
            dietary: ["veg"],
            category: "soups"
        },
        {
            name: "Hot & Sour Oriental",
            description: "Tangy soup with mushrooms, tofu, and Asian spices",
            price: "₹249",
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
            origin: "Oriental Tradition",
            dietary: ["veg"],
            category: "soups"
        },
        {
            name: "Chicken Manchow Supreme",
            description: "Rich chicken broth with vegetables and crispy noodles",
            price: "₹275",
            image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&q=80",
            origin: "Indo-Chinese",
            dietary: [],
            category: "soups"
        }
    ],

    mains: [
        {
            name: "Paneer Butter Masala Royale",
            description: "Cottage cheese in rich tomato-butter gravy with aromatic spices",
            price: "₹399",
            image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
            origin: "Mughal Legacy",
            dietary: ["veg"],
            category: "mains"
        },
        {
            name: "Dal Makhani Heritage",
            description: "Slow-cooked black lentils in creamy tomato gravy with butter",
            price: "₹349",
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",
            origin: "Punjab Tradition",
            dietary: ["veg"],
            category: "mains"
        },
        {
            name: "Malai Kofta Délice",
            description: "Cottage cheese dumplings in rich cashew-tomato gravy",
            price: "₹399",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&q=80",
            origin: "Royal Kitchen",
            dietary: ["veg"],
            category: "mains"
        },
        {
            name: "Navratan Korma Maharaja",
            description: "Nine-gem vegetable curry in rich cashew and cream sauce",
            price: "₹399",
            image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
            origin: "Mughal Court",
            dietary: ["veg"],
            category: "mains"
        },
        {
            name: "Butter Chicken Classique",
            description: "Tender chicken in signature tomato-butter sauce with cream",
            price: "₹649",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&q=80",
            origin: "Delhi Heritage",
            dietary: [],
            category: "mains"
        },
        {
            name: "Chicken Kadai Rustic",
            description: "Wok-tossed chicken with bell peppers and aromatic spices",
            price: "₹449",
            image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
            origin: "Traditional Kadai",
            dietary: [],
            category: "mains"
        },
        {
            name: "Mutton Rogan Josh Kashmir",
            description: "Tender lamb in rich Kashmiri spice blend with yogurt",
            price: "₹499",
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",
            origin: "Kashmir Valley",
            dietary: [],
            category: "mains"
        },
        {
            name: "Veg Biryani Aromatic",
            description: "Fragrant basmati rice layered with vegetables and saffron",
            price: "₹399",
            image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&q=80",
            origin: "Hyderabad Style",
            dietary: ["veg"],
            category: "mains"
        },
        {
            name: "Chicken Biryani Royal",
            description: "Premium basmati rice with succulent chicken and exotic spices",
            price: "₹475",
            image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&q=80",
            origin: "Lucknow Tradition",
            dietary: [],
            category: "mains"
        }
    ],

    desserts: [
        {
            name: "Gulab Jamun Classique",
            description: "Golden milk dumplings soaked in aromatic rose-cardamom syrup",
            price: "₹129",
            image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&q=80",
            origin: "Indian Sweet Heritage",
            dietary: ["veg"],
            category: "desserts"
        },
        {
            name: "Rasgulla Bengali",
            description: "Soft cottage cheese balls in delicate sugar syrup",
            price: "₹149",
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
            origin: "Bengal Tradition",
            dietary: ["veg"],
            category: "desserts"
        },
        {
            name: "Fruit Custard Garden",
            description: "Seasonal fresh fruits in rich vanilla custard cream",
            price: "₹149",
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
            origin: "Garden Fresh",
            dietary: ["veg"],
            category: "desserts"
        },
        {
            name: "Brownie Ice Cream Delight",
            description: "Warm chocolate brownie crowned with premium vanilla ice cream",
            price: "₹199",
            image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80",
            origin: "Artisan Creation",
            dietary: ["veg"],
            category: "desserts"
        },
        {
            name: "Premium Ice Cream Selection",
            description: "Choice of vanilla, strawberry, American nuts, or butterscotch",
            price: "₹149",
            image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=80",
            origin: "Artisan Dairy",
            dietary: ["veg"],
            category: "desserts"
        }
    ],

    breakfast: [
        {
            name: "Chole Bhature Traditional",
            description: "Fluffy deep-fried bread with spiced chickpea curry",
            price: "₹249",
            image: "https://images.unsplash.com/photo-1626132647523-66f9bf380027?w=400&q=80",
            origin: "Punjab Classic",
            dietary: ["veg"],
            category: "breakfast"
        },
        {
            name: "Aloo Paratha Artisan",
            description: "Handcrafted flatbread stuffed with spiced potatoes, served with curd",
            price: "₹275",
            image: "https://images.unsplash.com/photo-1630851840690-23d2235b3f3c?w=400&q=80",
            origin: "North Indian Heritage",
            dietary: ["veg"],
            category: "breakfast"
        },
        {
            name: "Pav Bhaji Mumbai",
            description: "Mixed vegetable curry with buttered pav bread rolls",
            price: "₹299",
            image: "https://images.unsplash.com/photo-1626132647523-66f9bf380027?w=400&q=80",
            origin: "Mumbai Street",
            dietary: ["veg"],
            category: "breakfast"
        },
        {
            name: "Idli Sambhar South",
            description: "Steamed rice cakes with aromatic lentil curry and chutney",
            price: "₹199",
            image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80",
            origin: "South Indian",
            dietary: ["veg", "vegan"],
            category: "breakfast"
        },
        {
            name: "Club Sandwich Gourmet",
            description: "Multi-layered sandwich with fresh vegetables and cheese",
            price: "₹299",
            image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&q=80",
            origin: "Continental Style",
            dietary: ["veg"],
            category: "breakfast"
        }
    ]
};

// DOM elements
const menuContainer = document.getElementById('menuItems');
const searchInput = document.getElementById('searchInput');
const vegToggle = document.getElementById('vegToggle');
const imageToggle = document.getElementById('imageToggle');
const searchInfo = document.getElementById('searchInfo');
const searchResults = document.getElementById('searchResults');
const clearSearchBtn = document.getElementById('clearSearch');
const noResults = document.getElementById('noResults');

// Current state
let currentCategory = 'all';
let isVegOnly = false;
let showImages = true;
let searchQuery = '';

// Initialize the menu
function initializeMenu() {
    updateCategoryButtons();
    renderMenu();
    setupEventListeners();
}

// Update category buttons to match our data
function updateCategoryButtons() {
    const categoryNav = document.querySelector('.category-nav');
    categoryNav.innerHTML = `
        <button class="category-btn active" data-category="all">All</button>
        <button class="category-btn" data-category="breakfast">Breakfast</button>
        <button class="category-btn" data-category="appetizers">Starters</button>
        <button class="category-btn" data-category="soups">Soups</button>
        <button class="category-btn" data-category="mains">Main Course</button>
        <button class="category-btn" data-category="desserts">Desserts</button>
        <button class="category-btn" data-category="beverages">Beverages</button>
    `;
    
    // Re-select category buttons after updating
    const newCategoryButtons = document.querySelectorAll('.category-btn');
    newCategoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            currentCategory = e.target.dataset.category;
            updateActiveCategory(e.target);
            renderMenu();
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderMenu();
    });

    // Clear search
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        renderMenu();
    });

    // Vegetarian toggle
    vegToggle.addEventListener('change', (e) => {
        isVegOnly = e.target.checked;
        renderMenu();
    });

    // Image toggle
    imageToggle.addEventListener('change', (e) => {
        showImages = e.target.checked;
        toggleImages();
    });
}

// Toggle image visibility
function toggleImages() {
    const menuGrid = document.getElementById('menuItems');
    if (showImages) {
        menuGrid.classList.remove('hide-images');
    } else {
        menuGrid.classList.add('hide-images');
    }
}

// Update active category button
function updateActiveCategory(activeButton) {
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    activeButton.classList.add('active');
}

// Filter menu items based on current filters
function getFilteredItems() {
    let items = [];
    
    // Collect items from selected categories
    if (currentCategory === 'all') {
        Object.values(menuData).forEach(category => {
            items = items.concat(category);
        });
    } else {
        items = menuData[currentCategory] || [];
    }
    
    // Filter for vegetarian if toggle is on
    if (isVegOnly) {
        items = items.filter(item => 
            item.dietary.includes('veg') || item.dietary.includes('vegan')
        );
    }

    // Filter by search query
    if (searchQuery) {
        items = items.filter(item => 
            item.name.toLowerCase().includes(searchQuery) ||
            item.description.toLowerCase().includes(searchQuery) ||
            item.origin.toLowerCase().includes(searchQuery)
        );
    }
    
    return items;
}

// Highlight search terms in text
function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

// Update search info
function updateSearchInfo(filteredItems, totalItems) {
    if (searchQuery) {
        searchInfo.style.display = 'flex';
        const resultText = filteredItems.length === 1 
            ? `Found 1 dish matching "${searchQuery}"` 
            : `Found ${filteredItems.length} dishes matching "${searchQuery}"`;
        searchResults.textContent = resultText;
    } else {
        searchInfo.style.display = 'none';
    }
}

// Create dietary indicator HTML
function createDietaryIndicators(dietary) {
    return dietary.map(tag => {
        const symbol = tag === 'veg' ? 'V' : tag === 'vegan' ? 'VG' : 'GF';
        return `<span class="dietary-tag ${tag}" title="${tag.toUpperCase()}">${symbol}</span>`;
    }).join('');
}

// Create menu item HTML
function createMenuItemHTML(item) {
    const highlightedName = highlightSearchTerm(item.name, searchQuery);
    const highlightedDescription = highlightSearchTerm(item.description, searchQuery);
    const highlightedOrigin = highlightSearchTerm(item.origin, searchQuery);
    
    return `
        <div class="menu-item ${searchQuery ? 'search-match' : ''}" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}" class="item-image" loading="lazy">
            <div class="item-content">
                <div class="item-header">
                    <h3 class="item-name">${highlightedName}</h3>
                    <span class="item-price">${item.price}</span>
                </div>
                <p class="item-description">${highlightedDescription}</p>
                <div class="item-details">
                    <span class="item-origin">${highlightedOrigin}</span>
                    <div class="dietary-indicators">
                        ${createDietaryIndicators(item.dietary)}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render menu with smooth transitions
function renderMenu() {
    const items = getFilteredItems();
    
    // Update search info
    updateSearchInfo(items, Object.values(menuData).flat().length);
    
    // Show/hide no results message
    if (items.length === 0) {
        noResults.style.display = 'block';
        menuContainer.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        menuContainer.style.display = 'grid';
    }
    
    // Add filtering class for transition
    const existingItems = document.querySelectorAll('.menu-item');
    existingItems.forEach(item => item.classList.add('filtering'));
    
    // Render new items after a short delay
    setTimeout(() => {
        menuContainer.innerHTML = items.map(createMenuItemHTML).join('');
        
        // Apply image toggle state
        toggleImages();
        
        // Trigger reflow and remove filtering class
        setTimeout(() => {
            const newItems = document.querySelectorAll('.menu-item');
            newItems.forEach(item => item.classList.remove('filtering'));
        }, 50);
    }, 150);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializeMenu);

// Add smooth scroll behavior for better UX
// Add smooth scroll behavior for better UX
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.transform = 'translateY(-10px)';
        header.style.opacity = '0.95';
    } else {
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
    }
 });
 
 // Keyboard shortcuts for better UX
 document.addEventListener('keydown', (e) => {
    // Focus search on Ctrl/Cmd + F
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Clear search on Escape
    if (e.key === 'Escape' && searchInput === document.activeElement) {
        searchInput.value = '';
        searchQuery = '';
        renderMenu();
        searchInput.blur();
    }
 });
 
 // Add loading animation for search
 let searchTimeout;
 searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    
    // Add loading state
    searchInput.style.opacity = '0.7';
    
    searchTimeout = setTimeout(() => {
        searchQuery = e.target.value.toLowerCase();
        renderMenu();
        searchInput.style.opacity = '1';
    }, 300); // Debounce search for better performance
 });
 
 // Add click-to-copy functionality for dish names (useful for ordering)
 document.addEventListener('click', (e) => {
    if (e.target.classList.contains('item-name')) {
        const dishName = e.target.textContent;
        
        // Remove highlight spans for clean copy
        const cleanName = dishName.replace(/<[^>]*>/g, '');
        
        navigator.clipboard.writeText(cleanName).then(() => {
            // Show brief feedback
            const originalText = e.target.innerHTML;
            e.target.innerHTML = '✓ Copied!';
            e.target.style.color = 'var(--primary-gold)';
            
            setTimeout(() => {
                e.target.innerHTML = originalText;
                e.target.style.color = '';
            }, 1000);
        }).catch(() => {
            // Fallback for browsers that don't support clipboard API
            console.log('Copy not supported');
        });
    }
 });
 
 // Add price range filter functionality
 function addPriceFilter() {
    const priceRanges = [
        { label: 'Under ₹200', min: 0, max: 200 },
        { label: '₹200 - ₹400', min: 200, max: 400 },
        { label: '₹400 - ₹600', min: 400, max: 600 },
        { label: 'Above ₹600', min: 600, max: Infinity }
    ];
    
    // This can be added to the filter controls if needed
    return priceRanges;
 }
 
 // Analytics tracking for popular searches (if needed)
 function trackSearch(query) {
    if (query.length > 2) {
        // Track popular search terms
        const searches = JSON.parse(localStorage.getItem('popularSearches') || '{}');
        searches[query] = (searches[query] || 0) + 1;
        localStorage.setItem('popularSearches', JSON.stringify(searches));
    }
 }
 
 // Add this to the search input handler
 searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    
    searchInput.style.opacity = '0.7';
    
    searchTimeout = setTimeout(() => {
        searchQuery = e.target.value.toLowerCase();
        
        // Track search analytics
        if (searchQuery) {
            trackSearch(searchQuery);
        }
        
        renderMenu();
        searchInput.style.opacity = '1';
    }, 300);
 });
 
 // Add export menu functionality (useful for staff)
 function exportMenuData() {
    const allItems = Object.values(menuData).flat();
    const exportData = allItems.map(item => ({
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category,
        dietary: item.dietary.join(', '),
        origin: item.origin
    }));
    
    const csv = convertToCSV(exportData);
    downloadCSV(csv, 'inaara_menu.csv');
 }
 
 function convertToCSV(data) {
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(row => 
        Object.values(row).map(value => 
            `"${value.toString().replace(/"/g, '""')}"`
        ).join(',')
    );
    return [headers, ...rows].join('\n');
 }
 
 function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
 }
 
 // Add favorites functionality (using localStorage)
 let favorites = JSON.parse(localStorage.getItem('menuFavorites') || '[]');
 
 function toggleFavorite(itemName) {
    const index = favorites.indexOf(itemName);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(itemName);
    }
    localStorage.setItem('menuFavorites', JSON.stringify(favorites));
    renderMenu(); // Re-render to update favorite indicators
 }
 
 // Add favorite button to menu items (optional enhancement)
 function createMenuItemHTMLWithFavorites(item) {
    const isFavorite = favorites.includes(item.name);
    const highlightedName = highlightSearchTerm(item.name, searchQuery);
    const highlightedDescription = highlightSearchTerm(item.description, searchQuery);
    const highlightedOrigin = highlightSearchTerm(item.origin, searchQuery);
    
    return `
        <div class="menu-item ${searchQuery ? 'search-match' : ''}" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}" class="item-image" loading="lazy">
            <div class="item-content">
                <div class="item-header">
                    <h3 class="item-name">${highlightedName}</h3>
                    <div class="item-actions">
                        <button class="favorite-btn ${isFavorite ? 'active' : ''}" 
                                onclick="toggleFavorite('${item.name.replace(/'/g, "\\'")}')">
                            ${isFavorite ? '❤️' : '🤍'}
                        </button>
                        <span class="item-price">${item.price}</span>
                    </div>
                </div>
                <p class="item-description">${highlightedDescription}</p>
                <div class="item-details">
                    <span class="item-origin">${highlightedOrigin}</span>
                    <div class="dietary-indicators">
                        ${createDietaryIndicators(item.dietary)}
                    </div>
                </div>
            </div>
        </div>
    `;
 }
 
 // Performance optimization: Virtual scrolling for large menus
 class VirtualScroll {
    constructor(container, items, itemHeight = 300) {
        this.container = container;
        this.items = items;
        this.itemHeight = itemHeight;
        this.viewportHeight = window.innerHeight;
        this.visibleCount = Math.ceil(this.viewportHeight / itemHeight) + 2;
        this.scrollTop = 0;
        
        this.init();
    }
    
    init() {
        this.container.style.height = `${this.items.length * this.itemHeight}px`;
        this.container.style.position = 'relative';
        this.render();
        
        window.addEventListener('scroll', () => {
            this.scrollTop = window.pageYOffset;
            this.render();
        });
    }
    
    render() {
        const startIndex = Math.floor(this.scrollTop / this.itemHeight);
        const endIndex = Math.min(startIndex + this.visibleCount, this.items.length);
        
        const visibleItems = this.items.slice(startIndex, endIndex);
        
        this.container.innerHTML = visibleItems.map((item, index) => {
            const actualIndex = startIndex + index;
            const top = actualIndex * this.itemHeight;
            return `
                <div style="position: absolute; top: ${top}px; width: 100%;">
                    ${createMenuItemHTML(item)}
                </div>
            `;
        }).join('');
    }
 }
 
 // Initialize virtual scrolling for better performance with large menus
 function initVirtualScroll() {
    const allItems = Object.values(menuData).flat();
    if (allItems.length > 50) { // Only use virtual scrolling for large menus
        new VirtualScroll(menuContainer, allItems);
    }
 }
 
 // Add print-friendly styles
 function addPrintStyles() {
    const printStyles = `
        <style media="print">
            .menu-controls, .category-nav, .search-info { display: none !important; }
            .menu-item { break-inside: avoid; page-break-inside: avoid; }
            .item-image { max-height: 100px !important; }
            body { font-size: 12px; }
            .container { max-width: none; padding: 1rem; }
        </style>
    `;
    document.head.insertAdjacentHTML('beforeend', printStyles);
 }
 
 // Initialize print styles
 addPrintStyles();
 
 // Add service worker for offline functionality (optional)
 if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
 }