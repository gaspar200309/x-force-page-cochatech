import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, CheckCircle, Loader2, Zap } from "lucide-react";

const Demo = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [approved, setApproved] = useState(false);

  const simulateScoring = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setApproved(true);
      setStep(2);
    }, 2000);
  };

  return (
    <section id="demo" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Demo interactiva
        </motion.h2>
        <div className="bg-black/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 md:p-8">
          <div className="flex justify-between mb-6">
            {["Registro", "Conectar billetera", "Resultado"].map((label, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 ${step >= i ? "text-cyan-400" : "text-gray-600"}`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= i ? "bg-cyan-400 text-black" : "bg-gray-700"}`}>
                  {i + 1}
                </div>
                <span className="hidden sm:inline">{label}</span>
              </div>
            ))}
          </div>
          <div className="min-h-[300px] flex flex-col items-center justify-center">
            {step === 0 && (
              <motion.div className="text-center">
                <Smartphone className="mx-auto text-cyan-400 mb-4" size={48} />
                <h3 className="text-2xl font-bold">Regístrate</h3>
                <p className="text-gray-300 mb-4">Ingresa tu número celular</p>
                <input type="tel" placeholder="+51 987 654 321" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white mb-4 w-full max-w-xs" />
                <button onClick={() => setStep(1)} className="bg-cyan-600 px-6 py-2 rounded-full">Continuar</button>
              </motion.div>
            )}
            {step === 1 && (
              <motion.div className="text-center">
                <Zap className="mx-auto text-yellow-400 mb-4" size={48} />
                <h3 className="text-2xl font-bold">Conecta Yape o MercadoPago</h3>
                <p className="text-gray-300 mb-4">Autoriza leer tus últimos movimientos (solo para scoring)</p>
                <button onClick={simulateScoring} className="bg-green-600 px-6 py-2 rounded-full flex items-center gap-2 mx-auto">
                  {loading ? <Loader2 className="animate-spin" /> : "Conectar y evaluar"}
                </button>
              </motion.div>
            )}
            {step === 2 && approved && (
              <motion.div className="text-center">
                <CheckCircle className="mx-auto text-green-400 mb-4" size={64} />
                <h3 className="text-2xl font-bold">¡Aprobado!</h3>
                <p className="text-gray-200 mb-2">Score: 720 puntos</p>
                <p className="text-cyan-400 text-xl font-bold">S/ 2,500 disponibles</p>
                <p className="text-sm text-gray-400">Tasa: 1.5% mensual • Desembolso inmediato</p>
                <button className="mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-2 rounded-full">Solicitar préstamo</button>
              </motion.div>
            )}
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm mt-4">* Simulación - MVP funcional en desarrollo</p>
      </div>
    </section>
  );
};

export default Demo;