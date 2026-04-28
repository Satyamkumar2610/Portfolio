import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeWriter } from '../components/TypeWriter';

export function Contact() {
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);
  const [showLine4, setShowLine4] = useState(false);

  return (
    <section className="py-32 bg-black min-h-[60vh] flex items-center justify-center">
      <div className="text-editorial font-mono text-sm md:text-base leading-loose w-full">
        <div className="space-y-2">
          <div className="flex gap-4">
            <span className="text-sky select-none">{'>'}</span>
            <TypeWriter 
              text="Let's build something worth looking at." 
              onComplete={() => setShowLine2(true)} 
            />
          </div>

          {showLine2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
              <span className="text-sky select-none">{'>'}</span>
              <a href="mailto:satyam.kumars2024@nst.rishihood.edu.in" className="hover:text-sky transition-colors underline decoration-sky/30">
                <TypeWriter 
                  text="satyam.kumars2024@nst.rishihood.edu.in" 
                  delay={30}
                  onComplete={() => setShowLine3(true)}
                />
              </a>
            </motion.div>
          )}

          {showLine3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
              <span className="text-sky select-none">{'>'}</span>
              <a href="https://github.com/Satyamkumar2610" target="_blank" rel="noreferrer" className="hover:text-sky transition-colors underline decoration-sky/30">
                <TypeWriter 
                  text="github.com/Satyamkumar2610" 
                  delay={30}
                  onComplete={() => setShowLine4(true)}
                />
              </a>
            </motion.div>
          )}

          {showLine4 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
              <span className="text-sky select-none">{'>'}</span>
              <a href="https://linkedin.com/in/satyam-kumar-a9886532b" target="_blank" rel="noreferrer" className="hover:text-sky transition-colors underline decoration-sky/30">
                <TypeWriter 
                  text="linkedin.com/in/satyam-kumar-a9886532b" 
                  delay={30}
                />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
