import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Solution = () => {
  return (
    <section id="solucion" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="inline-block p-3 bg-cyan-500/20 rounded-full mb-4"
        >
          <Sparkles className="text-cyan-400" size={32} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Crédito Rápido</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl text-gray-300 mb-4"
        >
          “Una plataforma que ayuda a pequeños comerciantes a obtener microcréditos en minutos usando scoring alternativo por hábitos de pago y actividad digital.”
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-8 text-cyan-300 font-mono text-sm"
        >
          Producto: <span className="font-bold text-white">CREDIQ</span> (crédito + IQ)
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;