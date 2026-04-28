import { motion, AnimatePresence } from 'framer-motion';
import { useScrollStep } from '../hooks/useScrollStep';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Annotation } from '../components/Annotation';

const steps = [
  {
    id: 0,
    title: "The Raw Signal",
    text: "Every time you check the weather, this is what your phone receives. No labels. No context. Just numbers and keys."
  },
  {
    id: 1,
    title: "The Messy Middle",
    text: "The real work in data visualization isn't the chart. It's the 40 minutes before the chart spent cleaning missing values and duplicates."
  },
  {
    id: 2,
    title: "The Decision",
    text: "Every visualization decision starts as a question. Why aggregate by day, not hour? Because the question is 'will it rain today?'"
  },
  {
    id: 3,
    title: "The Translation",
    text: "I chose bar over line deliberately. These are separate events across a 7-day period, not a sequence where a line would imply a continuous trend."
  }
];

const mockJSON = `{
  "lat": 28.99, "lon": 77.01,
  "daily": [
    { "dt": 1714371600, "temp": 32.4 },
    { "dt": 1714458000, "temp": 34.1 },
    ...
  ]
}`;

const chartData = [
  { name: 'Mon', value: 32 },
  { name: 'Tue', value: 34 },
  { name: 'Wed', value: 35 },
  { name: 'Thu', value: 38 },
  { name: 'Fri', value: 37 },
  { name: 'Sat', value: 33 },
  { name: 'Sun', value: 32 },
];

export function DataPipeline() {
  const { activeStep, containerRef } = useScrollStep(0.6);

  return (
    <section ref={containerRef} className="relative flex flex-col md:flex-row">
      {/* Left: Sticky Visualization Panel */}
      <div className="md:sticky top-0 h-[50vh] md:h-screen w-full md:w-1/2 flex items-center justify-center p-6 bg-bg z-10">
        <AnimatePresence mode="wait">
          {activeStep === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-md p-6 bg-black/40 border border-ink/20 rounded font-mono text-[10px] text-sky leading-relaxed"
            >
              <pre>{mockJSON}</pre>
            </motion.div>
          )}

          {activeStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-md"
            >
              <div className="border border-ink/20 rounded overflow-hidden">
                <table className="w-full text-xs font-mono">
                  <thead>
                    <tr className="bg-ink/10 border-b border-ink/20 text-ink">
                      <th className="p-2 text-left">Timestamp</th>
                      <th className="p-2 text-left">Metric</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-ink/10">
                      <td className="p-2">1714371600</td>
                      <td className="p-2 text-amber bg-amber/5">NULL_VALUE</td>
                    </tr>
                    <tr className="border-b border-ink/10">
                      <td className="p-2">1714458000</td>
                      <td className="p-2">34.1</td>
                    </tr>
                    <tr className="bg-amber/10">
                      <td className="p-2">1714458000</td>
                      <td className="p-2">34.1 (DUP)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeStep >= 2 && (
            <motion.div
              key="step2-3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full h-64 relative"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" hide />
                  <YAxis hide domain={[0, 40]} />
                  <Bar 
                    dataKey="value" 
                    fill={activeStep === 3 ? "#4f7fff" : "#8888aa"} 
                    radius={[2, 2, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
              
              {activeStep === 3 && (
                <Annotation 
                  x="60%" y="20%" 
                  text="Bar = Comparison choice" 
                  direction="right" 
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right: Scrolling Text Content */}
      <div className="w-full md:w-1/2 px-6 md:px-12 py-24 space-y-[40vh]">
        {steps.map((step) => (
          <div 
            key={step.id} 
            data-step={step.id}
            className={`step-content ${activeStep === step.id ? 'active' : ''}`}
          >
            <span className="font-mono text-ink text-xs mb-4 block uppercase tracking-widest">
              Step {step.id + 1}
            </span>
            <h2 className="text-3xl mb-6 text-paper">{step.title}</h2>
            <p className="text-lg text-ink font-light leading-relaxed">
              {step.text}
            </p>
          </div>
        ))}
        <div className="h-[20vh]" /> {/* Bottom buffer */}
      </div>
    </section>
  );
}
