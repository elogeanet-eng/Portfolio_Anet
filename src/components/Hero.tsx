import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50 dark:from-slate-950 dark:via-slate-900 dark:to-violet-950 transition-colors">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Greeting Badge */}
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-violet-100 to-indigo-100 dark:from-violet-900/30 dark:to-indigo-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm font-semibold shadow-lg shadow-violet-500/10 border border-violet-200 dark:border-violet-800">
                👋 Bienvenue sur mon portfolio
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                <span className="block">Anet Kouao</span>
                <span className="block bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Franck Eloge
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                Développeur Junior
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
            >
              Étudiant passionné en développement d'applications et systèmes d'information.
            </motion.p>

            {/* Quick Info */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2 bg-white/50 dark:bg-slate-800/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-violet-600" />
                <span>Cocody Angré, Abidjan</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 dark:bg-slate-800/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Phone className="w-4 h-4 text-violet-600" />
                <span>+225 07 48 31 67 31</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white rounded-xl font-semibold shadow-xl shadow-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/40 transform hover:-translate-y-1 transition-all duration-300"
              >
                Découvrir mes projets
                <ArrowDown className="inline-block ml-2 w-5 h-5 group-hover:animate-bounce" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:border-violet-500 dark:hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-900/20 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                Me contacter
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="https://github.com/elogeanet-eng"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:hover:text-violet-400 transition-all transform hover:scale-110 shadow-lg hover:shadow-xl"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kouao-franck-eloge-anet-18b454291"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:hover:text-violet-400 transition-all transform hover:scale-110 shadow-lg hover:shadow-xl"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:elogeanet@gmail.com"
                className="p-3 bg-white dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:hover:text-violet-400 transition-all transform hover:scale-110 shadow-lg hover:shadow-xl"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Professional Photo */}
          <motion.div
            variants={imageVariants}
            className="relative flex items-center justify-center"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              {/* Photo container */}
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/anetphoto.png"
                    alt="Anet Kouao Franck Eloge"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl opacity-20 blur-xl animate-pulse delay-1000"></div>
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-800 px-6 py-3 rounded-full shadow-xl border-2 border-violet-200 dark:border-violet-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Disponible pour opportunités</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full p-1">
              <div className="w-1.5 h-3 bg-violet-600 dark:bg-violet-400 rounded-full mx-auto animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
