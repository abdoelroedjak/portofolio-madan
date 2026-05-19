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
    <SectionReveal className="py-40 px-6 md:px-12 bg-surface" id="about">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">The Vision</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              Bridging Design <br /> 
              <span className="text-primary"> & Technology.</span>
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-on-surface leading-snug font-light font-body">
              Hello! I am <span className="font-bold text-white">Muhammad Naufal Ramadhan</span>. Based in Indonesia, I bridge the gap between human emotion and digital craftsmanship. 
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed opacity-80">
              With a background in International Relations, I bring a unique strategic perspective to visual storytelling. Every project is an opportunity to frame a moment that resonates globally.
            </p>
            
            <div className="pt-8">
              <motion.a 
                href="#contact"
                className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary border-b border-primary pb-2 hover:opacity-50 transition-all font-black"
              >
                Inquire Collaboration
              </motion.a>
            </div>
          </div>
        </div>

        {/* Cinematic Stats/Icons Grid - simplified */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-40">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left space-y-4"
            >
              <span className="block text-5xl font-black text-white">{stat.value}</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] font-black">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

