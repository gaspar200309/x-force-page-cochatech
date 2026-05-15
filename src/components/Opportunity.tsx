import { motion } from "framer-motion";
import { TrendingUp, Users, Landmark } from "lucide-react";

const Opportunity = () => {
  return (
    <section id="oportunidad" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Oportunidad Fintech
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 p-6 rounded-xl text-center"
          >
            <Users className="mx-auto text-cyan-400 mb-3" size={40} />
            <h3 className="text-xl font-bold">Inclusión financiera</h3>
            <p className="text-gray-300">Mercado desatendido de 300M+ personas en Latam que necesitan crédito justo y rápido.</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 p-6 rounded-xl text-center"
          >
            <TrendingUp className="mx-auto text-cyan-400 mb-3" size={40} />
            <h3 className="text-xl font-bold">Crecimiento</h3>
            <p className="text-gray-300">El mercado de lending digital crecerá 25% anual hasta 2028. Nicho de microcréditos es el más grande.</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 p-6 rounded-xl text-center"
          >
            <Landmark className="mx-auto text-cyan-400 mb-3" size={40} />
            <h3 className="text-xl font-bold">Alta demanda</h3>
            <p className="text-gray-300">7 de cada 10 pequeños comerciantes pedirían un préstamo digital si la aprobación es menor a 24 horas.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;