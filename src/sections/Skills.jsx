import { motion } from 'framer-motion';

const skills = [
  { name: 'React', size: 120, cluster: 'frontend', x: 20, y: 30 },
  { name: 'JavaScript', size: 100, cluster: 'frontend', x: 45, y: 20 },
  { name: 'Tailwind', size: 90, cluster: 'frontend', x: 25, y: 55 },
  { name: 'REST APIs', size: 85, cluster: 'frontend', x: 50, y: 45 },
  { name: 'Recharts', size: 130, cluster: 'data', x: 75, y: 35 },
  { name: 'Chart.js', size: 80, cluster: 'data', x: 70, y: 60 },
  { name: 'Data Cleaning', size: 110, cluster: 'data', x: 85, y: 55 },
  { name: 'Git', size: 70, cluster: 'tools', x: 50, y: 80 },
  { name: 'Postman', size: 65, cluster: 'tools', x: 35, y: 85 },
  { name: 'Figma', size: 75, cluster: 'tools', x: 65, y: 85 },
];

const clusterColors = {
  frontend: 'border-sky text-sky bg-sky/5',
  data: 'border-amber text-amber bg-amber/5',
  tools: 'border-ink text-ink bg-ink/5'
};

export function Skills() {
  return (
    <section className="py-32 relative overflow-hidden bg-bg">
      <div className="text-editorial mb-24">
        <h2 className="text-4xl md:text-5xl mb-6">Technical <span className="italic">Taxonomy</span></h2>
        <p className="text-ink max-w-lg leading-relaxed">
          Instead of a list, I view my skills as a constellation of related tools. 
          The size represents my relative familiarity and the time I spend in that environment.
        </p>
      </div>

      <div className="relative w-full aspect-[4/3] md:aspect-[21/9] max-w-7xl mx-auto px-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, type: 'spring', damping: 15 }}
            whileHover={{ scale: 1.1, zIndex: 50 }}
            className={`absolute rounded-full border flex items-center justify-center p-4 text-center cursor-default transition-shadow hover:shadow-[0_0_30px_rgba(79,127,255,0.2)] ${clusterColors[skill.cluster]}`}
            style={{
              width: skill.size,
              height: skill.size,
              left: `${skill.x}%`,
              top: `${skill.y}%`,
            }}
          >
            <span className="font-mono text-[10px] font-medium uppercase tracking-tight">
              {skill.name}
            </span>
          </motion.div>
        ))}

        {/* Legend */}
        <div className="absolute bottom-0 right-6 flex flex-col gap-2">
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full border border-sky bg-sky/5" />
              <span className="font-mono text-[8px] uppercase tracking-widest text-ink">Frontend Engineering</span>
           </div>
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full border border-amber bg-amber/5" />
              <span className="font-mono text-[8px] uppercase tracking-widest text-ink">Data Visualization</span>
           </div>
           <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full border border-ink bg-ink/5" />
              <span className="font-mono text-[8px] uppercase tracking-widest text-ink">Tools & Design</span>
           </div>
        </div>
      </div>

      <div className="text-editorial mt-24">
        <p className="font-mono text-[10px] text-ink uppercase tracking-[0.2em] text-center italic">
          Size = familiarity. Not a claim. Just a direction.
        </p>
      </div>
    </section>
  );
}
