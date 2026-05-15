import { motion } from "framer-motion";
import { Mic, Target, Rocket, TrendingUp, Users, Lightbulb } from "lucide-react";

const Pitch = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Pitch en 60 segundos
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Mic, title: "Hook", text: "300M de latinoamericanos no tienen acceso a un crédito justo. Nosotros cambiamos eso." },
            { icon: Target, title: "Problema", text: "Pequeños comerciantes pierden ventas por falta de liquidez y bancos los rechazan." },
            { icon: Lightbulb, title: "Solución", text: "Cochatech: scoring alternativo con IA que aprueba microcréditos en 10 minutos." },
            { icon: Rocket, title: "Demo", text: "(mostrar flujo rápido) El usuario conecta su billetera y obtiene dinero al instante." },
            { icon: TrendingUp, title: "Impacto", text: "Reducimos pobreza financiera, creamos historial crediticio y movemos S/ 500M en 2 años." },
            { icon: Users, title: "Futuro", text: "API para bancos, expansión a México y Colombia, y créditos para educación." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-3 bg-gray-800/30 p-4 rounded-xl border border-gray-700"
            >
              <item.icon className="text-cyan-400 shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-cyan-300">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pitch;