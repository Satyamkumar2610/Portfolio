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
              "I build the infrastructure that helps us <span className="text-sky">understand the ground</span> we stand on."
            </motion.h2>
            
            <div className="w-24 h-[1px] bg-sky mb-12" />
          </div>

          <div className="w-full md:w-2/5 border-l border-ink/20 pl-8 space-y-8">
            <div className="space-y-4">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-sky">The Motivation</h3>
              <p className="text-sm text-ink leading-relaxed font-light">
                I am a Data Engineer and ML Developer obsessed with resolving the fragmentation of Indian agricultural data. I believe that open-access, harmonized geospatial data is the fundamental layer for climate resilience and farm productivity.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-sky">Technical Philosophy</h3>
              <p className="text-sm text-ink leading-relaxed font-light">
                I don't just build dashboards; I build engines. Whether it's the DistrictHarmonizer resolving boundary conflicts or LangGraph ReAct agents providing farm advice, my focus is on turning noisy historical datasets into high-fidelity intelligence.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-sky">Current Mission</h3>
              <p className="text-sm text-ink leading-relaxed font-light">
                Currently scaling I-ASCAP to serve as a research-grade platform for the Indian agriculture community, leveraging PostGIS for spatial temporal analysis and FastAPI for high-performance data delivery.
              </p>
            </div>

            <div className="pt-8">
              <p className="font-mono text-[9px] text-ink/60 uppercase tracking-widest">
                📍 Sonipat, Haryana · Open to Global Opportunities
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
