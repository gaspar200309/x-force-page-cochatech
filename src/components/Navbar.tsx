import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Problema", "Solución", "Demo", "Equipo"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-cyan-500/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Zap className="text-cyan-400" size={28} />
            <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              COCHATECH
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                {link}
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur p-4 flex flex-col space-y-3"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-cyan-400"
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;