import { motion } from 'framer-motion';
import { Filter, BarChart3, DatabaseZap } from 'lucide-react';

export default function DataThinking() {
  const steps = [
    {
      id: "01",
      title: "Data Acquisition & Structuring",
      icon: <DatabaseZap className="w-6 h-6 text-blue-400" />,
      desc: "Raw JSON/CSV inputs are parsed, normalized, and strictly typed before reaching the UI state.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: "02",
      title: "Transformation & Aggregation",
      icon: <Filter className="w-6 h-6 text-indigo-400" />,
      desc: "Applying algorithms to filter noise, group by dimensions, and calculate rolling averages or KPIs.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: "03",
      title: "Visual Narrative Output",
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      desc: "Mapping the refined data model to visual encodings (color, position, size) using React and charting libraries.",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="data-thinking" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="gradient-text">Data Thinking</span> Framework
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            How I approach transforming chaotic datasets into actionable interfaces.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative"
              >
                <div className="glass-panel p-8 rounded-2xl h-full border border-white/10 hover:border-blue-500/30 transition-colors group">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${step.color} bg-opacity-20 mb-6 shadow-lg`}>
                    <div className="bg-slate-900 w-13 h-13 rounded-lg flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="absolute top-8 right-8 text-5xl font-black text-white/5 pointer-events-none transition-transform group-hover:scale-110">
                    {step.id}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
