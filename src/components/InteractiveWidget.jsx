import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// Generate some dummy data
const generateData = () => {
  const data = [];
  let prev = 50;
  for (let i = 0; i < 20; i++) {
    prev += Math.random() * 20 - 10;
    data.push({
      time: i,
      value: Math.max(10, Math.min(90, prev)),
      metric2: Math.max(5, Math.min(60, prev - 20 + Math.random() * 15))
    });
  }
  return data;
};

export default function InteractiveWidget() {
  const [data, setData] = useState(generateData());
  const [activeMetric, setActiveMetric] = useState('value');

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1)];
        const lastVal = newData[newData.length - 1][activeMetric];
        
        const newEntry = {
          time: newData[newData.length - 1].time + 1,
          value: Math.max(10, Math.min(90, lastVal + (Math.random() * 20 - 10))),
          metric2: Math.max(5, Math.min(60, lastVal - 20 + (Math.random() * 15)))
        };
        return [...newData, newEntry];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [activeMetric]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Live <span className="gradient-text">Interactive</span> Visualization
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              This isn't a static image. It's a live, responsive Recharts instance demonstrating real-time data ingestion and rendering performance. Try switching the metrics to see the smooth transitions.
            </p>

            <div className="flex gap-4 mb-8">
              <button 
                onClick={() => setActiveMetric('value')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeMetric === 'value' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
              >
                Primary Metric
              </button>
              <button 
                onClick={() => setActiveMetric('metric2')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeMetric === 'metric2' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
              >
                Secondary Metric
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-6 rounded-2xl h-[400px] w-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={activeMetric === 'value' ? '#3b82f6' : '#6366f1'} stopOpacity={0.3}/>
                    <stop offset="95%" stopColor={activeMetric === 'value' ? '#3b82f6' : '#6366f1'} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="time" hide />
                <YAxis hide domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey={activeMetric} 
                  stroke={activeMetric === 'value' ? '#3b82f6' : '#6366f1'} 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                  animationDuration={500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
