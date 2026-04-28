import { motion } from 'framer-motion';
import { Database, Layout, Code2 } from 'lucide-react';

export default function About() {
  const thoughts = [
    {
      icon: <Database className="w-6 h-6 text-blue-400" />,
      title: "Data as a Narrative",
      desc: "Raw data is overwhelming. I believe in structuring messy datasets to uncover the story hidden beneath the numbers."
    },
    {
      icon: <Layout className="w-6 h-6 text-indigo-400" />,
      title: "Design as a Tool",
      desc: "A powerful backend is useless with a confusing interface. I bridge the gap by designing intuitive, empathetic user experiences."
    },
    {
      icon: <Code2 className="w-6 h-6 text-purple-400" />,
      title: "Engineering for Scale",
      desc: "From complex state management to optimized React renders, I build architectures that are robust, maintainable, and fast."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The <span className="gradient-text">Journey</span> from Data to Decisions
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                As a developer based in India, I've always been fascinated by how information shapes our reality. But raw data alone doesn't solve problems—insight does.
              </p>
              <p>
                My engineering philosophy is simple: <strong className="text-white">Build tools that make complex data accessible.</strong> Whether I'm parsing meteorological datasets for <span className="text-blue-400">MausamTrek</span> or structuring complex analytical dashboards, I focus on the intersection of robust backend logic and elegant frontend design.
              </p>
              <p>
                I don't just build UI components; I engineer systems that communicate metrics effectively, ensuring that every user interaction feels purposeful and informed.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {thoughts.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-panel p-6 rounded-2xl hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
