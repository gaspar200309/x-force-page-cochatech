import { motion } from "framer-motion";
import { BarChart3, Mic, Quote } from "lucide-react";

const Validation = () => {
  return (
    <section id="validacion" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Validación rápida
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-800/40 p-6 rounded-xl border border-gray-700"
          >
            <BarChart3 className="text-cyan-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Datos</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>72% de pequeños negocios en Latam no tienen acceso a crédito formal (BID, 2024)</li>
              <li>85% de los comerciantes recurren a prestamistas informales con tasas mayores a 30% mensual</li>
              <li>Más de 300 millones de personas no bancarizadas en la región</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-800/40 p-6 rounded-xl border border-gray-700"
          >
            <Mic className="text-cyan-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Entrevistas reales</h3>
            <div className="space-y-4">
              <div className="flex gap-2 items-start">
                <Quote size={20} className="text-cyan-400 mt-1" />
                <p className="text-gray-300">“Necesito 500 soles para comprar cajas, pero el banco me pide papeles que no tengo” – Doña Rosa, bodeguera.</p>
              </div>
              <div className="flex gap-2 items-start">
                <Quote size={20} className="text-cyan-400 mt-1" />
                <p className="text-gray-300">“Si me prestaran rápido y sin tanto requisito, podría crecer mi negocio” – Carlos, ferretero.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Validation;