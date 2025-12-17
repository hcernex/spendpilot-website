/* ============================================
   SpendPilot — Cookie Consent (RGPD/GDPR)
   ============================================ */

const CookieConsent = {
    // Cookie name and expiration
    cookieName: 'spendpilot_cookie_consent',
    cookieExpireDays: 365,

    // Translations
    translations: {
        fr: {
            title: 'Nous respectons votre vie privee',
            description: 'Ce site utilise des cookies pour ameliorer votre experience. Les cookies essentiels sont necessaires au fonctionnement du site. Les cookies analytiques nous aident a comprendre comment vous utilisez le site.',
            acceptAll: 'Accepter tout',
            acceptEssential: 'Essentiels uniquement',
            customize: 'Personnaliser',
            save: 'Enregistrer mes choix',
            essentialTitle: 'Cookies essentiels',
            essentialDesc: 'Necessaires au fonctionnement du site (preferences, theme).',
            analyticsTitle: 'Cookies analytiques',
            analyticsDesc: 'Nous aident a comprendre comment vous utilisez le site.',
            always: 'Toujours actif'
        },
        en: {
            title: 'We respect your privacy',
            description: 'This site uses cookies to improve your experience. Essential cookies are necessary for the site to function. Analytics cookies help us understand how you use the site.',
            acceptAll: 'Accept all',
            acceptEssential: 'Essential only',
            customize: 'Customize',
            save: 'Save my choices',
            essentialTitle: 'Essential cookies',
            essentialDesc: 'Necessary for the site to function (preferences, theme).',
            analyticsTitle: 'Analytics cookies',
            analyticsDesc: 'Help us understand how you use the site.',
            always: 'Always active'
        }
    },

    // Get current language
    getLang() {
        return localStorage.getItem('language') ||
               (navigator.language.startsWith('fr') ? 'fr' : 'en');
    },

    // Get translation
    t(key) {
        const lang = this.getLang();
        return this.translations[lang][key] || this.translations['en'][key];
    },

    // Check if consent was given
    hasConsent() {
        return this.getCookie(this.cookieName) !== null;
    },

    // Get consent preferences
    getConsent() {
        const consent = this.getCookie(this.cookieName);
        if (!consent) return null;
        try {
            return JSON.parse(consent);
        } catch (e) {
            return null;
        }
    },

    // Set consent
    setConsent(preferences) {
        const value = JSON.stringify(preferences);
        this.setCookie(this.cookieName, value, this.cookieExpireDays);
        this.hideBanner();
        this.applyConsent(preferences);
    },

    // Apply consent (load analytics if accepted)
    applyConsent(preferences) {
        if (preferences.analytics) {
            // Load analytics here if needed
            // Example: loadGoogleAnalytics();
            console.log('Analytics cookies accepted');
        }
    },

    // Cookie helpers
    setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
    },

    getCookie(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) {
                return decodeURIComponent(c.substring(nameEQ.length));
            }
        }
        return null;
    },

    // Create banner HTML
    createBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-labelledby', 'cookie-title');
        banner.setAttribute('aria-describedby', 'cookie-desc');
        banner.innerHTML = `
            <div class="cookie-consent-container">
                <div class="cookie-consent-content">
                    <h2 id="cookie-title" class="cookie-consent-title">${this.t('title')}</h2>
                    <p id="cookie-desc" class="cookie-consent-desc">${this.t('description')}</p>

                    <div class="cookie-consent-options" id="cookie-options" style="display: none;">
                        <div class="cookie-option">
                            <div class="cookie-option-header">
                                <span class="cookie-option-title">${this.t('essentialTitle')}</span>
                                <span class="cookie-option-always">${this.t('always')}</span>
                            </div>
                            <p class="cookie-option-desc">${this.t('essentialDesc')}</p>
                        </div>
                        <div class="cookie-option">
                            <div class="cookie-option-header">
                                <label class="cookie-option-title" for="analytics-toggle">${this.t('analyticsTitle')}</label>
                                <label class="cookie-toggle">
                                    <input type="checkbox" id="analytics-toggle" checked>
                                    <span class="cookie-toggle-slider"></span>
                                </label>
                            </div>
                            <p class="cookie-option-desc">${this.t('analyticsDesc')}</p>
                        </div>
                    </div>
                </div>

                <div class="cookie-consent-actions">
                    <button type="button" class="cookie-btn cookie-btn-secondary" id="cookie-customize">
                        ${this.t('customize')}
                    </button>
                    <button type="button" class="cookie-btn cookie-btn-secondary" id="cookie-essential">
                        ${this.t('acceptEssential')}
                    </button>
                    <button type="button" class="cookie-btn cookie-btn-primary" id="cookie-accept">
                        ${this.t('acceptAll')}
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);
        this.attachEvents();
    },

    // Attach event listeners
    attachEvents() {
        document.getElementById('cookie-accept').addEventListener('click', () => {
            this.setConsent({ essential: true, analytics: true });
        });

        document.getElementById('cookie-essential').addEventListener('click', () => {
            this.setConsent({ essential: true, analytics: false });
        });

        document.getElementById('cookie-customize').addEventListener('click', () => {
            const options = document.getElementById('cookie-options');
            const customizeBtn = document.getElementById('cookie-customize');
            const isVisible = options.style.display !== 'none';

            options.style.display = isVisible ? 'none' : 'block';
            customizeBtn.textContent = isVisible ? this.t('customize') : this.t('save');

            if (isVisible) {
                // Save custom choices
                const analyticsChecked = document.getElementById('analytics-toggle').checked;
                this.setConsent({ essential: true, analytics: analyticsChecked });
            }
        });
    },

    // Hide banner
    hideBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.classList.add('cookie-consent-hidden');
            setTimeout(() => banner.remove(), 300);
        }
    },

    // Initialize
    init() {
        if (!this.hasConsent()) {
            // Wait for DOM
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.createBanner());
            } else {
                this.createBanner();
            }
        } else {
            // Apply existing consent
            const consent = this.getConsent();
            if (consent) {
                this.applyConsent(consent);
            }
        }
    }
};

// Auto-initialize
CookieConsent.init();
