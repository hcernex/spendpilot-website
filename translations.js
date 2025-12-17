/* ============================================
   SpendPilot — Translations (FR/EN)
   ============================================ */

const translations = {
    fr: {
        // Navigation
        "nav.product": "Produit",
        "nav.pricing": "Tarifs",
        "nav.resources": "Ressources",
        "nav.contact": "Contact",
        "nav.cta": "Audit Gratuit →",
        
        // Hero
        "hero.badge": "FinOps & GreenOps — Azure & AWS",
        "hero.title1": "30% de votre facture",
        "hero.title2": "Cloud est",
        "hero.title.highlight": "gaspillée",
        "hero.subtitle.part1": "On vous le prouve en",
        "hero.subtitle.part2": "48 heures",
        "hero.subtitle.part3": ". Audit automatique, recommandations actionnables, économies garanties.",
        "hero.cta.primary": "Lancer mon audit gratuit",
        "hero.cta.secondary": "Découvrir comment",
        "hero.guarantee": "Pas d'économies identifiées = Pas de paiement",
        
        // Dashboard preview
        "dashboard.title": "SpendPilot Dashboard",
        "dashboard.savings.label": "Économies identifiées",
        "dashboard.savings.change": "+32% vs budget",
        "dashboard.waste.label": "Gaspillage détecté",
        "dashboard.waste.value": "18 ressources",
        "dashboard.waste.change": "Action requise",
        
        // Stats
        "stats.waste.value": "135 Mds$",
        "stats.waste.label": "gaspillés dans le Cloud en 2024",
        "stats.budget.value": "72%",
        "stats.budget.label": "des entreprises dépassent leur budget Cloud",
        "stats.savings.value": "20-40%",
        "stats.savings.label": "d'économies possibles avec le FinOps",
        
        // Problem section
        "problem.tag": "Le problème",
        "problem.title.part1": "Votre facture Cloud cache des",
        "problem.title.part2": "milliers d'euros",
        "problem.title.part3": "de gaspillage",
        "problem.1.title": "Ressources surdimensionnées",
        "problem.1.desc": "VMs et instances bien trop puissantes pour leur charge réelle. Vous payez pour de la capacité inutilisée.",
        "problem.2.title": "Environnements oubliés",
        "problem.2.desc": "Dev, test, staging... Ces environnements tournent 24/7 alors qu'ils ne servent que quelques heures par jour.",
        "problem.3.title": "Réservations non optimisées",
        "problem.3.desc": "Reserved Instances, Savings Plans mal calibrés. Vous ne profitez pas des réductions auxquelles vous avez droit.",
        "problem.4.title": "Disques et IPs orphelins",
        "problem.4.desc": "Volumes de stockage détachés, adresses IP non utilisées. Invisibles mais facturés chaque mois.",
        "problem.5.title": "Bases inactives",
        "problem.5.desc": "Bases de données provisionnées mais peu sollicitées. Le coût reste fixe, même sans requêtes.",
        "problem.6.title": "Snapshots accumulés",
        "problem.6.desc": "Des mois de sauvegardes qui s'empilent. Stockage fantôme qui alourdit la facture sans valeur ajoutée.",
        
        // Solution section
        "solution.tag": "La solution",
        "solution.title.part1": "SpendPilot analyse votre tenant et identifie",
        "solution.title.part2": "toutes les économies",
        "solution.subtitle": "En quelques minutes, notre outil scanne automatiquement votre infrastructure Azure ou AWS et génère un rapport complet des optimisations possibles.",
        "solution.step1.title": "Connexion sécurisée",
        "solution.step1.desc": "Accès en lecture seule à votre tenant via Azure Resource Graph ou AWS APIs. Installation en moins de 30 minutes, aucun changement d'infrastructure.",
        "solution.step1.time": "⏱ 30 min",
        "solution.step2.title": "Analyse automatique",
        "solution.step2.desc": "Règles heuristiques + scoring IA. Détection intelligente du gaspillage, analyse historique des coûts, identification des anomalies.",
        "solution.step2.time": "⏱ 24h",
        "solution.step3.title": "Rapport exécutif",
        "solution.step3.desc": "Document PDF clair destiné au CIO/CFO. Recommandations précises et actionnables, estimation fiabilisée des économies annuelles.",
        "solution.step3.time": "⏱ 48h total",
        "solution.step4.title": "Économies garanties",
        "solution.step4.desc": "Automatisation optionnelle pour appliquer les optimisations. Suivi continu et détection proactive des dérives.",
        "solution.step4.time": "💰 20-40% d'économies",
        
        // Features
        "features.azure": "Azure",
        "features.azure.desc": "Support complet Azure Resource Graph, Cost Management, Advisor",
        "features.aws": "AWS",
        "features.aws.desc": "Intégration Cost Explorer, Trusted Advisor, Compute Optimizer",
        "features.ai": "IA & Scoring",
        "features.ai.desc": "Détection intelligente des anomalies et priorisation des actions",
        "features.report": "Rapport PDF",
        "features.report.desc": "Document exécutif pour CIO/CFO, prêt à présenter en COMEX",
        "features.auto": "Automatisation",
        "features.auto.desc": "Application automatique des optimisations (optionnel)",
        "features.green": "GreenOps",
        "features.green.desc": "Réduire les coûts = Réduire l'empreinte carbone",
        
        // Pricing
        "pricing.tag": "Tarifs",
        "pricing.title.part1": "Un modèle",
        "pricing.title.part2": "orienté résultats",
        "pricing.subtitle": "Vous ne payez que si nous générons des économies. C'est aussi simple que ça.",
        "pricing.badge": "Le plus populaire",
        "pricing.main.title": "Audit & Optimisation",
        "pricing.main.value": "20%",
        "pricing.main.detail": "des économies réalisées",
        "pricing.main.desc": "Facturé uniquement sur les économies de la première année",
        "pricing.main.feature1": "Audit complet multi-cloud",
        "pricing.main.feature2": "Rapport exécutif PDF",
        "pricing.main.feature3": "Recommandations priorisées",
        "pricing.main.feature4": "Automatisation optionnelle",
        "pricing.main.feature5": "Support dédié",
        "pricing.example.label": "Exemple :",
        "pricing.example.savings.label": "Économies :",
        "pricing.example.savings.value": "200 000 €/an",
        "pricing.example.keep.label": "Vous gardez :",
        "pricing.example.keep.value": "160 000 €",
        "pricing.example.fee.label": "Notre fee :",
        "pricing.example.fee.value": "40 000 €",
        "pricing.secondary.title": "Suivi Continu",
        "pricing.secondary.value": "Sur devis",
        "pricing.secondary.detail": "abonnement mensuel",
        "pricing.secondary.desc": "Pour une optimisation permanente de vos coûts Cloud",
        "pricing.secondary.feature1": "Surveillance 24/7",
        "pricing.secondary.feature2": "Détection des dérives",
        "pricing.secondary.feature3": "Alertes en temps réel",
        "pricing.secondary.feature4": "Rapports mensuels",
        "pricing.secondary.feature5": "Ajustements réguliers",
        "pricing.guarantee.title": "Garantie zéro risque",
        "pricing.guarantee.desc": "Si notre audit ne révèle aucune économie significative, vous ne payez rien. Aucun engagement, aucun frais caché.",
        
        // Social proof
        "proof.tag": "Ils en parlent",
        "proof.title.part1": "Le gaspillage Cloud est un",
        "proof.title.part2": "problème mondial",
        
        // Resources
        "resources.tag": "Ressources",
        "resources.title.part1": "Comprendre le",
        "resources.title.part2": "FinOps & GreenOps",
        "resources.market": "📊 Marché FinOps",
        "resources.waste": "💸 Gaspillage Cloud",
        "resources.green": "🌱 GreenOps",
        "resources.press": "🇫🇷 Presse française",
        
        // CTA
        "cta.title": "Prêt à découvrir combien vous pouvez économiser ?",
        "cta.subtitle": "Audit gratuit en 48h. Résultats garantis ou vous ne payez rien.",
        "cta.button": "Lancer mon audit gratuit",
        "cta.trust1": "✓ Installation en 30 min",
        "cta.trust2": "✓ Accès lecture seule",
        "cta.trust3": "✓ Aucun engagement",
        
        // Footer
        "footer.tagline": "Optimisation des coûts Cloud. FinOps & GreenOps pour Azure et AWS.",
        "footer.navigation": "Navigation",
        "footer.resources": "Ressources",
        "footer.copyright": "© 2025 SpendPilot. Tous droits réservés.",
        "footer.legal": "Mentions légales",
        "footer.privacy": "Politique de confidentialité",
        
        // Contact page
        "contact.tag": "Contact",
        "contact.title.part1": "Demandez votre",
        "contact.title.part2": "audit gratuit",
        "contact.subtitle": "En quelques heures, vous saurez exactement combien vous pouvez économiser sur votre infrastructure Cloud Azure ou AWS.",
        "contact.email.label": "Email",
        "contact.location.label": "Localisation",
        "contact.location.value": "France",
        "contact.response.label": "Temps de réponse",
        "contact.response.value": "Sous 24 heures",
        "contact.form.title": "Formulaire de demande",
        "contact.form.subtitle": "Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.",
        "contact.form.firstname": "Prénom *",
        "contact.form.lastname": "Nom *",
        "contact.form.email": "Email professionnel *",
        "contact.form.company": "Entreprise *",
        "contact.form.role": "Fonction",
        "contact.form.provider": "Cloud Provider *",
        "contact.form.spend": "Budget Cloud mensuel estimé",
        "contact.form.message": "Message (optionnel)",
        "contact.form.privacy": "J'accepte que mes données soient traitées conformément à la politique de confidentialité de SpendPilot. *",
        "contact.form.submit": "Demander mon audit gratuit",
        "contact.guarantee.title": "Garantie zéro risque",
        "contact.guarantee.1": "✓ Audit 100% gratuit et sans engagement",
        "contact.guarantee.2": "✓ Accès lecture seule à votre tenant",
        "contact.guarantee.3": "✓ Résultats en 48 heures",
        "contact.guarantee.4": "✓ Pas d'économies = Pas de paiement",
        
        // FAQ
        "faq.tag": "FAQ",
        "faq.title": "Questions fréquentes",
        "faq.q1.title": "Comment fonctionne l'audit gratuit ?",
        "faq.q1.answer": "Nous connectons SpendPilot à votre tenant Azure ou AWS en lecture seule. Notre outil analyse automatiquement vos ressources et génère un rapport complet des économies possibles en 48h.",
        "faq.q2.title": "Quelles données sont collectées ?",
        "faq.q2.answer": "Uniquement les métadonnées de configuration et d'usage (types d'instances, utilisation CPU/RAM, coûts). Aucune donnée métier n'est accessible ni stockée.",
        "faq.q3.title": "Que se passe-t-il si vous ne trouvez rien ?",
        "faq.q3.answer": "Si notre audit ne révèle aucune économie significative, vous ne payez rien. C'est notre garantie zéro risque.",
        "faq.q4.title": "Comment sont calculés les 20% ?",
        "faq.q4.answer": "Les 20% s'appliquent uniquement sur les économies effectivement réalisées la première année, après implémentation de nos recommandations.",

        // Contact form options
        "form.select": "Sélectionnez...",
        "form.provider.azure": "Microsoft Azure",
        "form.provider.aws": "Amazon Web Services (AWS)",
        "form.provider.both": "Azure + AWS (Multi-cloud)",
        "form.provider.other": "Autre / Je ne sais pas",
        "form.budget.select": "Sélectionnez...",
        "form.budget.10k": "Moins de 10 000 €",
        "form.budget.10-50k": "10 000 € - 50 000 €",
        "form.budget.50-100k": "50 000 € - 100 000 €",
        "form.budget.100-500k": "100 000 € - 500 000 €",
        "form.budget.500k": "Plus de 500 000 €",

        // Blog page
        "blog.tag": "Blog",
        "blog.title.part1": "FinOps & GreenOps :",
        "blog.title.part2": "Actualités et conseils",
        "blog.subtitle": "Découvrez nos articles sur l'optimisation des coûts Cloud, les bonnes pratiques FinOps et les stratégies GreenOps pour Azure et AWS.",
        "blog.category.finops": "FinOps",
        "blog.category.azure": "Azure",
        "blog.category.aws": "AWS",
        "blog.category.greenops": "GreenOps",
        "blog.category.practices": "Bonnes pratiques",
        "blog.category.news": "Actualités",
        "blog.read-more": "Lire l'article →",
        "blog.newsletter.title": "Restez informé des dernières actualités FinOps",
        "blog.newsletter.subtitle": "Recevez nos articles, guides et conseils directement dans votre boîte mail.",
        "blog.newsletter.email": "Votre email professionnel",
        "blog.newsletter.submit": "S'abonner",

        // Blog articles
        "blog.article1.date": "7 décembre 2024",
        "blog.article1.title": "Le guide complet du FinOps en 2025 : principes, pratiques et outils",
        "blog.article1.desc": "Découvrez comment le FinOps transforme la gestion des coûts Cloud. De la théorie à la pratique, tout ce que vous devez savoir pour implémenter une stratégie FinOps efficace.",
        "blog.article2.date": "5 décembre 2024",
        "blog.article2.title": "10 techniques pour réduire vos coûts Azure de 30%",
        "blog.article2.desc": "Reserved Instances, Azure Advisor, rightsizing... Découvrez les meilleures pratiques pour optimiser votre facture Azure sans sacrifier la performance.",
        "blog.article3.date": "3 décembre 2024",
        "blog.article3.title": "AWS Savings Plans vs Reserved Instances : que choisir ?",
        "blog.article3.desc": "Comprendre les différences entre Savings Plans et Reserved Instances pour maximiser vos économies sur AWS. Guide comparatif détaillé.",
        "blog.article4.date": "1 décembre 2024",
        "blog.article4.title": "GreenOps : Comment réduire l'empreinte carbone de votre Cloud",
        "blog.article4.desc": "Le lien entre optimisation des coûts et durabilité. Découvrez comment le GreenOps peut vous aider à atteindre vos objectifs RSE tout en réduisant vos dépenses.",
        "blog.article5.date": "28 novembre 2024",
        "blog.article5.title": "Comment identifier et supprimer les ressources Cloud orphelines",
        "blog.article5.desc": "Disques détachés, IPs non utilisées, snapshots oubliés... Ces ressources fantômes peuvent représenter jusqu'à 15% de votre facture Cloud.",
        "blog.article6.date": "25 novembre 2024",
        "blog.article6.title": "135 milliards de dollars gaspillés dans le Cloud en 2024",
        "blog.article6.desc": "Analyse du rapport sur le gaspillage Cloud mondial. Pourquoi les entreprises peinent à optimiser leurs dépenses et comment y remédier."
    },
    
    en: {
        // Navigation
        "nav.product": "Product",
        "nav.pricing": "Pricing",
        "nav.resources": "Resources",
        "nav.contact": "Contact",
        "nav.cta": "Free Audit →",
        
        // Hero
        "hero.badge": "FinOps & GreenOps — Azure & AWS",
        "hero.title1": "30% of your Cloud",
        "hero.title2": "bill is",
        "hero.title.highlight": "wasted",
        "hero.subtitle.part1": "We prove it in",
        "hero.subtitle.part2": "48 hours",
        "hero.subtitle.part3": ". Automated audit, actionable recommendations, guaranteed savings.",
        "hero.cta.primary": "Start my free audit",
        "hero.cta.secondary": "Learn how",
        "hero.guarantee": "No savings found = No payment",
        
        // Dashboard preview
        "dashboard.title": "SpendPilot Dashboard",
        "dashboard.savings.label": "Identified savings",
        "dashboard.savings.change": "+32% vs budget",
        "dashboard.waste.label": "Waste detected",
        "dashboard.waste.value": "18 resources",
        "dashboard.waste.change": "Action required",
        
        // Stats
        "stats.waste.value": "$135B",
        "stats.waste.label": "wasted in Cloud in 2024",
        "stats.budget.value": "72%",
        "stats.budget.label": "of companies exceed their Cloud budget",
        "stats.savings.value": "20-40%",
        "stats.savings.label": "savings possible with FinOps",
        
        // Problem section
        "problem.tag": "The problem",
        "problem.title.part1": "Your Cloud bill hides",
        "problem.title.part2": "thousands of dollars",
        "problem.title.part3": "in waste",
        "problem.1.title": "Oversized resources",
        "problem.1.desc": "VMs and instances far too powerful for their actual load. You pay for unused capacity.",
        "problem.2.title": "Forgotten environments",
        "problem.2.desc": "Dev, test, staging... These environments run 24/7 when they're only used a few hours a day.",
        "problem.3.title": "Unoptimized reservations",
        "problem.3.desc": "Reserved Instances, Savings Plans poorly calibrated. You're not getting the discounts you deserve.",
        "problem.4.title": "Orphan disks and IPs",
        "problem.4.desc": "Detached storage volumes, unused IP addresses. Invisible but billed every month.",
        "problem.5.title": "Inactive databases",
        "problem.5.desc": "Provisioned databases with low usage. The cost stays fixed, even without queries.",
        "problem.6.title": "Accumulated snapshots",
        "problem.6.desc": "Months of backups piling up. Ghost storage weighing down your bill with no added value.",
        
        // Solution section
        "solution.tag": "The solution",
        "solution.title.part1": "SpendPilot analyzes your tenant and identifies",
        "solution.title.part2": "all savings",
        "solution.subtitle": "In minutes, our tool automatically scans your Azure or AWS infrastructure and generates a complete optimization report.",
        "solution.step1.title": "Secure connection",
        "solution.step1.desc": "Read-only access to your tenant via Azure Resource Graph or AWS APIs. Setup in under 30 minutes, no infrastructure changes.",
        "solution.step1.time": "⏱ 30 min",
        "solution.step2.title": "Automated analysis",
        "solution.step2.desc": "Heuristic rules + AI scoring. Intelligent waste detection, historical cost analysis, anomaly identification.",
        "solution.step2.time": "⏱ 24h",
        "solution.step3.title": "Executive report",
        "solution.step3.desc": "Clear PDF document for CIO/CFO. Precise and actionable recommendations, reliable annual savings estimate.",
        "solution.step3.time": "⏱ 48h total",
        "solution.step4.title": "Guaranteed savings",
        "solution.step4.desc": "Optional automation to apply optimizations. Continuous monitoring and proactive drift detection.",
        "solution.step4.time": "💰 20-40% savings",
        
        // Features
        "features.azure": "Azure",
        "features.azure.desc": "Full Azure Resource Graph, Cost Management, Advisor support",
        "features.aws": "AWS",
        "features.aws.desc": "Cost Explorer, Trusted Advisor, Compute Optimizer integration",
        "features.ai": "AI & Scoring",
        "features.ai.desc": "Intelligent anomaly detection and action prioritization",
        "features.report": "PDF Report",
        "features.report.desc": "Executive document for CIO/CFO, ready for board presentation",
        "features.auto": "Automation",
        "features.auto.desc": "Automatic application of optimizations (optional)",
        "features.green": "GreenOps",
        "features.green.desc": "Reduce costs = Reduce carbon footprint",
        
        // Pricing
        "pricing.tag": "Pricing",
        "pricing.title.part1": "A",
        "pricing.title.part2": "results-oriented",
        "pricing.title.part3": "model",
        "pricing.subtitle": "You only pay if we generate savings. It's that simple.",
        "pricing.badge": "Most popular",
        "pricing.main.title": "Audit & Optimization",
        "pricing.main.value": "20%",
        "pricing.main.detail": "of achieved savings",
        "pricing.main.desc": "Billed only on first year savings",
        "pricing.main.feature1": "Complete multi-cloud audit",
        "pricing.main.feature2": "Executive PDF report",
        "pricing.main.feature3": "Prioritized recommendations",
        "pricing.main.feature4": "Optional automation",
        "pricing.main.feature5": "Dedicated support",
        "pricing.example.label": "Example:",
        "pricing.example.savings.label": "Savings:",
        "pricing.example.savings.value": "€200,000/year",
        "pricing.example.keep.label": "You keep:",
        "pricing.example.keep.value": "€160,000",
        "pricing.example.fee.label": "Our fee:",
        "pricing.example.fee.value": "€40,000",
        "pricing.secondary.title": "Continuous Monitoring",
        "pricing.secondary.value": "Custom quote",
        "pricing.secondary.detail": "monthly subscription",
        "pricing.secondary.desc": "For permanent Cloud cost optimization",
        "pricing.secondary.feature1": "24/7 monitoring",
        "pricing.secondary.feature2": "Drift detection",
        "pricing.secondary.feature3": "Real-time alerts",
        "pricing.secondary.feature4": "Monthly reports",
        "pricing.secondary.feature5": "Regular adjustments",
        "pricing.guarantee.title": "Zero risk guarantee",
        "pricing.guarantee.desc": "If our audit reveals no significant savings, you pay nothing. No commitment, no hidden fees.",
        
        // Social proof
        "proof.tag": "In the press",
        "proof.title.part1": "Cloud waste is a",
        "proof.title.part2": "global problem",
        
        // Resources
        "resources.tag": "Resources",
        "resources.title.part1": "Understanding",
        "resources.title.part2": "FinOps & GreenOps",
        "resources.market": "📊 FinOps Market",
        "resources.waste": "💸 Cloud Waste",
        "resources.green": "🌱 GreenOps",
        "resources.press": "🇫🇷 French Press",
        
        // CTA
        "cta.title": "Ready to discover how much you can save?",
        "cta.subtitle": "Free audit in 48h. Guaranteed results or you pay nothing.",
        "cta.button": "Start my free audit",
        "cta.trust1": "✓ 30 min setup",
        "cta.trust2": "✓ Read-only access",
        "cta.trust3": "✓ No commitment",
        
        // Footer
        "footer.tagline": "Cloud cost optimization. FinOps & GreenOps for Azure and AWS.",
        "footer.navigation": "Navigation",
        "footer.resources": "Resources",
        "footer.copyright": "© 2025 SpendPilot. All rights reserved.",
        "footer.legal": "Legal Notice",
        "footer.privacy": "Privacy Policy",
        
        // Contact page
        "contact.tag": "Contact",
        "contact.title.part1": "Request your",
        "contact.title.part2": "free audit",
        "contact.subtitle": "In a few hours, you'll know exactly how much you can save on your Azure or AWS Cloud infrastructure.",
        "contact.email.label": "Email",
        "contact.location.label": "Location",
        "contact.location.value": "France",
        "contact.response.label": "Response time",
        "contact.response.value": "Within 24 hours",
        "contact.form.title": "Request form",
        "contact.form.subtitle": "Fill out the form below and we'll get back to you quickly.",
        "contact.form.firstname": "First name *",
        "contact.form.lastname": "Last name *",
        "contact.form.email": "Professional email *",
        "contact.form.company": "Company *",
        "contact.form.role": "Role",
        "contact.form.provider": "Cloud Provider *",
        "contact.form.spend": "Estimated monthly Cloud budget",
        "contact.form.message": "Message (optional)",
        "contact.form.privacy": "I accept that my data will be processed according to SpendPilot's privacy policy. *",
        "contact.form.submit": "Request my free audit",
        "contact.guarantee.title": "Zero risk guarantee",
        "contact.guarantee.1": "✓ 100% free audit, no commitment",
        "contact.guarantee.2": "✓ Read-only access to your tenant",
        "contact.guarantee.3": "✓ Results in 48 hours",
        "contact.guarantee.4": "✓ No savings = No payment",
        
        // FAQ
        "faq.tag": "FAQ",
        "faq.title": "Frequently Asked Questions",
        "faq.q1.title": "How does the free audit work?",
        "faq.q1.answer": "We connect SpendPilot to your Azure or AWS tenant in read-only mode. Our tool automatically analyzes your resources and generates a complete savings report within 48 hours.",
        "faq.q2.title": "What data is collected?",
        "faq.q2.answer": "Only configuration and usage metadata (instance types, CPU/RAM usage, costs). No business data is accessed or stored.",
        "faq.q3.title": "What happens if you don't find anything?",
        "faq.q3.answer": "If our audit reveals no significant savings, you pay nothing. That's our zero-risk guarantee.",
        "faq.q4.title": "How is the 20% calculated?",
        "faq.q4.answer": "The 20% applies only to savings actually achieved in the first year, after implementing our recommendations.",

        // Contact form options
        "form.select": "Select...",
        "form.provider.azure": "Microsoft Azure",
        "form.provider.aws": "Amazon Web Services (AWS)",
        "form.provider.both": "Azure + AWS (Multi-cloud)",
        "form.provider.other": "Other / I don't know",
        "form.budget.select": "Select...",
        "form.budget.10k": "Less than €10,000",
        "form.budget.10-50k": "€10,000 - €50,000",
        "form.budget.50-100k": "€50,000 - €100,000",
        "form.budget.100-500k": "€100,000 - €500,000",
        "form.budget.500k": "More than €500,000",

        // Blog page
        "blog.tag": "Blog",
        "blog.title.part1": "FinOps & GreenOps:",
        "blog.title.part2": "News and insights",
        "blog.subtitle": "Discover our articles on Cloud cost optimization, FinOps best practices, and GreenOps strategies for Azure and AWS.",
        "blog.category.finops": "FinOps",
        "blog.category.azure": "Azure",
        "blog.category.aws": "AWS",
        "blog.category.greenops": "GreenOps",
        "blog.category.practices": "Best practices",
        "blog.category.news": "News",
        "blog.read-more": "Read article →",
        "blog.newsletter.title": "Stay informed about the latest FinOps news",
        "blog.newsletter.subtitle": "Receive our articles, guides and tips directly in your inbox.",
        "blog.newsletter.email": "Your professional email",
        "blog.newsletter.submit": "Subscribe",

        // Blog articles
        "blog.article1.date": "December 7, 2024",
        "blog.article1.title": "The Complete FinOps Guide for 2025: Principles, Practices, and Tools",
        "blog.article1.desc": "Discover how FinOps transforms Cloud cost management. From theory to practice, everything you need to know to implement an effective FinOps strategy.",
        "blog.article2.date": "December 5, 2024",
        "blog.article2.title": "10 Techniques to Reduce Your Azure Costs by 30%",
        "blog.article2.desc": "Reserved Instances, Azure Advisor, rightsizing... Discover the best practices to optimize your Azure bill without sacrificing performance.",
        "blog.article3.date": "December 3, 2024",
        "blog.article3.title": "AWS Savings Plans vs Reserved Instances: Which to Choose?",
        "blog.article3.desc": "Understand the differences between Savings Plans and Reserved Instances to maximize your AWS savings. Detailed comparison guide.",
        "blog.article4.date": "December 1, 2024",
        "blog.article4.title": "GreenOps: How to Reduce Your Cloud Carbon Footprint",
        "blog.article4.desc": "The link between cost optimization and sustainability. Discover how GreenOps can help you achieve your CSR goals while reducing expenses.",
        "blog.article5.date": "November 28, 2024",
        "blog.article5.title": "How to Identify and Remove Orphaned Cloud Resources",
        "blog.article5.desc": "Detached disks, unused IPs, forgotten snapshots... These phantom resources can represent up to 15% of your Cloud bill.",
        "blog.article6.date": "November 25, 2024",
        "blog.article6.title": "$135 Billion Wasted in the Cloud in 2024",
        "blog.article6.desc": "Analysis of the global Cloud waste report. Why companies struggle to optimize their spending and how to fix it."
    }
};

