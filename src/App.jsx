import { Opening } from './sections/Opening';
import { DataPipeline } from './sections/DataPipeline';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { About } from './sections/About';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="bg-bg text-paper selection:bg-sky/20">
      <Opening />
      <DataPipeline />
      <Projects />
      <Skills />
      <About />
      <Contact />
      
      <footer className="py-12 bg-black border-t border-ink/5 flex justify-center">
        <p className="font-mono text-[8px] uppercase tracking-widest text-ink/40">
          Built with React & Recharts · {new Date().getFullYear()} Satyam Kumar
        </p>
      </footer>
    </div>
  );
}

export default App;
