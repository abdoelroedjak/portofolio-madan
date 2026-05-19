import { motion } from "motion/react";
import { ArrowUpRight, MessageCircle, Instagram } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 md:px-20 overflow-hidden relative" id="home">
      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative order-1 md:order-1 flex justify-center md:justify-start">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-64 h-[440px] md:w-[480px] md:h-[700px] rounded-[2.5rem] overflow-hidden glass-card p-3 shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/5"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              <img 
                alt="Muhammad Naufal Ramadhan Profile" 
                className="w-full h-full object-cover rounded-[2rem] transition-all duration-1000" 
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB4L3RPuFHQDiYgRkju__rKK7-8n0msUxSDVuzIOp17lGGL8R0GlvYFSeW_UKzdeFQd_0zEFpBUqWP5TwnDr01OSxeVqNahGAUx_7BZmoXPf6xWNe6IZDVWurblwtRXs5R3HmNIgF35VDygSByw4mwoxZ6cYQRy3EXABGdWl0TFNqUk0Gspw4r6qXwJ3tYnqr5o6UqzCGAdUU5D3_HctJu3gYg2SXSkU_b35ekkTH8B5JJydCDWqIR6gwjgLNXeJ7fDVCpOfd2MTI" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60 pointer-events-none" />
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-8 -right-8 p-8 glass-card rounded-[2rem] shadow-2xl border-white/10"
          >
            <span className="block text-[10px] uppercase tracking-[0.3em] font-black text-primary mb-2">Based in</span>
            <span className="text-3xl font-black text-white tracking-tighter">Malang, ID</span>
          </motion.div>
        </div>

        <div className="order-2 md:order-2 space-y-12">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-[14px] text-primary font-black uppercase tracking-[0.5em] block">
                CREATIVE VISIONARY
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/20"
            >
              Muhammad <br className="md:hidden" /> Naufal <br className="hidden md:block" />
              <span className="text-primary tracking-[-0.05em]">Ramadhan.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl font-medium text-on-surface-variant max-w-lg tracking-tight opacity-80"
            >
              Designer & Media Specialist
            </motion.p>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-on-surface/70 max-w-lg leading-relaxed"
          >
            Crafting digital excellence through cinematic storytelling and modern design aesthetics. Born in Kendari, I am an International Relations student at UMM.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a 
              href="#portfolio"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(173,198,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-on-primary rounded-full font-bold flex items-center gap-2 transition-all shadow-lg"
            >
              Lihat Portfolio <ArrowUpRight size={20} />
            </motion.a>
            
            <motion.a 
              href="https://wa.me/6282243154938"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 rounded-full font-bold transition-all"
            >
              Hubungi Saya
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-8 pt-8"
          >
            <a 
              href="https://wa.me/6282243154938" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group"
            >
              <MessageCircle size={18} className="group-hover:scale-110 transition-transform" /> 
              <span className="text-sm font-bold uppercase tracking-wider">WhatsApp</span>
            </a>
            <a 
              href="https://www.instagram.com/m.naufal.r_/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group"
            >
              <Instagram size={18} className="group-hover:scale-110 transition-transform" /> 
              <span className="text-sm font-bold uppercase tracking-wider">Instagram</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
