import { motion } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Validation from './components/Validation';
import Opportunity from './components/Opportunity';
import Solution from './components/Solution';
import Differentiator from './components/Differentiator';
import MVP from './components/MVP';
import Tech from './components/Tech';
import BusinessModel from './components/BusinessModel';
import Impact from './components/Impact';
import Demo from './components/Demo';
import Pitch from './components/Pitch';
import Judges from './components/Judges';
import Team from './components/Team';
import DecisionDoc from './components/DecisionDoc';

function App() {
  return (
    <div className="relative bg-black">
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Problem />
        <Validation />
        <Opportunity />
        <Solution />
        <Differentiator />
        <MVP />
        <Tech />
        <BusinessModel />
        <Impact />
        <Demo />
        <Pitch />
        <Judges />
        <Team />
        <DecisionDoc />
      </main>
      <footer className="relative z-10 py-8 text-center text-gray-500 border-t border-gray-800">
        <p>© 2025 Cochatech | Equipo X-Force</p>
      </footer>
    </div>
  );
}

export default App;