import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
        },
        particles: {
          color: { value: "#00ffff" },
          links: { color: "#00ffff", distance: 150, enable: true, opacity: 0.2 },
          move: { enable: true, speed: 1 },
          number: { density: { enable: true, area: 800 }, value: 80 },
          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-0"
    />
  );
};

export default ParticlesBackground;