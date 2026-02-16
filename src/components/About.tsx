import { motion } from 'framer-motion';
import { Code2, Rocket, Heart, Download } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Rigoureux & Dynamique',
      description: 'Approche méthodique et énergique dans chaque projet',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Esprit d\'équipe',
      description: 'Excellentes capacités de collaboration et communication',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Passionné',
      description: 'Motivé par l\'innovation et les nouvelles technologies',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            À Propos de Moi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl transform rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop"
                alt="Développement et technologies"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Développeur Junior
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Étudiant motivé et rigoureux en développement d'applications et systèmes
              d’information, avec une formation en réseaux et télécommunications. Passionné
              par l’informatique, j’ai des connaissances et une expérience en stages dans les
              domaines réseaux, télécoms et support informatique. Dynamique, doté d'un bon
              relationnel et d'une capacité d'adaptation, je suis prêt à apprendre et à contribuer
              à des projets innovants en équipe ou de manière autonome dans votre entreprise.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-lg text-violet-600 dark:text-violet-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{feature.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              href="/CV%20ANET%20KOUAO%20FRANCK%20ELOGE.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/60 transform hover:-translate-y-1 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Télécharger mon CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
