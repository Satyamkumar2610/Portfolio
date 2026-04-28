import { motion } from 'framer-motion';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const mockData = [
  { day: 'Mon', temp: 32 },
  { day: 'Tue', temp: 34 },
  { day: 'Wed', temp: 35 },
  { day: 'Thu', temp: 38 },
  { day: 'Fri', temp: 37 },
  { day: 'Sat', temp: 33 },
  { day: 'Sun', temp: 32 },
];

export function Opening() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative bg-bg">
      <div className="w-full max-w-3xl h-64 mb-12">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockData}>
            <defs>
              <linearGradient id="colorSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f7fff" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#4f7fff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="temp" 
              stroke="#4f7fff" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorSky)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center font-mono text-ink mt-4 text-xs tracking-widest uppercase"
        >
          What does weather feel like as data?
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="text-center px-6"
      >
        <p className="font-mono text-sky mb-4 text-sm">
          I'm Satyam. I turn this ↑ into interfaces people actually understand.
        </p>
        <h1 className="text-4xl md:text-6xl max-w-4xl leading-tight">
          Data doesn't speak for itself.<br />
          Someone has to <span className="text-amber italic">translate</span> it.
        </h1>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 font-mono text-[10px] text-ink uppercase tracking-tighter"
      >
        ↓ scroll the story
      </motion.div>
    </section>
  );
}
