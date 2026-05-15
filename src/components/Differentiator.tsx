import { motion } from "framer-motion";
import { Brain, ShieldCheck, BarChart4, Gamepad2 } from "lucide-react";

const Differentiator = () => {
  const features = [
    { icon: Brain, title: "Scoring alternativo con IA", desc: "Analiza transacciones de billeteras digitales, pagos de servicios y comportamiento en redes sociales (con consentimiento)." },
    { icon: ShieldCheck, title: "Detección de fraude en tiempo real", desc: "Modelo predictivo que reduce riesgo de impago en un 40% sin historial crediticio." },
    { icon: BarChart4, title: "Análisis financiero automático", desc: "Conecta Yape, Plin, MercadoPago y genera un perfil de riesgo en 2 minutos." },
    { icon: Gamepad2, title: "Educación financiera gamificada", desc: "Micro cursos que mejoran el score y desbloquean mejores tasas." },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          ¿Qué hace diferente a Cochatech?
        </motion.h2>
        <p className="text-center text-gray-400 mb-12">No es "solo IA" – es scoring con datos alternativos + UX simple</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-cyan-500 transition"
            >
              <f.icon className="text-cyan-400 mb-3" size={32} />
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-gray-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiator;