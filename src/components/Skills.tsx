import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Code2, PenTool as Tool, Globe, Github, ExternalLink } from 'lucide-react';

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const knowledgeCategories = [
    {
      title: 'Langages et Technologies',
      icon: <Code2 className="w-8 h-8" />,
      items: ['Java SE', 'Java EE', 'HTML', 'CSS', 'JavaScript', 'C#'],
      color: 'from-violet-600 to-indigo-600'
    },
    {
      title: 'Outils et Environnements',
      icon: <Tool className="w-8 h-8" />,
      items: ['Android Studio', 'Antigravity', 'VS Code', 'Visual Studio', 'Cursor', 'Développement frontend web/mobile'],
      color: 'from-indigo-600 to-blue-600'
    },
    {
      title: 'Autres Connaissances',
      icon: <Globe className="w-8 h-8" />,
      items: [
        'Réseaux informatiques',
        'Télécommunications',
        'Bureautique',
        'Cisco ISE (déploiement de contrôle d\'accès)',
        'GLPI (gestion de tickets)'
      ],
      color: 'from-blue-600 to-cyan-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Mes Connaissances
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies, outils et domaines d'expertise que j'ai acquis tout au long de mon parcours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {knowledgeCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-violet-500/50 transition-colors group"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center text-slate-600 dark:text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-violet-600 mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Github Link Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-md">
              <Github className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">Explorez mes projets sur GitHub</h3>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                Retrouvez l'intégralité de mon code, mes contributions et mes projets personnels, y compris le projet AirSmart.
              </p>
              <a
                href="https://github.com/elogeanet-eng/AirSmart"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-violet-50 transform hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                Voir le dépôt AirSmart
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

