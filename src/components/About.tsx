import { motion } from "motion/react";
import { Brush, Video, Camera, Diamond, Globe, Award, Zap, Heart, Star } from "lucide-react";
import SectionReveal from "./SectionReveal";

const stats = [
  { label: "Years Experience", value: "3+", icon: Award, color: "from-[#adc6ff] to-[#7bd0ff]" },
  { label: "Creative Projects", value: "50+", icon: Zap, color: "from-[#7bd0ff] to-[#4d8eff]" },
  { label: "Media & Branding", value: "20+", icon: Heart, color: "from-[#b6c4ff] to-[#adc6ff]" },
  { label: "Cinematic Edits", value: "100+", icon: Star, color: "from-[#4d8eff] to-[#7bd0ff]" },
];

const floatingSkills = [
  { name: "Graphic Design", icon: Brush, x: "10%", y: "20%", delay: 0 },
  { name: "Video Editing", icon: Video, x: "80%", y: "15%", delay: 1 },
  { name: "Branding", icon: Diamond, x: "70%", y: "70%", delay: 2 },
  { name: "Cinematography", icon: Camera, x: "15%", y: "75%", delay: 3 },
  { name: "Social Media", icon: Globe, x: "45%", y: "40%", delay: 4 },
];

export default function About() {
  return (
    <SectionReveal className="py-40 px-6 md:px-20 relative overflow-hidden" id="about">
      {/* Background Cinematic Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent blur-[1px]" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent blur-[1px]" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs">The Vision</span>
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.85] bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/20">
            BRIDGING DESIGN <br /> & TECHNOLOGY.
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[200px]">
          
          {/* 1. Large Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 md:row-span-2 glass-card rounded-[3rem] p-12 flex flex-col justify-end relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className={`absolute -top-20 -right-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none group-hover:scale-110 transition-transform duration-1000`} />
            
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6 border border-primary/20 backdrop-blur-md">
                Creative Director
              </span>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                Engineering Visual <br /> Masterpieces.
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                I am <span className="text-white font-bold">Muhammad Naufal Ramadhan</span>, a designer blending international perspective with strategic digital artistry. Based in Indonesia, I transform complex ideas into immersive visual narratives that resonate across borders.
              </p>
            </div>

            {/* Floating Elements Inside Card */}
            <div className="absolute top-12 right-12 opacity-20 group-hover:opacity-40 transition-opacity">
              <div className="w-24 h-24 border border-white/20 rounded-full animate-spin-slow flex items-center justify-center">
                <div className="w-16 h-16 border border-white/10 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* 2. Floating Skill Bubbles Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-3 glass-card rounded-[3rem] relative overflow-hidden group p-8"
          >
            <div className="absolute inset-0 bg-grid-small-white/[0.05] grayscale opacity-50" />
            
            <div className="relative z-10 text-center mb-8">
              <h4 className="text-xl font-black tracking-tighter text-white/50 uppercase">Multidisciplinary</h4>
            </div>

            <div className="relative h-full">
              {floatingSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 5 + i, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: skill.delay
                  }}
                  style={{ left: skill.x, top: skill.y }}
                  className="absolute p-4 glass-card rounded-2xl border-white/20 backdrop-blur-2xl flex flex-col items-center gap-2 group/bubble hover:border-primary/50 transition-colors shadow-2xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover/bubble:scale-110 transition-transform">
                    <skill.icon size={20} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover/bubble:opacity-100 transition-opacity whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-10 left-10 right-10 p-6 glass-card rounded-2xl text-center border-white/5">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40">Creative Core</span>
            </div>
          </motion.div>

          {/* 3. Micro Stats Cards */}
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="md:col-span-4 glass-card rounded-[2.5rem] p-8 flex items-center justify-between group overflow-hidden"
            >
              <div className="relative z-10">
                <span className="block text-3xl font-black text-white group-hover:scale-110 transition-transform origin-left">{stat.value}</span>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">{stat.label}</span>
              </div>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white/90 shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
                <stat.icon size={24} strokeWidth={2} />
              </div>
              
              {/* Subtle inner glow */}
              <div className={`absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-[0.05] group-hover:opacity-20 blur-2xl rounded-full transition-opacity`} />
            </motion.div>
          ))}

          {/* Bottom Interactive Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 glass-card rounded-[3rem] p-12 border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 group"
          >
            <div className="flex-1">
              <h4 className="text-2xl font-black text-white mb-2 tracking-tighter">Ready to Craft Excellence?</h4>
              <p className="text-on-surface-variant opacity-60">I am currently available for high-impact creative collaborations.</p>
            </div>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-10 py-5 rounded-full bg-primary text-on-primary font-black uppercase text-xs tracking-[0.3em] shadow-[0_0_30px_rgba(173,198,255,0.4)] hover:shadow-[0_0_50px_rgba(173,198,255,0.6)] transition-all"
            >
              Start Project
            </motion.a>
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
}

