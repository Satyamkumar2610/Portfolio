import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Data Visualization & Analytics",
      skills: ["Recharts", "D3.js basics", "Chart.js", "Data Cleaning", "KPI Dashboards", "REST APIs"]
    },
    {
      title: "Frontend Engineering",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "State Management"]
    },
    {
      title: "Tools & Ecosystem",
      skills: ["Git & GitHub", "Vite", "Node.js", "Express", "MongoDB", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[500px] bg-indigo-900/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Technical <span className="gradient-text">Arsenal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A curated stack focused on building performant, visually rich web applications.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl border-t-4 border-t-blue-500/50 hover:border-t-blue-400 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-blue-500/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
