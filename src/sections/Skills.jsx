import { motion } from 'framer-motion';
import { Database, Brain, Globe, Code } from 'lucide-react';

const skillGroups = [
  {
    title: "Geospatial & Data Engineering",
    icon: <Database className="text-sky" size={24} />,
    skills: ["Python (Pandas, GeoPandas)", "PostgreSQL / PostGIS", "SQL", "I-ASCAP Data Pipelines", "Spatial Temporal Analysis"]
  },
  {
    title: "ML / AI & Analytics",
    icon: <Brain className="text-amber" size={24} />,
    skills: ["LangGraph (ReAct Agents)", "ChromaDB (RAG)", "Random Forest", "Groq API", "Inference Optimization"]
  },
  {
    title: "Full Stack & GIS UI",
    icon: <Globe className="text-sky" size={24} />,
    skills: ["Next.js 14 (App Router)", "FastAPI", "Mapbox GL JS", "Tailwind CSS", "REST / Streaming APIs"]
  },
  {
    title: "Tools & Infrastructure",
    icon: <Code className="text-ink" size={24} />,
    skills: ["Git / GitHub", "Docker", "Postman", "Linux", "VS Code"]
  }
];

export function Skills() {
  return (
    <section className="py-32 bg-bg relative border-t border-ink/10">
      <div className="text-editorial mb-20">
        <h2 className="text-4xl md:text-5xl mb-6 font-serif">Technical <span className="italic">Expertise</span></h2>
        <p className="text-ink max-w-lg leading-relaxed font-light">
          A specialized stack focused on the intersection of geospatial engineering, 
          machine learning, and high-performance data infrastructure.
        </p>
      </div>

      <div className="text-editorial grid md:grid-cols-2 gap-x-16 gap-y-12">
        {skillGroups.map((group, i) => (
          <motion.div 
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              {group.icon}
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-paper">{group.title}</h3>
            </div>
            
            <ul className="space-y-3 border-l border-ink/20 pl-6">
              {group.skills.map(skill => (
                <li key={skill} className="text-sm text-ink hover:text-paper transition-colors cursor-default">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 border-y border-ink/5 py-12">
         <p className="text-center font-mono text-[10px] text-ink/40 uppercase tracking-[0.5em]">
           Actively Building Research-Grade Open Data Systems
         </p>
      </div>
    </section>
  );
}
