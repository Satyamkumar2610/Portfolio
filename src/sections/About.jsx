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
              "I got interested in data visualization because I realized that <span className="text-sky">picking the wrong chart type</span> is the same as lying."
            </motion.h2>
            
            <div className="w-24 h-[1px] bg-sky mb-12" />
          </div>

          <div className="w-full md:w-2/5 border-l border-ink/20 pl-8 space-y-8">
            <div className="space-y-4">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-sky">01. Origin</h3>
              <p className="text-sm text-ink leading-relaxed">
                Based in Sonipat, Haryana, I started as a developer who just wanted to build pretty interfaces. But as I dove into the DVA curriculum, I realized that beauty is secondary to clarity. If the data is hidden, the design has failed.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-sky">02. Process</h3>
              <p className="text-sm text-ink leading-relaxed">
                My workflow is 70% cleaning and 30% rendering. I spend my mornings in VS Code and Postman, ensuring the JSON objects are lean and the schemas are strict, before I ever open a charting library.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-sky">03. Direction</h3>
              <p className="text-sm text-ink leading-relaxed">
                I'm currently building toward geospatial visualization—mapping real-world Indian data to identify patterns in weather, agriculture, and urban growth.
              </p>
            </div>

            <div className="pt-8">
              <p className="font-mono text-[9px] text-ink/60 uppercase tracking-tighter">
                📍 Sonipat, Haryana · Student, DVA · Building since 2023
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
