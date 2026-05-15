import { motion } from "framer-motion";
import { TrendingDown, Clock, Users, Heart } from "lucide-react";

const Impact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Impacto
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Clock, title: "-90%", desc: "Tiempo de aprobación (de 15 días a 10 minutos)" },
            { icon: TrendingDown, title: "-70%", desc: "Intereses vs préstamos informales" },
            { icon: Users, title: "+40%", desc: "Comerciantes incluidos al sistema financiero" },
            { icon: Heart, title: "ODS 1, 8, 10", desc: "Fin de la pobreza, trabajo decente, reducción desigualdades" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center bg-gradient-to-b from-gray-800/20 to-transparent p-6 rounded-2xl"
            >
              <item.icon className="mx-auto text-cyan-400 mb-3" size={40} />
              <div className="text-3xl font-bold text-cyan-300">{item.title}</div>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;