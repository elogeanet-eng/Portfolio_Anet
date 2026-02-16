import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <span className="font-bold text-lg">
              Dev<span className="text-violet-400">Portfolio</span>
            </span>
          </div>

          <p className="text-slate-400 text-sm text-center flex items-center gap-1">
            Créé avec <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> par un développeur passionné
          </p>

          <p className="text-slate-500 text-sm">
            © {currentYear} Portfolio. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
