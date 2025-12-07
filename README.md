# SpendPilot — Site Web FinOps

Site web professionnel pour SpendPilot, solution d'optimisation des coûts Cloud (FinOps & GreenOps).

---

## 🚀 Déploiement rapide avec Git + Vercel (5 minutes)

### Étape 1 : Créer un compte GitHub
1. Allez sur [github.com](https://github.com) et créez un compte (gratuit)
2. Cliquez sur le bouton "+" en haut à droite → "New repository"
3. Nom du repo : `spendpilot-website`
4. Laissez "Public" sélectionné
5. **Ne cochez PAS** "Add a README file"
6. Cliquez sur "Create repository"

### Étape 2 : Pousser le code sur GitHub

Ouvrez un terminal dans le dossier du projet et exécutez :

```bash
# Si Git n'est pas déjà initialisé
git init
git add .
git commit -m "Initial commit - SpendPilot website"
git branch -M main

# Remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE_USERNAME/spendpilot-website.git
git push -u origin main
```

### Étape 3 : Déployer sur Vercel (automatique)

1. Allez sur [vercel.com](https://vercel.com) et connectez-vous avec GitHub
2. Cliquez sur "Add New Project"
3. Sélectionnez le repo `spendpilot-website`
4. Cliquez sur "Deploy"
5. **C'est en ligne !** 🎉

**Bonus :** Chaque fois que vous ferez un `git push`, le site sera automatiquement mis à jour !

### Étape 4 : Ajouter votre domaine personnalisé

1. Dans Vercel, allez dans votre projet → Settings → Domains
2. Ajoutez `spendpilot.io` (ou votre domaine)
3. Vercel vous donnera les enregistrements DNS à configurer
4. Allez chez votre registrar (OVH, Gandi, etc.) et ajoutez ces DNS

---

## 📁 Structure du projet

```
spendpilot-website/
├── index.html          # Page d'accueil
├── contact.html        # Page de contact / demande d'audit
├── styles.css          # Styles CSS complets
├── script.js           # JavaScript (animations, formulaire)
└── README.md           # Ce fichier
```

## 🚀 Comment lancer le site

### Option 1 : En local (le plus simple)

Ouvrez simplement le fichier `index.html` dans votre navigateur :
- Double-cliquez sur `index.html`
- Ou faites un clic droit > "Ouvrir avec" > Chrome/Firefox/Edge

### Option 2 : Avec un serveur local (recommandé pour le développement)

**Avec Python :**
```bash
# Python 3
cd spendpilot-website
python -m http.server 8000

# Puis ouvrez http://localhost:8000 dans votre navigateur
```

**Avec Node.js :**
```bash
# Installez d'abord serve
npm install -g serve

# Lancez le serveur
cd spendpilot-website
serve

# Puis ouvrez http://localhost:3000
```

**Avec VS Code :**
1. Installez l'extension "Live Server"
2. Clic droit sur `index.html` > "Open with Live Server"

---

## 🌐 Déploiement en production

### Option A : Vercel (GRATUIT - Recommandé)

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Installez Vercel CLI : `npm install -g vercel`
3. Dans le dossier du projet :
   ```bash
   cd spendpilot-website
   vercel
   ```
4. Suivez les instructions
5. Votre site sera en ligne à `https://spendpilot.vercel.app`

**Pour un domaine personnalisé :**
- Allez dans Settings > Domains
- Ajoutez `spendpilot.io` ou votre domaine
- Configurez les DNS chez votre registrar

### Option B : Netlify (GRATUIT)

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier `spendpilot-website` sur Netlify
3. C'est en ligne !

**Ou via Git :**
1. Poussez le code sur GitHub/GitLab
2. Connectez le repo à Netlify
3. Déploiement automatique à chaque commit

### Option C : GitHub Pages (GRATUIT)

1. Créez un repo GitHub nommé `spendpilot-website`
2. Poussez le code :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/votre-username/spendpilot-website.git
   git push -u origin main
   ```
3. Allez dans Settings > Pages
4. Sélectionnez "main" branch et "/" (root)
5. Site disponible à `https://votre-username.github.io/spendpilot-website`

### Option D : Hébergement traditionnel (OVH, Gandi, etc.)

1. Connectez-vous à votre hébergement via FTP/SFTP
2. Uploadez tous les fichiers dans le dossier `www` ou `public_html`
3. C'est en ligne !

---

## 📧 Configuration du formulaire de contact

Le formulaire est actuellement en mode "simulation". Pour le rendre fonctionnel :

### Option 1 : Formspree (gratuit jusqu'à 50 soumissions/mois)

1. Créez un compte sur [formspree.io](https://formspree.io)
2. Créez un nouveau formulaire
3. Remplacez dans `contact.html` :
   ```html
   <form class="contact-form" action="https://formspree.io/f/VOTRE_ID" method="POST">
   ```

### Option 2 : Netlify Forms (gratuit avec Netlify)

1. Ajoutez `netlify` à la balise form :
   ```html
   <form class="contact-form" name="contact" netlify>
   ```
2. Déployez sur Netlify
3. Les soumissions apparaissent dans votre dashboard Netlify

### Option 3 : Backend personnalisé

Modifiez `script.js` pour envoyer les données à votre API :
```javascript
fetch('https://votre-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

---

## 🎨 Personnalisation

### Couleurs

Modifiez les variables CSS au début de `styles.css` :
```css
:root {
    --primary: #0066FF;        /* Couleur principale */
    --accent: #00D4AA;         /* Couleur d'accent */
    --bg-dark: #0A0E17;        /* Fond sombre */
    /* ... */
}
```

### Contenu

- **Textes** : Modifiez directement dans les fichiers HTML
- **Images** : Ajoutez vos images dans un dossier `images/`
- **Logo** : Remplacez le logo SVG dans le code HTML

### Polices

Les polices utilisées (Outfit + JetBrains Mono) sont chargées depuis Google Fonts. Pour les modifier, changez les liens dans le `<head>`.

---

## 📱 Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Animations au scroll
- ✅ Navigation fluide avec smooth scroll
- ✅ Formulaire de contact
- ✅ Liens vers sources de presse réelles
- ✅ Optimisé SEO (meta descriptions)
- ✅ Dark mode par défaut
- ✅ Performance optimisée (CSS/JS minimal)

---

## 📊 Prochaines étapes recommandées

1. **Domaine** : Achetez `spendpilot.io` ou `.fr` (OVH, Gandi, Namecheap)
2. **Email** : Configurez `contact@spendpilot.io`
3. **Analytics** : Ajoutez Google Analytics ou Plausible
4. **Formulaire** : Connectez à un service (Formspree, Zapier)
5. **Legal** : Rédigez les mentions légales et politique de confidentialité
6. **Blog** : Ajoutez une section blog pour le SEO

---

## 🆘 Support

Pour toute question sur ce template, n'hésitez pas à me recontacter !

---

© 2024 SpendPilot
# spendpilot-website
# spendpilot-website
