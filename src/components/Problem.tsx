import { motion } from "framer-motion";
import { Users, AlertCircle, DollarSign, Clock } from "lucide-react";

const Problem = () => {
  const problems = [
    { icon: Users, title: "¿Quién?", desc: "Pequeños comerciantes, dueños de tiendas de barrio, mercados informales." },
    { icon: AlertCircle, title: "Dolor", desc: "No acceden a créditos por falta de historial bancario. Necesitan liquidez para stock." },
    { icon: Clock, title: "Causa", desc: "Sistemas bancarios tradicionales, trámites lentos, requisitos excluyentes." },
    { icon: DollarSign, title: "Impacto", desc: "Pérdida de ventas, estrés financiero, recurren a préstamos informales con intereses abusivos." },
  ];

  return (
    <section id="problema" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Problema</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition"
            >
              <item.icon className="text-cyan-400 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 text-center text-gray-400 italic"
        >
          “Nunca sé si me aprobarán un préstamo, pierdo oportunidades de comprar mercadería”
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;