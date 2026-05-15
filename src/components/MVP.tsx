import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const MVP = () => {
  return (
    <section className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8"
        >
          MVP: Scoring inteligente en 3 pasos
        </motion.h2>
        <div className="space-y-6">
          {[
            "Usuario se registra con número celular y selfie + documento",
            "Conecta su billetera digital (Yape, Plin, MercadoPago) y autoriza leer últimos 6 meses de movimientos",
            "IA analiza patrones de ingreso/gasto, frecuencia de pagos y genera un score de crédito en < 30 segundos",
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex items-start gap-4 bg-gray-800/40 p-4 rounded-xl"
            >
              <CheckCircle className="text-cyan-400 shrink-0 mt-1" />
              <p className="text-gray-200">{step}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 text-center text-cyan-300 font-semibold"
        >
          Resultado: Oferta de préstamo personalizado desde S/200 hasta S/5000, desembolso en 10 minutos.
        </motion.div>
      </div>
    </section>
  );
};

export default MVP;