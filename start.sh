#!/bin/bash

# 🚀 Script de Démarrage Rapide du Portfolio
# Anet Kouao Franck Eloge

echo "🎨 Portfolio - Anet Kouao Franck Eloge"
echo "======================================"
echo ""

# Vérifier si npm est installé
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé"
    echo ""
    echo "📦 Installation de Node.js et npm..."
    echo "Exécutez cette commande :"
    echo ""
    echo "  sudo apt update && sudo apt install -y nodejs npm"
    echo ""
    exit 1
fi

echo "✅ npm est installé"
echo ""

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
    
    if [ $? -ne 0 ]; then
        echo "❌ Erreur lors de l'installation des dépendances"
        exit 1
    fi
    echo "✅ Dépendances installées avec succès"
    echo ""
fi

# Vérifier si la photo existe
if [ ! -f "public/profile-photo.jpg" ]; then
    echo "⚠️  ATTENTION : Votre photo professionnelle n'est pas encore ajoutée"
    echo ""
    echo "Pour ajouter votre photo, utilisez :"
    echo "  ./add-photo.sh /chemin/vers/votre/photo.jpg"
    echo ""
    echo "Une image placeholder sera utilisée pour le moment."
    echo ""
fi

echo "🚀 Lancement du serveur de développement..."
echo ""
echo "📍 Le portfolio sera accessible à : http://localhost:5173"
echo ""
echo "Pour arrêter le serveur, appuyez sur Ctrl+C"
echo ""
echo "======================================"
echo ""

# Lancer le serveur
npm run dev
