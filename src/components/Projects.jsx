import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Activity, Map, PieChart } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "MausamTrek: Interactive Weather Insights",
      category: "Full Stack & Data Viz",
      icon: <Map className="w-5 h-5 text-blue-400" />,
      problem: "Standard weather apps show current conditions but fail to provide temporal insights or trend visualization for agricultural and travel planning.",
      approach: "Integrated multiple weather APIs, built a normalized data layer, and designed interactive time-series charts to visualize temperature fluctuations and precipitation probabilities.",
      tech: ["React.js", "Recharts", "OpenWeather API", "Tailwind CSS"],
      outcome: "A performant interface that reduces cognitive load when analyzing weekly weather patterns.",
      metrics: "Simulated 40% increase in user retention through interactive forecasting.",
      links: { github: "#", live: "#" }
    },
    {
      title: "DVA Analytics Capstone Dashboard",
      category: "Data Visualization",
      icon: <PieChart className="w-5 h-5 text-indigo-400" />,
      problem: "Complex multivariate datasets (like socio-economic indicators) are difficult to analyze through raw tables.",
      approach: "Developed a comprehensive dashboard with synchronized cross-filtering, allowing users to brush over one chart and see real-time updates across spatial and dimensional views.",
      tech: ["Next.js", "D3.js integration", "Framer Motion", "Context API"],
      outcome: "Transformed 10,000+ rows of raw CSV data into a digestible, narrative-driven interactive experience.",
      metrics: "Sub-100ms render times during complex dataset filtering.",
      links: { github: "#", live: "#" }
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of my best work, focusing on the intersection of data engineering and user experience design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="group glass-panel rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-2 text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                    {project.icon} {project.category}
                  </span>
                  <div className="flex gap-3">
                    <a href={project.links.github} className="text-muted-foreground hover:text-white transition-colors">
                      <GitBranch size={20} />
                    </a>
                    <a href={project.links.live} className="text-muted-foreground hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <strong className="text-slate-300 block mb-1 text-sm uppercase tracking-wider">The Problem</strong>
                    <p className="text-muted-foreground text-sm">{project.problem}</p>
                  </div>
                  <div>
                    <strong className="text-slate-300 block mb-1 text-sm uppercase tracking-wider">The Approach</strong>
                    <p className="text-muted-foreground text-sm">{project.approach}</p>
                  </div>
                  <div>
                    <strong className="text-slate-300 block mb-1 text-sm uppercase tracking-wider">The Outcome</strong>
                    <p className="text-muted-foreground text-sm">{project.outcome}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-emerald-400 bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
                  <Activity size={16} />
                  {project.metrics}
                </div>
              </div>
              
              <div className="bg-black/40 p-6 border-t border-white/10 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-slate-300 bg-white/5 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
