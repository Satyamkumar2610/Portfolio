import { motion } from 'framer-motion';
import { useWeather } from '../hooks/useWeather';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Cloud, Sun, Droplets, Wind, GitBranch } from 'lucide-react';

export function Projects() {
  const { weather, loading } = useWeather();

  return (
    <section className="py-32 bg-bg border-y border-ink/10">
      <div className="text-editorial space-y-32">
        
        {/* Project 1: MausamTrek */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl">Weather apps show you data. This one helps you <span className="italic text-sky">decide.</span></h2>
            <p className="font-mono text-ink text-sm uppercase tracking-widest">Project 01: MausamTrek</p>
          </div>

          <div className="bg-black/20 border border-ink/10 p-8 rounded-xl max-w-md mx-auto relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <a href="https://github.com/Satyamkumar2610" target="_blank" rel="noreferrer" className="text-paper"><GitBranch size={20} /></a>
             </div>
             
             {loading ? (
               <div className="h-48 flex items-center justify-center font-mono text-ink animate-pulse">Fetching Sonipat.os...</div>
             ) : (
               <div className="space-y-6">
                 <div className="flex justify-between items-start">
                   <div>
                     <p className="font-mono text-[10px] text-ink uppercase">Location: Sonipat, IN</p>
                     <h3 className="text-4xl font-serif mt-1">{weather.current.temp}°C</h3>
                   </div>
                   <div className="text-sky">
                     {weather.current.weather[0].main === 'Clear' ? <Sun size={32} /> : <Cloud size={32} />}
                   </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-ink">
                      <Droplets size={14} className="text-sky" /> {weather.current.humidity}% Humidity
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-ink">
                      <Wind size={14} className="text-sky" /> {weather.current.wind_speed} km/h
                    </div>
                 </div>

                 <div className="h-16 w-full pt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={weather.daily}>
                        <Line type="monotone" dataKey="temp.day" stroke="#4f7fff" strokeWidth={1} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                    <p className="text-[8px] font-mono text-ink uppercase mt-2 text-center">Next 7 days trend curve</p>
                 </div>
               </div>
             )}
          </div>

          <div className="max-w-2xl mx-auto italic text-ink border-l-2 border-sky pl-6 py-2">
            "The original question wasn't 'what is the humidity?' It was 'should I carry an umbrella?' Most weather apps answer the wrong question."
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-2">
              <h4 className="font-mono text-[10px] uppercase text-sky tracking-widest">Data Source</h4>
              <p className="text-xs text-ink">OpenWeatherMap API via asynchronous REST hooks with localized caching.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-mono text-[10px] uppercase text-sky tracking-widest">Design Decisions</h4>
              <p className="text-xs text-ink">Prioritized 'feels-like' temperature over raw numbers to map closely to human experience.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-mono text-[10px] uppercase text-sky tracking-widest">The Evolution</h4>
              <p className="text-xs text-ink">Moving toward geospatial heatmaps to visualize the Sonipat humidity bubble.</p>
            </div>
          </div>
        </div>

        {/* Project 2: Mausam Darshan */}
        <div className="space-y-12">
           <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl">Seven days of weather data. One page. <span className="italic text-amber">Zero confusion.</span></h2>
            <p className="font-mono text-ink text-sm uppercase tracking-widest">Project 02: Mausam Darshan</p>
          </div>

          <div className="w-full h-80 bg-black/10 border border-ink/5 p-6 relative">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weather?.daily || []}>
                <XAxis dataKey="dt" hide />
                <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
                <Line 
                  type="stepAfter" 
                  dataKey="temp.day" 
                  stroke="#f7c948" 
                  strokeWidth={2}
                  animationDuration={2000}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
              <Sun size={120} className="text-amber" />
            </div>
          </div>

          <p className="text-lg text-paper leading-relaxed">
             I chose a <span className="text-amber font-medium">stepped line chart</span> here — unlike MausamTrek's smooth curves — because this project was about visualizing discrete daily peaks. A smooth line would imply a constant change, whereas weather readings are often recorded at static intervals.
          </p>
          
          <div className="flex justify-end">
            <a href="https://github.com/Satyamkumar2610" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink hover:text-sky transition-colors">
              Code Documentation <GitBranch size={12} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
