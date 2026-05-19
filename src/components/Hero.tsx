import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section 
      ref={containerRef}
      className="min-h-[110vh] flex items-center justify-center pt-20 px-6 md:px-12 overflow-hidden relative bg-transparent" 
      id="home"
    >
      <div className="hero-glow" />
      
      <motion.div 
        style={{ y: y1, opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto w-full relative z-10 text-center"
      >
        <div className="space-y-8 md:space-y-12">
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-6">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-[1px] bg-primary/60" 
            />
            <span className="text-[10px] md:text-[11px] text-primary font-bold uppercase tracking-[0.6em] block">
              Portofolio Design
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[1.1] sm:leading-[0.85] tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/30 px-4"
          >
            Muhammad Naufal <br className="hidden sm:block" />
            <span className="text-primary tracking-[-0.05em] inline-block">Ramadhan.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-xl font-body text-on-surface-variant max-w-2xl mx-auto tracking-tight opacity-70 leading-relaxed"
          >
            Creative Director & Media Enthusiast. <br className="hidden md:block" />
            Crafting high-impact visual narratives and modern design ecosystems through technical precision.
          </motion.p>
        </div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center gap-12 mt-16 md:mt-24"
        >
          <motion.a 
            href="#portfolio"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 40px rgba(173,198,255,0.3)",
              backgroundColor: "white",
              color: "#002e6a"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-14 py-6 bg-primary text-on-primary font-bold text-[10px] tracking-[0.5em] uppercase transition-all duration-500 rounded-full"
          >
            Lihat Portfolio
          </motion.a>

          {/* Scroll Indicator */}
          <motion.div 
            style={{ y: y2 }}
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4 opacity-20"
          >
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Discovery</span>
            <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
