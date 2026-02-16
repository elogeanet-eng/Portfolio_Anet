# 🎨 Portfolio - Anet Kouao Franck Eloge

> Portfolio moderne et professionnel de développeur Full-Stack Junior

[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff)](https://vitejs.dev/)

## 🚀 Démarrage Rapide

### Prérequis

Installez Node.js et npm :
```bash
sudo apt update
sudo apt install nodejs npm
```

### Installation & Lancement

```bash
# 1. Installer les dépendances
npm install

# 2. Ajouter votre photo (optionnel)
./add-photo.sh /chemin/vers/votre/photo.jpg

# 3. Lancer le serveur de développement
./start.sh
# OU
npm run dev
```

Ouvrez votre navigateur à **http://localhost:5173**

## 📸 Photo de Profil

Remplacez l'image placeholder par votre photo professionnelle :

```bash
./add-photo.sh /chemin/vers/votre/photo.jpg
```

Ou manuellement :
```bash
cp votre-photo.jpg public/profile-photo.jpg
```

## 🎯 Fonctionnalités

- ✨ **Design Moderne** : Inspiré de Vercel, Linear et Stripe
- 🌓 **Mode Sombre/Clair** : Thème adaptatif
- 📱 **100% Responsive** : Mobile, Tablet, Desktop
- ⚡ **Performance Optimale** : Build avec Vite
- 🎭 **Animations Fluides** : Framer Motion
- 🎨 **Gradients Premium** : Violet-Indigo-Bleu
- 💼 **Projets Réels** : Basé sur votre CV
- 🔗 **Liens Sociaux** : GitHub, LinkedIn, Email

## 📊 Sections

1. **Hero** - Présentation avec photo et informations clés
2. **À Propos** - Parcours et qualités professionnelles
3. **Compétences** - Technologies et outils maîtrisés
4. **Projets** - Portfolio de réalisations
5. **Expérience** - Parcours professionnel et académique
6. **Contact** - Formulaire et informations de contact

## 🛠️ Technologies

- **React 18** - Framework UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utilitaire
- **Framer Motion** - Animations
- **Vite** - Build tool
- **Lucide React** - Icônes modernes

## 📝 Personnalisation

### Modifier les données

Éditez `src/data/portfolio.ts` :

```typescript
// Compétences
export const skills: Skill[] = [...]

// Projets
export const projects: Project[] = [...]

// Expériences
export const experiences: Experience[] = [...]
```

### Modifier les informations personnelles

- **Hero** : `src/components/Hero.tsx`
- **Contact** : `src/components/Contact.tsx`
- **À Propos** : `src/components/About.tsx`

## 🌐 Déploiement

### Vercel (Recommandé)

1. Push sur GitHub
2. Connectez-vous sur [vercel.com](https://vercel.com)
3. Importez votre repository
4. Déployez !

### Netlify

```bash
npm run build
# Uploadez le dossier dist/ sur netlify.com
```

### GitHub Pages

```bash
npm run build
# Configurez GitHub Pages pour servir le dossier dist/
```

## 📂 Structure du Projet

```
Portfolio_Anet/
├── public/
│   └── profile-photo.jpg    # Votre photo
├── src/
│   ├── components/           # Composants React
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── portfolio.ts      # Données du portfolio
│   ├── hooks/                # Hooks personnalisés
│   ├── types/                # Types TypeScript
│   ├── utils/                # Utilitaires
│   ├── App.tsx               # Composant principal
│   └── index.css             # Styles globaux
├── add-photo.sh              # Script pour ajouter la photo
├── start.sh                  # Script de démarrage
└── README.md                 # Ce fichier
```

## 💡 Conseils

### Pour Impressionner les Recruteurs

1. ✅ Utilisez une **photo professionnelle** de qualité
2. ✅ Mettez à jour votre profil **LinkedIn**
3. ✅ Ajoutez des **README détaillés** sur GitHub
4. ✅ Incluez des **captures d'écran** de vos projets
5. ✅ Hébergez des **démos en ligne** si possible
6. ✅ Ajoutez un bouton de **téléchargement de CV**

### Avant de Postuler

- ✅ Vérifiez tous les liens
- ✅ Testez sur mobile et desktop
- ✅ Relisez tous les textes
- ✅ Demandez des retours
- ✅ Optimisez les images

## 📞 Contact

**Anet Kouao Franck Eloge**

- 📧 Email : [elogeanet@gmail.com](mailto:elogeanet@gmail.com)
- 📱 Téléphone : +225 07 48 31 67 31
- 📍 Localisation : Cocody Angré, Abidjan, Côte d'Ivoire
- 🔗 GitHub : [github.com/elogeanet-eng](https://github.com/elogeanet-eng)

## 📄 Licence

Ce portfolio est un projet personnel. Tous droits réservés.

---

**Développé avec ❤️ par Anet Kouao Franck Eloge**

*Portfolio créé avec React, TypeScript, Tailwind CSS et Framer Motion*
