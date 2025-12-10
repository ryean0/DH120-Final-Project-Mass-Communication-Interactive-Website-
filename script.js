// ===================================
// PROGRESS BAR
// ===================================
function updateProgressBar() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    
    document.getElementById('progressBar').style.width = progress + '%';
}

// ===================================
// NAVIGATION VISIBILITY
// ===================================
function updateNavVisibility() {
    const nav = document.getElementById('navMenu');
    if (window.scrollY > 100) {
        nav.classList.add('visible');
    } else {
        nav.classList.remove('visible');
    }
}

// ===================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================================
// ANIMATED NUMBER COUNTERS
// ===================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    let countersStarted = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersStarted) {
                countersStarted = true;
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                });
            }
        });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        observer.observe(heroStats);
    }
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ===================================
// PDF DOWNLOAD AND PREVIEW
// ===================================
function initPDFDownload() {
    const downloadButton = document.getElementById('downloadWhitepaper');
    const modal = document.getElementById('pdfModal');
    const closeModal = document.querySelector('.modal-close');
    const pdfViewer = document.getElementById('pdfViewer');
    
    // PDF path - checks for actual whitepaper or uses placeholder
    const pdfPath = 'assets/whitepaper/whitepaper.pdf';
    const placeholderPath = 'assets/whitepaper/placeholder.pdf';
    
    // Check if actual whitepaper exists, otherwise use placeholder
    let actualPdfPath = placeholderPath;
    
    // Try to load the actual whitepaper
    fetch(pdfPath, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                actualPdfPath = pdfPath;
            }
        })
        .catch(() => {
            // Use placeholder if fetch fails
            actualPdfPath = placeholderPath;
        });
    
    downloadButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Show preview modal
        pdfViewer.src = actualPdfPath;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
        pdfViewer.src = '';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            pdfViewer.src = '';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            pdfViewer.src = '';
            document.body.style.overflow = 'auto';
        }
    });
}

// ===================================
// SENTIMENT BARS ANIMATION
// ===================================
function animateSentimentBars() {
    const bars = document.querySelectorAll('.bar-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    }, { threshold: 0.5 });
    
    bars.forEach(bar => {
        observer.observe(bar);
    });
}

// ===================================
// WORD CLOUD ANIMATION
// ===================================
function animateWordCloud() {
    const words = document.querySelectorAll('.word-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                words.forEach((word, index) => {
                    setTimeout(() => {
                        word.style.opacity = '0';
                        word.style.transform = 'scale(0)';
                        setTimeout(() => {
                            word.style.transition = 'all 0.5s ease';
                            word.style.opacity = '1';
                            word.style.transform = 'scale(1)';
                        }, 50);
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.5 });
    
    const wordCloud = document.querySelector('.word-cloud-container');
    if (wordCloud) {
        observer.observe(wordCloud);
    }
}

// ===================================
// PARALLAX EFFECT FOR HERO
// ===================================
function initParallax() {
    const hero = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
}

// ===================================
// ACTIVE NAVIGATION LINK
// ===================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===================================
// LAZY LOAD IMAGES
// ===================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
let ticking = false;

function requestTick(callback) {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            callback();
            ticking = false;
        });
        ticking = true;
    }
}

// Optimized scroll handler
function handleScroll() {
    requestTick(() => {
        updateProgressBar();
        updateNavVisibility();
    });
}

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================
function initAccessibility() {
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#background';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--accent-primary);
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
    `;
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button, a');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && button.textContent.trim()) {
            button.setAttribute('aria-label', button.textContent.trim());
        }
    });
}

// ===================================
// KEYBOARD NAVIGATION
// ===================================
function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        // Navigate sections with arrow keys
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            const sections = Array.from(document.querySelectorAll('section[id]'));
            const currentSection = sections.find(section => {
                const rect = section.getBoundingClientRect();
                return rect.top >= 0 && rect.top < window.innerHeight / 2;
            });
            
            if (currentSection) {
                const currentIndex = sections.indexOf(currentSection);
                let nextIndex;
                
                if (e.key === 'ArrowDown') {
                    nextIndex = Math.min(currentIndex + 1, sections.length - 1);
                } else {
                    nextIndex = Math.max(currentIndex - 1, 0);
                }
                
                if (nextIndex !== currentIndex) {
                    e.preventDefault();
                    sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });
}

// ===================================
// PRINT STYLES
// ===================================
function initPrintStyles() {
    window.addEventListener('beforeprint', () => {
        // Expand all collapsed sections
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.classList.add('visible');
        });
    });
}

// ===================================
// ERROR HANDLING
// ===================================
function initErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('An error occurred:', e.error);
        // Gracefully handle errors without breaking the page
    });
    
    // Handle image loading errors
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.warn('Failed to load image:', this.src);
        });
    });
}

// ===================================
// INITIALIZE ALL FEATURES
// ===================================
function init() {
    // Core functionality
    initSmoothScroll();
    initCounters();
    initScrollAnimations();
    initPDFDownload();
    
    // Visual enhancements
    animateSentimentBars();
    animateWordCloud();
    initParallax();
    
    // Navigation
    updateActiveNavLink();
    
    // Performance
    initLazyLoading();
    
    // Accessibility
    initAccessibility();
    initKeyboardNav();
    
    // Utilities
    initPrintStyles();
    initErrorHandling();
    
    // Event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => {
        requestTick(updateProgressBar);
    }, { passive: true });
    
    // Initial calls
    updateProgressBar();
    updateNavVisibility();
    
    console.log('🚀 Digital Humanities website initialized successfully!');
}

// ===================================
// START APPLICATION
// ===================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ===================================
// EXPORT FOR TESTING (if needed)
// ===================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateProgressBar,
        animateCounter,
        initScrollAnimations
    };
}