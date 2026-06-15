/* ==============================================
   NOVA FASHION — COLLECTION PAGE SCRIPT
   ============================================== */

// ---- Navbar mobile toggle ----
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.innerHTML = navMenu.classList.contains('active')
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });
}

// ---- Filter Pill Dropdowns ----
const filterPills = document.querySelectorAll('.filter-pill');

filterPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
        // Don't toggle if clicking remove button
        if (e.target.closest('.pill-remove')) return;

        const isActive = pill.classList.contains('active-pill');
        // Don't open dropdown on active-pill (it has no dropdown, just remove)
        if (isActive) return;

        const wasOpen = pill.classList.contains('open');
        // Close all
        filterPills.forEach(p => p.classList.remove('open'));
        if (!wasOpen) pill.classList.add('open');
    });
});

// Close dropdowns on outside click
document.addEventListener('click', (e) => {
    if (!e.target.closest('.filter-pill')) {
        filterPills.forEach(p => p.classList.remove('open'));
    }
});

// Remove active filter pill
function removeFilter(btn) {
    const pill = btn.closest('.filter-pill');
    pill.style.transform = 'scale(0.8)';
    pill.style.opacity = '0';
    setTimeout(() => pill.remove(), 280);
}

// ---- Search functionality ----
const searchInput = document.getElementById('search-input');
const productCards = document.querySelectorAll('.product-card');

if (searchInput) {
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        productCards.forEach(card => {
            const name = card.querySelector('.product-name')?.textContent.toLowerCase() || '';
            if (name.includes(query) || query === '') {
                card.style.display = '';
                card.style.opacity = '1';
            } else {
                card.style.opacity = '0.25';
            }
        });
    });
}

// ---- Collection Switcher ----
function switchCollection(btn, index, title, desc) {
    document.querySelectorAll('.switcher-item').forEach(b => b.classList.remove('switcher-active'));
    btn.classList.add('switcher-active');

    const indexEl = document.querySelector('.sidebar-index');
    const titleEl = document.querySelector('.sidebar-title');
    const descEl  = document.querySelector('.sidebar-desc');

    if (indexEl) { indexEl.style.opacity = '0'; setTimeout(() => { indexEl.textContent = `/${index}`; indexEl.style.opacity = '1'; }, 250); }
    if (titleEl) {
        titleEl.style.opacity = '0';
        titleEl.style.transform = 'translateY(10px)';
        setTimeout(() => {
            titleEl.innerHTML = title.replace(' ', '<br>');
            titleEl.style.opacity = '1';
            titleEl.style.transform = 'translateY(0)';
        }, 250);
    }
    if (descEl) {
        descEl.style.opacity = '0';
        setTimeout(() => { descEl.textContent = desc; descEl.style.opacity = '1'; }, 300);
    }

    // Add CSS transitions for sidebar elements
    if (indexEl) indexEl.style.transition = 'opacity 0.25s ease';
    if (titleEl)  titleEl.style.transition  = 'opacity 0.25s ease, transform 0.3s ease';
    if (descEl)   descEl.style.transition   = 'opacity 0.3s ease';
}

// ---- Quick View Modal ----
const modalOverlay  = document.getElementById('modal-overlay');
const modalImg      = document.getElementById('modal-img');
const modalTitle    = document.getElementById('modal-title');
const modalPrice    = document.getElementById('modal-price');

function openQuickView(card) {
    const img   = card.querySelector('.product-img-wrap img');
    const name  = card.querySelector('.product-name')?.textContent;
    const price = card.querySelector('.product-price')?.textContent;

    if (modalImg)   { modalImg.src = img?.src || ''; modalImg.alt = name || ''; }
    if (modalTitle) { modalTitle.textContent = name || ''; }
    if (modalPrice) { modalPrice.textContent = price || ''; }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Close on ESC
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ---- Size Selection ----
function selectSize(btn) {
    const sizeBtns = document.querySelectorAll('.size-btn');
    sizeBtns.forEach(b => b.classList.remove('size-active'));
    btn.classList.add('size-active');
}

// ---- Add to Cart ----
let cartCount = 3;
const cartCountEl = document.querySelector('.cart-count');
const cartToast   = document.getElementById('cart-toast');

function addToCart() {
    cartCount++;
    if (cartCountEl) cartCountEl.textContent = cartCount;

    // Show toast
    if (cartToast) {
        cartToast.classList.add('show');
        setTimeout(() => cartToast.classList.remove('show'), 2800);
    }

    // Animate button
    const btn = document.getElementById('add-to-cart-modal');
    if (btn) {
        btn.innerHTML = '<i class="fas fa-check"></i> Added!';
        btn.style.background = '#2a9d5c';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-shopping-bag"></i> Add to Cart';
            btn.style.background = '';
        }, 1800);
    }
}

// ---- Wishlist toggle ----
function toggleWishlist(btn) {
    btn.classList.toggle('liked');
    const icon = btn.querySelector('i');
    if (btn.classList.contains('liked')) {
        icon.className = 'fas fa-heart';
        // Brief pulse animation
        btn.style.transform = 'scale(1.15)';
        setTimeout(() => btn.style.transform = '', 300);
    } else {
        icon.className = 'far fa-heart';
    }
}

// ---- Card hover — add wishlist button to each card ----
productCards.forEach(card => {
    // Build wishlist button per card
    const imgWrap = card.querySelector('.product-img-wrap');
    if (imgWrap) {
        const wl = document.createElement('button');
        wl.className = 'card-wishlist-btn';
        wl.setAttribute('aria-label', 'Add to wishlist');
        wl.innerHTML = '<i class="far fa-heart"></i>';
        wl.style.cssText = `
            position: absolute;
            top: 14px;
            right: 14px;
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: rgba(255,255,255,0.9);
            border: none;
            color: #1a1a1a;
            font-size: 0.78rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 3;
            backdrop-filter: blur(4px);
        `;

        wl.addEventListener('click', (e) => {
            e.stopPropagation();
            wl.classList.toggle('wl-active');
            const icon = wl.querySelector('i');
            if (wl.classList.contains('wl-active')) {
                icon.className = 'fas fa-heart';
                wl.style.color = '#d04040';
                wl.style.background = '#fdf0f0';
            } else {
                icon.className = 'far fa-heart';
                wl.style.color = '#1a1a1a';
                wl.style.background = 'rgba(255,255,255,0.9)';
            }
        });

        imgWrap.appendChild(wl);

        card.addEventListener('mouseenter', () => { wl.style.opacity = '1'; });
        card.addEventListener('mouseleave', () => { wl.style.opacity = '0'; });
    }
});

// ---- Scroll: subtle filter bar shadow ----
const filterBar = document.getElementById('filter-bar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        filterBar?.style.setProperty('box-shadow', '0 4px 20px rgba(0,0,0,0.07)');
    } else {
        filterBar?.style.setProperty('box-shadow', 'none');
    }
});

// ---- Staggered card entrance animation ----
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 60 * (parseInt(entry.target.dataset.index || '0')));
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

productCards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)';
    card.dataset.index = i;
    observer.observe(card);
});
