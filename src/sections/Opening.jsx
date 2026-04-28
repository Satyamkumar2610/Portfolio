import { motion } from 'framer-motion';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { Mail, GitBranch, MapPin } from 'lucide-react';

const mockDisaggregationData = [
  { year: 1966, value: 320 },
  { year: 1980, value: 350 },
  { year: 1995, value: 399 },
  { year: 2010, value: 450 },
  { year: 2024, value: 512 },
];

export function Opening() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative bg-bg pt-20">
      
      {/* Personal Info First */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-center px-6 w-full max-w-5xl z-10"
      >
        <div className="flex items-center justify-center gap-4 mb-6 text-sm font-mono text-sky tracking-widest uppercase font-bold">
          <span>Satyam Kumar</span>
          <span className="w-1 h-1 bg-sky rounded-full"></span>
          <span className="flex items-center gap-1"><MapPin size={14} /> Sonipat, India</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl leading-tight mb-8">
          Geospatial Engineering & AI for <span className="text-amber italic">Indian Agriculture.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-ink font-light leading-relaxed max-w-3xl mx-auto mb-12">
          I build engines that turn noisy historical datasets into <span className="text-paper font-medium">high-fidelity intelligence</span>. 
          Creator of I-ASCAP.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a href="mailto:satyam.kumars2024@nst.rishihood.edu.in" className="flex items-center gap-2 px-8 py-3 bg-sky text-white rounded font-medium hover:bg-sky/90 transition-colors">
            <Mail size={18} /> Contact Satyam
          </a>
          <a href="https://github.com/Satyamkumar2610" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-3 border border-ink/30 text-paper rounded font-medium hover:bg-white/5 transition-colors">
            <GitBranch size={18} /> GitHub Profile
          </a>
        </div>
      </motion.div>

      {/* Geospatial Data Visualization */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="w-full max-w-5xl h-64 px-6 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none" />
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockDisaggregationData}>
            <defs>
              <linearGradient id="colorSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f7fff" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#4f7fff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="stepAfter" 
              dataKey="value" 
              stroke="#4f7fff" 
              strokeWidth={1.5}
              fillOpacity={1} 
              fill="url(#colorSky)"
              animationDuration={2500}
            />
          </AreaChart>
        </ResponsiveContainer>
        <p className="text-center font-mono text-ink/60 mt-4 text-[10px] tracking-widest uppercase relative z-20">
          Longitudinal District-Level Disaggregation (1966—2024)
        </p>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[9px] text-ink uppercase tracking-widest"
      >
        ↓ explore the portfolio
      </motion.div>
    </section>
  );
}
