import { Opening } from './sections/Opening';
import { Projects } from './sections/Projects';
import { TechnicalInsight } from './sections/TechnicalInsight';
import { Skills } from './sections/Skills';
import { About } from './sections/About';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="bg-bg text-paper selection:bg-sky/20">
      <Opening />
      
      <div id="projects">
        <Projects />
      </div>

      <TechnicalInsight />
      
      <div id="skills">
        <Skills />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="contact">
        <Contact />
      </div>
      
      <footer className="py-12 bg-black border-t border-ink/5 flex justify-center">
        <p className="font-mono text-[8px] uppercase tracking-widest text-ink/40">
          Geospatial ML & Data Engineering · {new Date().getFullYear()} Satyam Kumar
        </p>
      </footer>
    </div>
  );
}

export default App;
