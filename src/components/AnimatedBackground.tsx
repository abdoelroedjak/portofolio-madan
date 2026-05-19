import { motion } from "motion/react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-surface">
      {/* Mesh Gradient Base */}
      <div className="mesh-gradient" />
      
      {/* Futuristic Grid with Perspective */}
      <div className="grid-background opacity-30" />
      
      {/* Animated Light Beams */}
      <div className="light-beam left-1/4" style={{ animationDelay: "0s" }} />
      <div className="light-beam left-2/4" style={{ animationDelay: "-5s" }} />
      <div className="light-beam left-3/4" style={{ animationDelay: "-10s" }} />
      
      {/* Liquid Blur Shapes (Orbs) */}
      <div 
        className="liquid-shape w-[600px] h-[600px] bg-primary/20 top-[-10%] left-[-10%] neon-pulse" 
        style={{ animationDuration: "35s" }} 
      />
      <div 
        className="liquid-shape w-[700px] h-[700px] bg-secondary/15 bottom-[-20%] right-[-10%] neon-pulse" 
        style={{ animationDuration: "45s", animationDelay: "-10s" }} 
      />
      <div 
        className="liquid-shape w-[500px] h-[500px] bg-tertiary/10 top-[30%] right-[10%] neon-pulse" 
        style={{ animationDuration: "55s", animationDelay: "-20s" }} 
      />
      <div 
        className="liquid-shape w-[800px] h-[800px] bg-[#4d8eff]/10 bottom-[10%] left-[-20%] neon-pulse" 
        style={{ animationDuration: "65s", animationDelay: "-15s" }} 
      />
      
      {/* Glowing Particles (Subtle) */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%", 
            opacity: 0,
            scale: 0.5
          }}
          animate={{ 
            y: [null, "-20%"],
            opacity: [0, 0.4, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 10 + Math.random() * 20, 
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
          className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
        />
      ))}
      
      {/* Depth Layering - Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-surface to-transparent" />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
}
