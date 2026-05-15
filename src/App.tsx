import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
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

const slides = [
  { id: 'hero', label: 'Inicio', Component: Hero },
  { id: 'problem', label: 'Problema', Component: Problem },
  { id: 'validation', label: 'Validación', Component: Validation },
  { id: 'opportunity', label: 'Oportunidad', Component: Opportunity },
  { id: 'solution', label: 'Solución', Component: Solution },
  { id: 'differentiator', label: 'Diferenciador', Component: Differentiator },
  { id: 'mvp', label: 'MVP', Component: MVP },
  { id: 'tech', label: 'Tecnología', Component: Tech },
  { id: 'business', label: 'Modelo', Component: BusinessModel },
  { id: 'impact', label: 'Impacto', Component: Impact },
  { id: 'demo', label: 'Demo', Component: Demo },
  { id: 'pitch', label: 'Pitch', Component: Pitch },
  { id: 'judges', label: 'Jurados', Component: Judges },
  { id: 'team', label: 'Equipo', Component: Team },
  { id: 'decision', label: 'Decisión', Component: DecisionDoc },
];

function Slide({ id, index, label, children }) {
  return (
    <section
      id={id}
      className="relative min-h-screen snap-start flex items-center justify-center px-5 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.18),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.16),transparent_34%)]" />
      <div className="absolute inset-x-6 top-8 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="relative w-full max-w-7xl rounded-[2rem] border border-white/10 bg-black/55 p-6 md:p-10 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl"
      >
        <div className="mb-8 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.35em] text-cyan-200/70">
          <span>{String(index + 1).padStart(2, '0')} / {slides.length}</span>
          <span>{label}</span>
        </div>

        <div className="min-h-[62vh] flex items-center">
          <div className="w-full">{children}</div>
        </div>
      </motion.div>
    </section>
  );
}

function SlideControls({ activeSlide, onPrev, onNext, canPrev, canNext }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={onPrev}
        disabled={!canPrev}
        className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl shadow-cyan-950/30 backdrop-blur-xl transition hover:border-cyan-300/60 hover:bg-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Diapositiva anterior"
      >
        <ChevronUp className="h-5 w-5 transition group-hover:-translate-y-0.5" />
      </motion.button>

      <div className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-semibold tracking-widest text-cyan-100 backdrop-blur-xl">
        {String(activeSlide + 1).padStart(2, '0')} / {slides.length}
      </div>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={onNext}
        disabled={!canNext}
        className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl shadow-cyan-950/30 backdrop-blur-xl transition hover:border-cyan-300/60 hover:bg-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Siguiente diapositiva"
      >
        <ChevronDown className="h-5 w-5 transition group-hover:translate-y-0.5" />
      </motion.button>
    </div>
  );
}

function App() {
  const mainRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index) => {
    const safeIndex = Math.max(0, Math.min(index, slides.length - 1));
    const slide = document.getElementById(slides[safeIndex].id);

    if (slide && mainRef.current) {
      mainRef.current.scrollTo({
        top: slide.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const nextSlide = () => goToSlide(activeSlide + 1);
  const prevSlide = () => goToSlide(activeSlide - 1);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const handleScroll = () => {
      const currentIndex = Math.round(main.scrollTop / window.innerHeight);
      setActiveSlide(Math.max(0, Math.min(currentIndex, slides.length - 1)));
    };

    main.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => main.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown' || event.key === 'PageDown') nextSlide();
      if (event.key === 'ArrowUp' || event.key === 'PageUp') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlide]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white selection:bg-cyan-400 selection:text-black">
      <ParticlesBackground />

      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.88))]" />
      <div className="pointer-events-none fixed left-1/2 top-0 z-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-20">
        <Navbar />
      </div>

      <SlideControls
        activeSlide={activeSlide}
        onPrev={prevSlide}
        onNext={nextSlide}
        canPrev={activeSlide > 0}
        canNext={activeSlide < slides.length - 1}
      />

      <main
        ref={mainRef}
        className="relative z-10 h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth"
      >
        {slides.map(({ id, label, Component }, index) => (
          <Slide key={id} id={id} index={index} label={label}>
            <Component />
          </Slide>
        ))}

        <footer className="snap-start relative z-10 flex min-h-[32vh] flex-col items-center justify-center border-t border-white/10 bg-black/80 px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/60">Cochatech</p>
          <p className="mt-3 text-gray-500">© 2025 Cochatech | Equipo X-Force</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
