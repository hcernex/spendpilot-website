/* ============================================
   SpendPilot — JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Theme Toggle (Light/Dark Mode)
    // ============================================
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
    
    // ============================================
    // Navbar scroll effect
    // ============================================
    const navbar = document.querySelector('.navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    // ============================================
    // Mobile menu toggle
    // ============================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const isExpanded = this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');

            // Update ARIA attribute for accessibility
            this.setAttribute('aria-expanded', isExpanded);
        });
    }
    
    // ============================================
    // Smooth scroll for anchor links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                if (navLinks && navLinks.classList.contains('active')) {
                    mobileMenuBtn.classList.remove('active');
                    navLinks.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            }
        });
    });
    
    // ============================================
    // Intersection Observer for animations
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll(
        '.problem-card, .step-card, .feature-card, .pricing-card, .proof-card, .stat-item, .resource-category'
    );
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.4s ease ' + (index * 0.05) + 's, transform 0.4s ease ' + (index * 0.05) + 's';
        observer.observe(el);
    });
    
    const style = document.createElement('style');
    style.textContent = '.animate-in { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);
    
    // ============================================
    // Counter animation for stats
    // ============================================
    function animateCounter(element, target, suffix) {
        let current = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.round(current) + suffix;
        }, 16);
    }
    
    const statValues = document.querySelectorAll('.stat-value');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent;
                if (text.indexOf('135') !== -1) {
                    entry.target.textContent = '0 Mds$';
                    animateCounter(entry.target, 135, ' Mds$');
                } else if (text.indexOf('72') !== -1) {
                    entry.target.textContent = '0%';
                    animateCounter(entry.target, 72, '%');
                }
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statValues.forEach(stat => statsObserver.observe(stat));
    
    // ============================================
    // Form handling (contact page)
    // ============================================
    // ============================================
    // Form handling - disabled, using native Formspree submission
    // ============================================
    
    // ============================================
    // Resources tabs functionality
    // ============================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active to clicked button and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // ============================================
    // Dashboard preview hover effect
    // ============================================
    const dashboard = document.querySelector('.dashboard-preview');
    
    if (dashboard) {
        dashboard.addEventListener('mouseenter', function() {
            this.style.transform = 'rotateY(0) rotateX(0) scale(1.02)';
        });
        
        dashboard.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    }
    
    // ============================================
    // Typing effect for hero (disabled)
    // To enable: uncomment the code below
    // ============================================
    /*
    const heroHighlight = document.querySelector('.hero-title .highlight');
    if (heroHighlight) {
        const words = ['gaspillée', 'perdue', 'oubliée'];
        let currentWord = 0;
        setInterval(function() {
            heroHighlight.style.opacity = '0';
            setTimeout(function() {
                currentWord = (currentWord + 1) % words.length;
                heroHighlight.textContent = words[currentWord];
                heroHighlight.style.opacity = '1';
            }, 300);
        }, 3000);
    }
    */
    
    // ============================================
    // Parallax effect for floating shapes (with throttling)
    // ============================================
    const shapes = document.querySelectorAll('.shape');

    if (shapes.length > 0) {
        let lastTime = 0;
        const throttleDelay = 16; // ~60fps

        const handleParallax = function(e) {
            const now = Date.now();
            if (now - lastTime < throttleDelay) return;
            lastTime = now;

            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 20;
                const xOffset = (x - 0.5) * speed;
                const yOffset = (y - 0.5) * speed;
                shape.style.transform = 'translate(' + xOffset + 'px, ' + yOffset + 'px)';
            });
        };

        window.addEventListener('mousemove', handleParallax);
    }
    
    console.log('SpendPilot website loaded successfully');
});
