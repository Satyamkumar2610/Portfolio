import { motion } from 'framer-motion';
import { ArrowRight, BarChart2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-sm text-blue-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Frontend Engineer & Data Visualization Expert
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
            Building <span className="gradient-text">Data-Driven</span> Interfaces
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            I turn complex information into decisions through intuitive React applications and interactive visualizations.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="glass-panel text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Let's Talk
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Abstract Data Visualization Graphic */}
          <div className="glass-panel rounded-2xl p-6 aspect-square relative border-blue-500/20 shadow-2xl shadow-blue-900/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl" />
            <div className="h-full w-full flex flex-col justify-end gap-3 pb-8">
              {[40, 70, 45, 90, 65, 80, 50].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1, type: 'spring' }}
                  className="w-12 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md mx-auto"
                  style={{ display: 'inline-block', margin: '0 4px' }}
                />
              ))}
            </div>
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-panel p-4 rounded-xl flex items-center gap-3"
            >
              <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400"><BarChart2 /></div>
              <div>
                <p className="text-xs text-muted-foreground">Data Processing</p>
                <p className="text-sm font-bold text-white">Optimal</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