// Translation function
function translatePage(lang) {
    document.documentElement.lang = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            const translation = translations[lang][key];

            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            } else if (element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else {
                // Check if translation contains HTML tags
                if (/<[^>]*>/g.test(translation)) {
                    // Use DOMPurify if available, otherwise use textContent as fallback
                    if (typeof DOMPurify !== 'undefined') {
                        element.innerHTML = DOMPurify.sanitize(translation);
                    } else {
                        // Fallback: only allow specific safe tags
                        const tempDiv = document.createElement('div');
                        tempDiv.textContent = translation;
                        element.innerHTML = tempDiv.innerHTML;
                        console.warn('DOMPurify not loaded. HTML in translations stripped for security.');
                    }
                } else {
                    // Plain text, use textContent for security
                    element.textContent = translation;
                }
            }
        }
    });

    // Update language toggle button
    const langToggle = document.querySelector('.lang-toggle .lang-current');
    if (langToggle) {
        langToggle.textContent = lang.toUpperCase();
    }

    // Save preference
    localStorage.setItem('language', lang);
}

// Get saved language or detect from browser
function getInitialLanguage() {
    const saved = localStorage.getItem('language');
    if (saved) return saved;
    
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('fr') ? 'fr' : 'en';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const initialLang = getInitialLanguage();
    translatePage(initialLang);
    
    // Language toggle handler
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const currentLang = localStorage.getItem('language') || 'fr';
            const newLang = currentLang === 'fr' ? 'en' : 'fr';
            translatePage(newLang);
        });
    }
});
