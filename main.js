
// main.js

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // 1. Initialize Icons (fallback if not inlined)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Accessibility Init
    initAccessibility();

    // 3. Cookie Banner & Map
    initCookieConsent();

    // 4. Mobile Drawer Logic
    initDrawer();

    // 5. Team Toggler (Mobile)
    initTeamToggler();

    // 6. Header Scroll Logic (Only for Home Page)
    // On other pages, header is static white via HTML classes, so no JS needed there.
    if (document.body.classList.contains('page-home')) {
        // Listen for scroll and resize
        window.addEventListener('scroll', updateHomeHeader);
        window.addEventListener('resize', updateHomeHeader);
        // Initial check
        updateHomeHeader();
    }

    // 7. Smooth Scroll Handling for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if(href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const target = document.getElementById(targetId);
                if(target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    // Close drawer if open
                    const drawer = document.getElementById('drawer');
                    if(drawer && !drawer.classList.contains('hidden')) {
                        drawer.classList.add('hidden');
                        document.body.style.overflow = ''; 
                    }
                }
            }
        });
    });
}

// --- Team Toggler ---
function initTeamToggler() {
    const btn = document.getElementById('btn-expand-team');
    const wrapper = document.getElementById('team-expand-wrapper');
    const grid = document.getElementById('team-grid');

    if (btn && grid && wrapper) {
        btn.addEventListener('click', () => {
            // Remove hiding classes
            grid.classList.remove('max-h-0', 'opacity-0');
            // Add open state with large max-height for transition
            grid.classList.add('max-h-[3000px]', 'opacity-100');
            
            // Hide the button wrapper
            wrapper.style.display = 'none';
        });
    }
}

// --- Accessibility ---
function initAccessibility() {
    const btnContrast = document.getElementById('btn-contrast');
    const btnFont = document.getElementById('btn-font');
    
    // Load saved state
    if (localStorage.getItem('high-contrast') === 'true') {
        document.body.classList.add('high-contrast');
    }
    if (localStorage.getItem('big-font') === 'true') {
        document.body.classList.add('big-font');
    }

    if(btnContrast) {
        btnContrast.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
            localStorage.setItem('high-contrast', document.body.classList.contains('high-contrast'));
            if(document.body.classList.contains('page-home')) updateHomeHeader();
        });
    }

    if(btnFont) {
        btnFont.addEventListener('click', () => {
            document.body.classList.toggle('big-font');
            localStorage.setItem('big-font', document.body.classList.contains('big-font'));
        });
    }
}

