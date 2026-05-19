import SectionReveal from "./SectionReveal";
import { motion } from "motion/react";

const skills = [
  { 
    name: "Canva", 
    value: 95, 
    abbr: "CN",
    description: "Architecting high-impact visual narratives and brand ecosystems.",
    color: "from-[#adc6ff] to-[#7bd0ff]"
  },
  { 
    name: "Photoshop", 
    value: 88, 
    abbr: "PS",
    description: "Mastering light and shadow through digital composition.",
    color: "from-[#7bd0ff] to-[#4d8eff]"
  },
  { 
    name: "Illustrator", 
    value: 82, 
    abbr: "AI",
    description: "Engineering geometric precision and vector scalability.",
    color: "from-[#b6c4ff] to-[#adc6ff]"
  },
  { 
    name: "CapCut", 
    value: 90, 
    abbr: "CC",
    description: "Crafting rhythmic motion sequences for digital engagement.",
    color: "from-[#4d8eff] to-[#7bd0ff]"
  },
];

export default function Skills() {
  return (
    <SectionReveal className="py-40 px-6 md:px-12 relative overflow-hidden" id="skills">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-primary" />
            <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px]">Technical Stack</span>
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-8">SKILLSETS.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] relative group border-white/5 bg-white/[0.02] overflow-hidden"
            >
              {/* Decorative Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${skill.color} blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-1000`} />
              
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className={`w-16 h-16 rounded-[1.2rem] bg-gradient-to-br ${skill.color} flex items-center justify-center text-on-primary font-black text-xl shadow-lg shadow-primary/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {skill.abbr}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors">{skill.value}%</span>
                  <span className="text-[8px] font-black tracking-[0.2em] text-primary uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">Proficiency</span>
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-4 group-hover:translate-x-1 transition-transform">{skill.name}</h3>
                <p className="text-on-surface-variant text-sm h-12 opacity-60 group-hover:opacity-100 transition-opacity leading-relaxed">{skill.description}</p>
              </div>
              
              <div className="mt-12 h-[6px] w-full bg-white/5 rounded-full relative overflow-hidden z-10">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1.5, delay: i * 0.1 + 0.5, ease: "circOut" }}
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent" />
                  <motion.div 
                    animate={{ x: ["-100%", "400%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-y-0 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                </motion.div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-[1px] border-r-[1px] border-white/5 group-hover:border-primary/40 group-hover:w-12 group-hover:h-12 transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
