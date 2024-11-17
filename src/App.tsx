import './App.css'
import Index from './components/Index';
import Meteors from './components/ui/meteors';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contactme from './components/Contactme';
import { Customdock } from './components/Customdock';

function App() {

  return (
    <main className="flex min-h-screen flex-col md:gap-12 gap-8 md:p-24 p-10 relative overflow-hidden lg:w-8/12 sm:w-full mx-auto">
      <div className="fixed inset-0 pointer-events-none light-mode-fade-bottom dark:fade-bottom z-10 bg-white/10 dark:bg-black/10" />
        <Meteors />
        <Index />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
        <Contactme />
        <Customdock/>
    </main>
  )
}

export default App
