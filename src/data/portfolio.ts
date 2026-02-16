import { Project, Skill, Experience } from '../types';

export const skills: Skill[] = [
  // Langages de programmation
  { name: 'Java SE/EE', level: 85, icon: '☕', category: 'backend' },
  { name: 'C#', level: 75, icon: '💎', category: 'backend' },
  { name: 'HTML/CSS', level: 90, icon: '🎨', category: 'frontend' },
  { name: 'JavaScript', level: 85, icon: '⚡', category: 'frontend' },

  // Développement Mobile
  { name: 'Android Studio', level: 80, icon: '🤖', category: 'mobile' },
  { name: 'Développement Mobile', level: 80, icon: '📱', category: 'mobile' },

  // Outils & Environnements
  { name: 'VS Code', level: 90, icon: '💻', category: 'tools' },
  { name: 'Visual Studio', level: 85, icon: '🔧', category: 'tools' },
  { name: 'Git/GitHub', level: 85, icon: '🔀', category: 'tools' },

  // Bases de données
  { name: 'MongoDB', level: 75, icon: '🍃', category: 'backend' },
  { name: 'SQL', level: 70, icon: '🗄️', category: 'backend' },

  // Réseaux & Systèmes
  { name: 'Réseaux Informatiques', level: 85, icon: '🌐', category: 'other' },
  { name: 'Cisco ISE', level: 75, icon: '🔐', category: 'other' },
  { name: 'GLPI', level: 80, icon: '🎫', category: 'other' },
  { name: 'Support Technique', level: 90, icon: '🛠️', category: 'other' },

  // Méthodologies
  { name: 'UML', level: 80, icon: '📐', category: 'other' },
  { name: 'Gestion de Projet', level: 75, icon: '📊', category: 'other' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'AirSmart - Application Frontend',
    description: 'Application frontend moderne développée dans le cadre de l\'Apprentissage Par Projet 3. Interface utilisateur intuitive et responsive.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
    category: 'frontend',
    liveUrl: '#',
    githubUrl: 'https://github.com/elogeanet-eng/AirSmart',
  },
  {
    id: 2,
    title: 'Application Cargo',
    description: 'Application mobile Android permettant de réserver et acheter des tickets de voyage à distance, consulter les tarifs, destinations de gares routières et vérifier la disponibilité des tickets.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
    technologies: ['Android Studio', 'Java', 'Mobile'],
    category: 'mobile',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Gestion des Congés en Entreprise',
    description: 'Application complète de gestion des congés développée en Java EE. Permet aux employés de soumettre des demandes et aux managers de les approuver.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    technologies: ['Java EE', 'SQL', 'Backend'],
    category: 'fullstack',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Gestion de Bibliothèque',
    description: 'Application de gestion de bibliothèque développée en Java SE avec modélisation UML complète. Gestion des emprunts, retours et catalogue de livres.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop',
    technologies: ['Java SE', 'UML', 'POO'],
    category: 'backend',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Calculatrice Avancée',
    description: 'Application de calculatrice développée en C#, mettant en pratique les concepts de la programmation orientée objet et les bonnes pratiques de développement.',
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&h=600&fit=crop',
    technologies: ['C#', 'POO', 'Visual Studio'],
    category: 'backend',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Formulaire de Recensement E-commerce',
    description: 'Formulaire web pour enregistrer les commandes des clients dans le cadre d\'une activité de e-commerce. Interface moderne et validation des données.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web'],
    category: 'frontend',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const experiences: Experience[] = [
  {
    id: 3,
    title: 'BTS - Brevet de Technicien Supérieur',
    company: 'ITES II PLATEAUX',
    period: '2023',
    description: 'Formation en Réseau Informatique et Télécommunication. Acquisition de compétences solides en infrastructure réseau, télécommunications et systèmes informatiques.',
    technologies: ['Réseaux', 'Télécommunications', 'Systèmes', 'Bureautique'],
  },
  {
    id: 1,
    title: 'Stagiaire Réseau et Système Informatique',
    company: 'BNETD (Bureau National d\'Étude et de Développement)',
    period: 'Mars - Septembre 2024',
    description: 'Support technique et diagnostic des problèmes informatiques. Intervention sur le réseau et les équipements informatiques. Participation au déploiement d\'une solution de contrôle d\'accès réseau Cisco ISE. Gestion des tickets et maintenance préventive dans GLPI.',
    technologies: ['Cisco ISE', 'GLPI', 'Réseaux', 'Support Technique', 'Maintenance'],
  },
  {
    id: 2,
    title: 'Étudiant en L3',
    company: 'ESATIC',
    period: 'Présent',
    description: 'Formation en Développement d\'Applications et Systèmes d\'Information. Apprentissage approfondi des technologies Java, Android, et développement web. Réalisation de projets pratiques en équipe.',
    technologies: ['Java', 'Android', 'Web', 'Gestion de Projet'],
  },
];
