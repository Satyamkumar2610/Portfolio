import { motion } from 'framer-motion';

export function Annotation({ x, y, text, direction = 'right' }) {
  const isRight = direction === 'right';
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: isRight ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="absolute z-20 pointer-events-none"
      style={{ top: y, left: x }}
    >
      <div className={`flex items-center gap-3 ${isRight ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="w-12 h-[1px] bg-ink/50 relative">
          <div className={`absolute top-0 ${isRight ? 'left-0' : 'right-0'} w-1 h-1 bg-ink rounded-full -translate-y-1/2`} />
        </div>
        <div className="annotation-label whitespace-nowrap bg-bg/80 px-2 py-1 backdrop-blur-sm border border-ink/20">
          {text}
        </div>
      </div>
    </motion.div>
  );
}
