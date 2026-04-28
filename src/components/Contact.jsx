import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-12 md:p-20 rounded-3xl relative overflow-hidden border-blue-500/20"
        >
          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[100px] pointer-events-none" />
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
            Let's build something <span className="gradient-text">meaningful.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto relative z-10">
            Whether it's a data-heavy dashboard, a complex React application, or you just want to talk about data visualization.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a 
              href="mailto:satyam.kumars2024@nst.rishihood.edu.in" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all flex items-center gap-3 w-full sm:w-auto justify-center hover:scale-105"
            >
              <Mail size={20} />
              Say Hello
            </a>
            <a 
              href="https://www.linkedin.com/in/satyam-kumar-a9886532b/" 
              target="_blank" 
              rel="noreferrer"
              className="glass-panel text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all flex items-center gap-2 w-full sm:w-auto justify-center hover:scale-105"
            >
              LinkedIn <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
