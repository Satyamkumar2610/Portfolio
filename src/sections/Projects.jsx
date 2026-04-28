import { GitBranch, Map, Database, Zap, Globe } from 'lucide-react';

export function Projects() {
  return (
    <section className="py-32 bg-bg border-y border-ink/10">
      <div className="text-editorial space-y-48">
        
        {/* Project 1: I-ASCAP */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="space-y-4">
              <span className="font-mono text-sky text-xs uppercase tracking-widest bg-sky/10 px-2 py-1 rounded">Flagship Project</span>
              <h2 className="text-4xl md:text-6xl">I-ASCAP: Geospatial <span className="italic text-sky">Intelligence</span> for India.</h2>
              <p className="font-mono text-ink text-sm uppercase tracking-widest">Agricultural Socio-economic & Climate Analysis Platform</p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/Satyamkumar2610/I-ASCAP" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink hover:text-sky transition-colors">
                <GitBranch size={16} /> Repository
              </a>
              <a href="https://i-ascap.vercel.app" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-amber hover:text-amber/80 transition-colors">
                <Globe size={16} /> View Live ↗
              </a>
            </div>
          </div>

          <div className="w-full bg-black/40 border border-ink/10 rounded-xl overflow-hidden relative aspect-video flex items-center justify-center group">
             <div className="absolute inset-0 bg-gradient-to-br from-sky/5 to-transparent pointer-events-none" />
             <div className="flex flex-col items-center gap-4 text-center p-12">
                <Map size={48} className="text-sky/40" />
                <p className="font-mono text-xs text-ink max-w-sm">
                   [Visualization: High-resolution Mapbox GL JS engine rendering longitudinal district-level data layers]
                </p>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-6">
              <h3 className="text-2xl text-paper">The Spatio-Temporal Problem</h3>
              <p className="text-ink leading-relaxed font-light">
                Indian agricultural data spanning 1966–2024 is effectively fragmented by <span className="text-paper">399+ district boundary changes</span>. 
                Longitudinal analysis is impossible when the spatial units of 1966 don't match 2024.
              </p>
              <div className="p-4 bg-amber/5 border-l-2 border-amber italic text-sm text-amber/90">
                "We didn't just build a map. We built a time-machine for Indian agriculture."
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl text-paper">The Engineering Solution</h3>
              <p className="text-ink leading-relaxed font-light">
                Developed the <span className="text-sky font-medium">DistrictHarmonizer Engine</span> using area-ratio apportionment. 
                I resolved boundary conflicts across 6 decades to create a unified longitudinal dataset.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-xs font-mono text-ink">
                  <Database size={14} className="text-sky" /> PostGIS spatial joins for area-ratio disaggregation
                </li>
                <li className="flex items-center gap-3 text-xs font-mono text-ink">
                  <Zap size={14} className="text-sky" /> FastAPI streaming endpoints for real-time aggregation
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project 2: Amazon Sales */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl">Executive metrics at a glance. No <span className="italic text-sky">noise.</span></h2>
            <p className="font-mono text-ink text-sm uppercase tracking-widest">Project 02: Amazon Sales Dashboard</p>
          </div>

          <div className="w-full bg-black/20 border border-ink/10 rounded-xl overflow-hidden relative group" style={{ height: '650px' }}>
             <div className="absolute top-0 right-0 p-4 z-10 opacity-10 group-hover:opacity-100 transition-opacity">
                <a href="https://github.com/Satyamkumar2610/Amazon_Sales" target="_blank" rel="noreferrer" className="bg-bg/80 backdrop-blur-sm p-2 rounded flex items-center gap-2 text-paper text-xs font-mono uppercase">
                  <GitBranch size={14} /> Repository
                </a>
             </div>
             <iframe 
                src="https://public.tableau.com/views/AmazonSalesDashboard_17774041556170/Executivespage?:showVizHome=no&:embed=true"
                width="100%" 
                height="100%" 
                frameBorder="0"
                className="opacity-90 hover:opacity-100 transition-opacity duration-500"
                title="Amazon Sales Dashboard"
             />
          </div>

          <div className="max-w-2xl mx-auto italic text-ink border-l-2 border-sky pl-6 py-2">
            "The challenge with sales data isn't calculating the revenue. It's figuring out exactly which metric an executive needs to see in the first three seconds."
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-2">
              <h4 className="font-mono text-[10px] uppercase text-sky tracking-widest">Platform</h4>
              <p className="text-xs text-ink">Tableau Public with interactive filtering.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-mono text-[10px] uppercase text-sky tracking-widest">Objective</h4>
              <p className="text-xs text-ink">Consolidate multi-regional Amazon sales into actionable KPI scorecards.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-mono text-[10px] uppercase text-sky tracking-widest">Data Transformation</h4>
              <p className="text-xs text-ink">Cleaned raw CSV exports to align date schemas and normalize currency formats.</p>
            </div>
          </div>
        </div>

        {/* Project 3: Car Details */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl">Translating specifications into <span className="italic text-amber">insights.</span></h2>
            <p className="font-mono text-ink text-sm uppercase tracking-widest">Project 03: Car Details Analytics</p>
          </div>

          <div className="w-full bg-black/20 border border-ink/10 rounded-xl overflow-hidden relative group" style={{ height: '650px' }}>
             <div className="absolute top-0 right-0 p-4 z-10 opacity-10 group-hover:opacity-100 transition-opacity">
                <a href="https://github.com/Satyamkumar2610/Car_Details/tree/main" target="_blank" rel="noreferrer" className="bg-bg/80 backdrop-blur-sm p-2 rounded flex items-center gap-2 text-paper text-xs font-mono uppercase">
                  <GitBranch size={14} /> Repository
                </a>
             </div>
             <iframe 
                src="https://public.tableau.com/views/CarDetails_17774049445870/CARDETAILS?:showVizHome=no&:embed=true"
                width="100%" 
                height="100%" 
                frameBorder="0"
                className="opacity-90 hover:opacity-100 transition-opacity duration-500"
                title="Car Details Dashboard"
             />
          </div>

          <p className="text-lg text-paper leading-relaxed">
             A dashboard is a machine for answering questions. In this project, I mapped thousands of vehicle specifications into a cohesive visual structure, allowing the user to filter by dimensions that actually matter to buyers (like mileage and price bands) rather than raw engineering metrics.
          </p>
        </div>

      </div>
    </section>
  );
}

