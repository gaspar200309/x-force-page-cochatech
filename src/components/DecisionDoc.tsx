import { motion } from "framer-motion";
import { ClipboardCheck, Users, Target, Lightbulb, Rocket, Cpu, Smartphone } from "lucide-react";

const DecisionDoc = () => {
  const decisions = [
    { q: "¿Qué problema resolveremos?", a: "Falta de acceso a microcréditos rápidos para pequeños comerciantes sin historial bancario." },
    { q: "¿Quién lo sufre?", a: "Dueños de bodegas, mercados, ferreterías, emprendedores informales en zonas urbano-marginales." },
    { q: "¿Por qué importa?", a: "Exclusión financiera que frena el crecimiento económico y perpetúa la informalidad." },
    { q: "¿Qué haremos?", a: "Plataforma digital que evalúa riesgo con datos alternativos (billeteras, pagos) y desembolsa en minutos." },
    { q: "¿Qué función WOW?", a: "Scoring en 30 segundos conectando Yape/Plin + oferta personalizada con gamificación." },
    { q: "¿Qué tecnología usaremos?", a: "React, Node, Plaid API, TensorFlow.js, Firebase, MercadoPago Connect." },
    { q: "¿Cómo lo mostraremos?", a: "Demo de registro → conectar billetera → resultado de aprobación con monto y tasa." },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 flex items-center justify-center gap-2"
        >
          <ClipboardCheck className="text-cyan-400" /> Documento de decisiones rápidas
        </motion.h2>
        <div className="space-y-4">
          {decisions.map((dec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="border-l-4 border-cyan-500 bg-black/30 p-4 rounded-r-xl"
            >
              <p className="font-bold text-cyan-300">{dec.q}</p>
              <p className="text-gray-200">{dec.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DecisionDoc;