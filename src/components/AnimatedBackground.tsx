import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-surface">
      {/* Mesh Gradient Base */}
      <div className="mesh-gradient" />
      
      {/* Cinematic Vignette */}
      <div className="vignette" />
      
      {/* Futuristic Grid with Perspective */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="grid-background opacity-[0.15]" 
      />
      
      {/* Animated Light Beams */}
      <div className="light-beam left-1/4 opacity-20" style={{ animationDelay: "0s" }} />
      <div className="light-beam left-3/4 opacity-20" style={{ animationDelay: "-7s" }} />
      
      {/* Liquid Blur Shapes (Orbs) with Mouse Parallax */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="liquid-shape w-[800px] h-[800px] bg-primary/10 top-[-20%] left-[-10%] neon-pulse blur-[120px]" 
        transition={{ type: "spring", stiffness: 20, damping: 40 }}
      />
      <motion.div 
        style={{ x: useSpring(mouseX, { stiffness: 30, damping: 50 }), y: useSpring(mouseY, { stiffness: 30, damping: 50 }) }}
        className="liquid-shape w-[600px] h-[600px] bg-secondary/10 bottom-[-10%] right-0 neon-pulse blur-[100px]" 
      />
      
      {/* Slow Moving Ambient Orbs */}
      <div 
        className="liquid-shape w-[500px] h-[500px] bg-tertiary/10 top-[30%] right-[10%] neon-pulse" 
        style={{ animationDuration: "55s", animationDelay: "-20s" }} 
      />
      
      {/* Glowing Particles (Subtle) */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%", 
            opacity: 0,
            scale: 0.5
          }}
          animate={{ 
            y: [null, (Math.random() > 0.5 ? "-50%" : "50%")],
            x: [null, (Math.random() > 0.5 ? "-20%" : "20%")],
            opacity: [0, 0.3, 0],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{ 
            duration: 15 + Math.random() * 25, 
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
          className="absolute w-[2px] h-[2px] bg-primary/40 rounded-full blur-[1px]"
        />
      ))}
      
      {/* Depth Layering - Gradient Fades */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface to-transparent z-10" />
      <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-surface/80 to-transparent z-10" />
    </div>
  );
}
