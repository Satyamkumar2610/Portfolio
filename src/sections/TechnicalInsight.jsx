import { motion } from 'framer-motion';
import { Layers, RotateCcw, Scale } from 'lucide-react';

export function TechnicalInsight() {
  return (
    <section className="py-32 bg-black/40 border-y border-sky/10 overflow-hidden">
      <div className="text-editorial">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2 space-y-8">
            <span className="font-mono text-amber text-[10px] uppercase tracking-[0.3em] font-bold">
              Technical Deep-Dive
            </span>
            <h2 className="text-4xl md:text-6xl leading-tight">
              The <span className="text-sky italic">DistrictHarmonizer</span> Engine.
            </h2>
            <p className="text-lg text-ink font-light leading-relaxed">
              When Indian districts split (e.g., Sonipat splitting from Rohtak in 1972), 
              historical data is "trapped" in the parent district's records. 
            </p>
            <p className="text-lg text-ink font-light leading-relaxed">
              I built a custom <span className="text-paper">area-ratio apportionment engine</span> that 
              dynamically disaggregates historical yield data into current boundaries with 
              spatial precision, resolving <span className="text-amber">399+ boundary transitions</span>.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
               <div className="space-y-2">
                 <div className="flex items-center gap-2 text-sky">
                   <Layers size={16} /> <span className="font-mono text-[10px] uppercase font-bold">PostGIS</span>
                 </div>
                 <p className="text-xs text-ink/60">Intersectional spatial joins for polygon overlap analysis.</p>
               </div>
               <div className="space-y-2">
                 <div className="flex items-center gap-2 text-sky">
                   <Scale size={16} /> <span className="font-mono text-[10px] uppercase font-bold">Area-Ratio</span>
                 </div>
                 <p className="text-xs text-ink/60">Statistical apportionment across temporal slices.</p>
               </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative flex justify-center">
             <div className="relative w-64 h-64 border border-ink/20 rounded-full flex items-center justify-center animate-pulse">
                <div className="absolute inset-4 border border-sky/20 rounded-full" />
                <div className="absolute inset-12 border border-amber/20 rounded-full" />
                <RotateCcw className="text-sky/40 animate-spin-slow" size={48} />
             </div>
             
             <div className="absolute -bottom-4 font-mono text-[8px] text-ink/40 uppercase tracking-widest text-center">
                Spatio-Temporal Harmonization Loop
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
