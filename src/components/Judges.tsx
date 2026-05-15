import { motion } from "framer-motion";
import { Lightbulb, Heart, CheckSquare, Smartphone, Mic } from "lucide-react";

const Judges = () => {
  const criteria = [
    { name: "Innovación", icon: Lightbulb, desc: "Scoring alternativo + gamificación" },
    { name: "Impacto", icon: Heart, desc: "Inclusión financiera real + ODS" },
    { name: "Viabilidad", icon: CheckSquare, desc: "APIs existentes, regulación amigable" },
    { name: "Demo", icon: Smartphone, desc: "Funcionalidad mostrada en la app" },
    { name: "UX", icon: Smartphone, desc: "Diseño limpio, onboarding en 3 pasos" },
    { name: "Pitch", icon: Mic, desc: "Storytelling emocional con datos" },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Criterios de los jueces
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {criteria.map((c, idx) => (
            <motion.div
              key={idx}
              whileInView={{ scale: 1.02 }}
              className="bg-black/50 p-4 rounded-lg border border-cyan-800 flex items-center gap-3"
            >
              <c.icon className="text-cyan-400" size={28} />
              <div>
                <div className="font-bold">{c.name}</div>
                <div className="text-xs text-gray-400">{c.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center text-cyan-200 text-sm">
          ★ Nuestro diferenciador: UX impecable + problema real validado
        </div>
      </div>
    </section>
  );
};

export default Judges;