import { motion } from "framer-motion";
import { Database, Server, Cloud, Code, BrainCircuit, CreditCard } from "lucide-react";

const Tech = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Tecnología
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {[
            { icon: Server, label: "Frontend: React + Tailwind" },
            { icon: Database, label: "Backend: Node.js + Express" },
            { icon: Cloud, label: "Base de datos: PostgreSQL" },
            { icon: BrainCircuit, label: "IA: TensorFlow.js / Scikit-learn" },
            { icon: CreditCard, label: "APIs: Plaid (agregación), MercadoPago" },
            { icon: Code, label: "Auth: Firebase + Web3 (opcional)" },
          ].map((t, idx) => (
            <motion.div
              key={idx}
              whileInView={{ scale: 1.05 }}
              className="bg-gray-800/30 p-4 rounded-lg border border-gray-700"
            >
              <t.icon className="mx-auto text-cyan-400 mb-2" />
              <span className="text-sm text-gray-300">{t.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;