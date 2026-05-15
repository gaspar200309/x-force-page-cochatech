import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Cochatech
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mt-4 max-w-2xl mx-auto"
        >
          Créditos rápidos para pequeños comerciantes sin historial bancario
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <a
            href="#problema"
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 px-8 rounded-full transition"
          >
            Conoce más <ArrowDown size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;