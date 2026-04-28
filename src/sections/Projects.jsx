import { GitBranch } from 'lucide-react';

export function Projects() {

  return (
    <section className="py-32 bg-bg border-y border-ink/10">
      <div className="text-editorial space-y-40">
        
        {/* Project 1: Amazon Sales */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl">Executive metrics at a glance. No <span className="italic text-sky">noise.</span></h2>
            <p className="font-mono text-ink text-sm uppercase tracking-widest">Project 01: Amazon Sales Dashboard</p>
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

        {/* Project 2: Car Details */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl">Translating specifications into <span className="italic text-amber">insights.</span></h2>
            <p className="font-mono text-ink text-sm uppercase tracking-widest">Project 02: Car Details Analytics</p>
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
