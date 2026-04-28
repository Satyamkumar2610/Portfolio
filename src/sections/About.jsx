import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="py-32 bg-bg relative">
      <div className="text-editorial">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <div className="w-full md:w-3/5">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl leading-[1.1] text-paper mb-12"
            >
              "I build interfaces that help us <span className="text-sky">see the story</span> hidden in the numbers."
            </motion.h2>
            
            <div className="w-24 h-[1px] bg-sky mb-12" />
          </div>

          <div className="w-full md:w-2/5 border-l border-ink/20 pl-8 space-y-8">
            <div className="space-y-4">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-sky">The Focus</h3>
              <p className="text-sm text-ink leading-relaxed font-light">
                I am a Data Visualization expert and Analyst based in Sonipat. I specialize in taking fragmented datasets—from agricultural records to executive sales logs—and synthesizing them into clear, actionable visual narratives.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-sky">Visual Philosophy</h3>
              <p className="text-sm text-ink leading-relaxed font-light">
                For me, a chart isn't just a graphic; it's a decision-making tool. I focus on selecting the right visual encoding to answer the specific question at hand, whether that's mapping 60 years of crop trends or identifying sales anomalies.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-sky">DVA Journey</h3>
              <p className="text-sm text-ink leading-relaxed font-light">
                As a student of DVA at Newton School of Technology, I'm constantly exploring the intersection of data engineering and design, building projects like I-ASCAP to solve real-world information clarity problems.
              </p>
            </div>

            <div className="pt-8">
              <p className="font-mono text-[9px] text-ink/60 uppercase tracking-widest">
                📍 Sonipat, Haryana · DVA Scholar · Building since 2023
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
