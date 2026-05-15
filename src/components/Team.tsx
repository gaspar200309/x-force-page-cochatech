import { motion } from "framer-motion";
//import { Linkedin, Github, Twitter } from "lucide-react";

const teamMembers = [
  { name: "Ana López", role: "CEO & Product Lead", image: "https://randomuser.me/api/portraits/women/68.jpg", linkedin: "#" },
  { name: "Carlos Mendoza", role: "CTO / IA Engineer", image: "https://randomuser.me/api/portraits/men/32.jpg", linkedin: "#" },
  { name: "María Fernández", role: "Fintech & UX", image: "https://randomuser.me/api/portraits/women/44.jpg", linkedin: "#" },
  { name: "Jorge Ramírez", role: "FullStack Developer", image: "https://randomuser.me/api/portraits/men/91.jpg", linkedin: "#" },
];

const Team = () => {
  return (
    <section id="equipo" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Equipo <span className="text-cyan-400">X-Force</span>
        </motion.h2>
        <p className="text-center text-gray-400 mb-12">Experiencia en fintech, IA y escalamiento de startups</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-gray-800/40 rounded-2xl p-6 text-center backdrop-blur-sm border border-gray-700"
            >
              <img src={member.image} alt={member.name} className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-2 border-cyan-400" />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-cyan-300 text-sm mb-3">{member.role}</p>
              <div className="flex justify-center gap-3 text-gray-400">
                {/* <Linkedin size={18} className="hover:text-cyan-400 cursor-pointer" />
                <Github size={18} className="hover:text-cyan-400 cursor-pointer" />
                <Twitter size={18} className="hover:text-cyan-400 cursor-pointer" /> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;