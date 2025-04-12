Narrativ

Narrativ Logo

Racontez votre histoire professionnelle et partagez-la avec le monde.

Narrativ est une plateforme web qui permet aux professionnels de créer une page personnelle pour partager leur histoire, leurs passions et leur parcours. Conçue pour être simple et élégante, Narrativ vous aide à vous démarquer sur LinkedIn, Facebook ou WhatsApp en partageant une présentation authentique de vous-même.

Ce projet a été initié par Josias Boco, un développeur web freelance basé à Cotonou, Bénin, dans le cadre de son portfolio et de ses services de développement.
📖 Aperçu

Narrativ est destiné aux professionnels (freelances, entrepreneurs, employés) qui souhaitent raconter leur histoire de manière engageante. Que vous soyez un développeur comme moi, un coach linguistique, ou un gérant de PME, Narrativ vous permet de :

    Créer une page personnelle en quelques minutes.
    Partager votre histoire sur LinkedIn, Facebook ou WhatsApp.
    Vous démarquer avec un design professionnel et chaleureux.

Fonctionnalités (MVP)

    Création de Profil : Entrez votre nom, titre professionnel, photo, histoire, passions et parcours.
    Page Publique : Une URL unique (ex. narrativ.xyz/josias) avec un design épuré pour présenter votre histoire.
    Partage Facile : Boutons intégrés pour partager sur LinkedIn, Facebook et WhatsApp.
    Édition et Sauvegarde : Modifiez votre page à tout moment avec sauvegarde automatique.

Fonctionnalités Futures

    Templates de design personnalisés.
    Analytics (nombre de vues sur votre page).
    Intégration de liens (ex. LinkedIn, portfolio).
    Commentaires pour les visiteurs.

🎨 Design et Style

Narrativ adopte un design professionnel et chaleureux :

    Palette de Couleurs :
        Vert Profond (#2D6A4F) : Confiance et professionnalisme.
        Orange Chaleureux (#F4A261) : Créativité et chaleur.
        Gris Clair (#F5F5F5) et Blanc (#FFFFFF) : Clarté et lisibilité.
        Corail (#E76F51) : Accents subtils.
    Typographie :
        Inter (Google Fonts) : Texte principal, moderne et clair.
        Lora (Google Fonts) : Titres et nom, pour une touche narrative.
    Mise en Page : Sections claires (Mon Histoire, Mes Passions, Mon Parcours) avec un design responsive pour mobile.

🛠️ Technologies Utilisées

    Frontend : Next.js, Tailwind CSS, Framer Motion (animations subtiles).
    Backend : Firebase (ou localStorage pour le MVP).
    Déploiement : Vercel.
    Langage : JavaScript/TypeScript.

🚀 Installation et Lancement
Prérequis

    Node.js (version 16 ou supérieure).
    npm ou yarn.
    Un compte Firebase (optionnel pour le MVP, si vous utilisez localStorage).

Étapes

    Cloner le Dépôt :
    bash

git clone https://github.com/JosiasBoco/narrativ.git
cd narrativ
Installer les Dépendances :
bash
npm install
# ou
yarn install
Configurer les Variables d’Environnement :

    Créez un fichier .env.local à la racine du projet.
    Ajoutez vos clés Firebase (si utilisé) :
    text

    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

Lancer l’Application :
bash
npm run dev
# ou
yarn dev
L’application sera accessible sur http://localhost:3000.
Déployer sur Vercel :

    Connectez votre dépôt GitHub à Vercel.
    Déployez avec :
    bash

        vercel deploy

📋 Utilisation

    Créer un Profil :
        Inscrivez-vous avec votre email ou via LinkedIn/Facebook.
        Remplissez le formulaire : nom, titre, photo, histoire, passions, parcours.
        Prévisualisez et enregistrez.
    Partager Votre Page :
        Obtenez une URL unique (ex. narrativ.xyz/josias).
        Cliquez sur les boutons de partage pour LinkedIn, Facebook ou WhatsApp.

🤝 Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez améliorer Narrativ, suivez ces étapes :

    Forkez le dépôt.
    Créez une branche pour votre fonctionnalité (git checkout -b feature/nouvelle-fonction).
    Commitez vos changements (git commit -m "Ajout de nouvelle fonctionnalité").
    Poussez votre branche (git push origin feature/nouvelle-fonction).
    Ouvrez une Pull Request.

📅 Roadmap

    Semaine 3 (24-30 avril 2025) : Développement du MVP (design, code).
    Semaine 4 (1-2 mai 2025) : Déploiement sur Vercel avec domaine (narrativ.xyz).
    Mois 2 (mai 2025) : Ajout de templates et analytics.
    Mois 3 (juin 2025) : Intégration de fonctionnalités IA (ex. analyse de sentiment via Hugging Face).

👨‍💻 À Propos de l’Auteur

Je suis Josias Boco, un développeur web freelance basé à Cotonou, Bénin. Narrativ est l’un de mes projets pour aider les professionnels à raconter leur histoire. Découvrez mes autres projets :

    Portfolio : "https://kloo.me/josias.dev"
    Destinations Benin (en cours)
    EduLibrary (en cours)

📧 Contactez-moi : josiasboco@gmail.com

📱 WhatsApp : +22940545270

🔗 LinkedIn : [votre-profil-linkedin]
📜 Licence

Ce projet est sous licence MIT. Voir le fichier  pour plus de détails.