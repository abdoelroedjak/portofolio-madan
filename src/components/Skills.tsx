import SectionReveal from "./SectionReveal";
import { motion } from "motion/react";

const skills = [
  { 
    name: "Canva", 
    value: 95, 
    abbr: "CN",
    description: "Architecting high-impact visual narratives and comprehensive brand ecosystems.",
    gradient: "from-[#adc6ff] to-[#7bd0ff]",
    glow: "rgba(173, 198, 255, 0.5)",
    className: "md:col-span-2 md:row-span-2"
  },
  { 
    name: "Photoshop", 
    value: 88, 
    abbr: "PS",
    description: "Mastering light and shadow through advanced digital composition.",
    gradient: "from-[#7bd0ff] to-[#4d8eff]",
    glow: "rgba(123, 208, 255, 0.5)",
    className: "md:col-span-2 md:row-span-1"
  },
  { 
    name: "Illustrator", 
    value: 82, 
    abbr: "AI",
    description: "Engineering geometric precision and infinite vector scalability.",
    gradient: "from-[#b6c4ff] to-[#adc6ff]",
    glow: "rgba(182, 196, 255, 0.5)",
    className: "md:col-span-1 md:row-span-1"
  },
  { 
    name: "CapCut", 
    value: 90, 
    abbr: "CC",
    description: "Crafting rhythmic motion sequences for the modern digital era.",
    gradient: "from-[#4d8eff] to-[#7bd0ff]",
    glow: "rgba(77, 142, 255, 0.5)",
    className: "md:col-span-1 md:row-span-1"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

export default function Skills() {
  return (
    <SectionReveal className="py-40 px-6 md:px-20 relative overflow-hidden" id="skills">
      {/* Background Decor */}
      <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none animate-pulse" />

      <div className="max-w-[1280px] mx-auto">
        <div className="mb-24 text-left relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-transparent" />
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Technical Core</span>
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/20">
            CRAFTING <br /> THE FUTURE.
          </h2>
          
          <p className="text-on-surface-variant font-medium text-xl max-w-2xl leading-relaxed opacity-80">
            A specialized toolkit selection focused on precision design, digital storytelling, and brand elevation through creative engineering.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-6"
        >
          {skills.map((skill, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className={`glass-card group p-10 rounded-[3.5rem] relative overflow-hidden ${skill.className} flex flex-col justify-between`}
            >
              {/* Internal Blur Orb */}
              <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-[0.05] blur-[80px] transition-opacity duration-1000`} />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-auto">
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        `0 0 20px ${skill.glow}`,
                        `0 0 45px ${skill.glow}`,
                        `0 0 20px ${skill.glow}`
                      ]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className={`w-20 h-20 flex items-center justify-center rounded-[1.75rem] bg-gradient-to-br ${skill.gradient} border border-white/40 p-[1.5px] shadow-2xl relative overflow-hidden group-hover:rotate-6 transition-transform duration-700`}
                  >
                    <div className="w-full h-full bg-[#0a0d1c]/90 rounded-[1.6rem] flex items-center justify-center backdrop-blur-3xl relative overflow-hidden">
                      <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                      <span className="text-2xl font-black text-white leading-none">
                        {skill.abbr}
                      </span>
                    </div>
                  </motion.div>

                  <div className="flex flex-col items-end">
                    <span className="text-5xl font-black tracking-tighter text-white/10 group-hover:text-white/30 transition-all duration-700">
                      {skill.value}%
                    </span>
                    <span className="text-[10px] font-black tracking-widest uppercase opacity-20 group-hover:opacity-40 transition-opacity">Efficiency</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-white group-hover:translate-x-1 transition-transform duration-500">
                    {skill.name}
                  </h3>
                  <p className="text-on-surface-variant font-medium text-sm md:text-base leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500 max-w-[90%]">
                    {skill.description}
                  </p>
                </div>
              </div>

              <div className="mt-12 relative z-10">
                <div className="flex justify-between items-center mb-4 px-1">
                  <div className="flex gap-1">
                    {[1, 2, 3].map(dot => (
                      <div key={dot} className={`w-1 h-1 rounded-full bg-gradient-to-br ${skill.gradient} opacity-40`} />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Competency Matrix</span>
                </div>
                
                <div className="w-full bg-white/5 h-[3px] rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                    viewport={{ once: true }}
                    className={`h-full bg-gradient-to-r ${skill.gradient} relative shadow-[0_0_25px_${skill.glow}]`}
                  >
                    <motion.div 
                      animate={{ x: ['-100%', '300%'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/3"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Decorative Border Glow Layer */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-1000 rounded-[3.5rem] pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