// --- Mobile Drawer ---
function initDrawer() {
    const drawer = document.getElementById('drawer');
    const burgerBtn = document.getElementById('burger-btn');
    const closeBtn = document.getElementById('close-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    
    if(drawer && burgerBtn && closeBtn && backdrop) {
        const open = () => {
            drawer.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        };
        const close = () => {
            drawer.classList.add('hidden');
            document.body.style.overflow = '';
        };
        
        // Remove existing listeners to avoid duplicates if re-initialized
        burgerBtn.removeEventListener('click', open);
        closeBtn.removeEventListener('click', close);
        backdrop.removeEventListener('click', close);

        burgerBtn.addEventListener('click', open);
        closeBtn.addEventListener('click', close);
        backdrop.addEventListener('click', close);
    }
}

// --- Home Page Header Logic ---
function updateHomeHeader() {
    const wrapper = document.getElementById('header-wrapper');
    const topBar = document.getElementById('top-bar');
    const logoPath = document.getElementById('logo-path');
    const logoText = document.getElementById('logo-text-nzoz');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const logoTitle1 = document.getElementById('logo-title-1');
    const logoTitle2 = document.getElementById('logo-title-2');
    const logoSubtitle = document.getElementById('logo-subtitle');
    const phoneLabel = document.getElementById('phone-label');
    const regLabel = document.getElementById('reg-label');
    const desktopActions = document.getElementById('desktop-actions');
    const ctaBtn = document.getElementById('cta-btn');
    const burgerBtn = document.getElementById('burger-btn');

    if (!wrapper || !topBar) return;

    const isScrolled = window.scrollY > 10;
    const isHighContrast = document.body.classList.contains('high-contrast');
    
    // Removed isMobile check to allow transparent-to-solid transition on mobile as well
    const useSolidLook = isScrolled || isHighContrast;

    if (useSolidLook) {
        // --- SOLID STATE ---
        wrapper.classList.remove('bg-transparent');
        wrapper.classList.add(isHighContrast ? 'bg-black' : 'bg-white', isHighContrast ? 'border-b' : 'shadow-md', isHighContrast ? 'border-yellow-400' : 'backdrop-blur-md');
        
        topBar.classList.remove('bg-transparent', 'text-white/90', 'border-b', 'border-white/10');
        topBar.classList.add(isHighContrast ? 'bg-yellow-400' : 'bg-cyan-900', isHighContrast ? 'text-black' : 'text-cyan-50');

        if (logoPath) logoPath.setAttribute('fill', isHighContrast ? '#facc15' : '#06b6d4'); 
        if (logoText) logoText.setAttribute('fill', isHighContrast ? 'black' : 'white'); 

        const titleClass = `text-base sm:text-xl md:text-2xl font-bold tracking-tight transition-colors ${isHighContrast ? 'text-yellow-400' : 'text-slate-800'}`;
        const subtitleClass = `text-base sm:text-xl md:text-2xl font-bold tracking-tight transition-colors ${isHighContrast ? 'text-yellow-400' : 'text-brand-600'}`;
        
        if (logoTitle1) logoTitle1.className = titleClass;
        if (logoTitle2) logoTitle2.className = subtitleClass;
        if (logoSubtitle) logoSubtitle.className = `hidden sm:block text-xs md:text-sm font-medium mt-0.5 md:mt-1 ${isHighContrast ? 'text-white' : 'text-slate-500'}`;
        
        if (phoneLabel) phoneLabel.className = `font-bold text-lg leading-none hover:underline transition-colors ${isHighContrast ? 'text-yellow-400' : 'text-gray-800'}`;
        if (regLabel) regLabel.className = `text-[10px] font-bold uppercase tracking-wider ${isHighContrast ? 'text-white' : 'text-gray-400'}`;
        
        navLinks.forEach(link => {
             link.className = `nav-link font-medium px-3 py-2 rounded-lg transition-colors ${isHighContrast ? 'text-white hover:text-yellow-400' : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'}`;
        });

        if (desktopActions) desktopActions.className = `hidden lg:flex items-center gap-4 pl-6 border-l ml-2 ${isHighContrast ? 'border-white' : 'border-gray-100'}`;
        if (ctaBtn) ctaBtn.className = `inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold shadow-md transition-all ${isHighContrast ? 'bg-black border border-yellow-400 text-yellow-400' : 'bg-brand-500 text-white hover:bg-brand-600'}`;
        
        // Ensure burger button is visible on white background
        if (burgerBtn) {
            burgerBtn.className = `lg:hidden p-2 rounded-md transition-colors ${isHighContrast ? 'text-yellow-400' : 'text-gray-800 hover:bg-gray-100'}`;
        }

    } else {
        // --- TRANSPARENT STATE (Desktop Top) ---
        wrapper.classList.add('bg-transparent');
        wrapper.classList.remove('bg-white', 'bg-white/95', 'bg-black', 'shadow-md', 'backdrop-blur-md', 'border-b', 'border-yellow-400');

        topBar.classList.add('bg-transparent', 'text-white/90', 'border-b', 'border-white/10');
        topBar.classList.remove('bg-cyan-900', 'text-cyan-50', 'bg-yellow-400', 'text-black');

        if (logoPath) logoPath.setAttribute('fill', 'white');
        if (logoText) logoText.setAttribute('fill', '#0891b2'); 

        if (logoTitle1) logoTitle1.className = "text-base sm:text-xl md:text-2xl font-bold tracking-tight transition-colors text-white";
        if (logoTitle2) logoTitle2.className = "text-base sm:text-xl md:text-2xl font-bold tracking-tight transition-colors text-cyan-200";
        if (logoSubtitle) logoSubtitle.className = "hidden sm:block text-xs md:text-sm font-medium mt-0.5 md:mt-1 text-white/80";
        
        if (phoneLabel) phoneLabel.className = "font-bold text-lg leading-none hover:underline transition-colors text-white";
        if (regLabel) regLabel.className = "text-[10px] font-bold uppercase tracking-wider text-cyan-100";

        navLinks.forEach(link => {
             link.className = "nav-link font-medium px-3 py-2 rounded-lg transition-colors text-white hover:bg-white/10";
        });

        if (desktopActions) desktopActions.className = "hidden lg:flex items-center gap-4 pl-6 border-l ml-2 border-white/20";
        if (ctaBtn) ctaBtn.className = "inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold bg-white text-brand-600 hover:bg-gray-50 shadow-md transition-all";
        
        // Ensure burger button is white on transparent background
        if (burgerBtn) {
            burgerBtn.className = "lg:hidden p-2 rounded-md transition-colors text-white hover:bg-white/20";
        }
    }
}

// --- Cookie Consent ---
function initCookieConsent() {
    const placeholder = document.getElementById('cookie-banner-placeholder');
    
    if (localStorage.getItem('cookie_consent')) {
        checkMap();
        return;
    }

    if (placeholder) {
        placeholder.innerHTML = `
        <div id="cookie-banner" class="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6 border-t-2 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] bg-white border-brand-100 text-gray-800">
          <div class="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-start gap-4">
              <div class="hidden md:flex p-3 rounded-full shrink-0 bg-brand-50 text-brand-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/></svg>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1">Szanujemy Twoją prywatność</h3>
                <p class="text-sm md:text-base max-w-3xl text-gray-600">Używamy plików cookies, aby zapewnić prawidłowe działanie strony oraz do wyświetlania mapy Google.</p>
              </div>
            </div>
            <div class="flex gap-3 w-full md:w-auto shrink-0">
              <button id="btn-reject" class="flex-1 md:flex-none px-6 py-2 border-2 border-brand-500 text-brand-600 rounded-lg hover:bg-brand-50 font-semibold">Odmów</button>
              <button id="btn-accept" class="flex-1 md:flex-none px-6 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 font-semibold">Akceptuję</button>
            </div>
          </div>
        </div>`;
        
        document.getElementById('btn-accept').addEventListener('click', () => {
            localStorage.setItem('cookie_consent', 'accepted');
            document.getElementById('cookie-banner').remove();
            checkMap();
        });

        document.getElementById('btn-reject').addEventListener('click', () => {
            localStorage.setItem('cookie_consent', 'rejected');
            document.getElementById('cookie-banner').remove();
            checkMap();
        });
    }
    checkMap();
}

function checkMap() {
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer) return;
    
    const consent = localStorage.getItem('cookie_consent');
    if (consent === 'accepted') {
        mapContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.3248462469415!2d23.1665!3d53.1275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc0000000001%3A0x0!2sBia%C5%82ystok%2C%20Mickiewicza%2044A!5e0!3m2!1spl!2spl!4v1630000000000!5m2!1spl!2spl" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    } else {
        mapContainer.innerHTML = `
         <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
               <div class="mb-4 p-4 rounded-full bg-gray-200 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
               </div>
               <h3 class="text-xl font-bold mb-2 text-gray-900">${consent === 'rejected' ? 'Mapa zablokowana' : 'Mapa wymaga zgody'}</h3>
               <p class="mb-6 max-w-sm text-gray-600">Aby zobaczyć mapę dojazdu, musisz zaakceptować pliki cookies.</p>
               ${consent !== 'rejected' ? '<button id="map-retry" class="bg-brand-500 text-white px-4 py-2 rounded hover:bg-brand-600">Zaakceptuj cookies</button>' : ''}
        </div>`;
        
        const retryBtn = document.getElementById('map-retry');
        if(retryBtn) retryBtn.addEventListener('click', () => {
            localStorage.setItem('cookie_consent', 'accepted');
            checkMap();
            const banner = document.getElementById('cookie-banner');
            if(banner) banner.remove();
        });
    }
}

window.resetConsent = function() {
    localStorage.removeItem('cookie_consent');
    window.location.reload();
}