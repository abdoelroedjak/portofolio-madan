import { Mail, MapPin, Share2 } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <SectionReveal className="py-32 px-6 md:px-20" id="contact">
      <div className="max-w-[1280px] mx-auto glass-card p-8 md:p-20 rounded-[48px] overflow-hidden relative">
        <div className="hero-blob right-[-20%] top-[-10%] bg-primary/20 opacity-50" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Let's Create Something Iconic.</h2>
              <p className="text-on-surface-variant text-lg font-medium">Available for freelance and permanent opportunities.</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-1">Email</span>
                  <span className="text-lg font-bold">naufal.ramadhan@example.com</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-1">Location</span>
                  <span className="text-lg font-bold">Malang, Indonesia</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: "rgba(173,198,255,0.2)" }}
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-all border border-white/10"
              >
                <Share2 size={20} />
              </motion.button>
            </div>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest ml-2 text-on-surface/60">Your Name</label>
                <input 
                  className="w-full bg-surface-container-high/50 border border-white/5 rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-highest transition-all outline-none" 
                  placeholder="John Doe" 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest ml-2 text-on-surface/60">Your Email</label>
                <input 
                  className="w-full bg-surface-container-high/50 border border-white/5 rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-highest transition-all outline-none" 
                  placeholder="john@example.com" 
                  type="email" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest ml-2 text-on-surface/60">Message</label>
              <textarea 
                className="w-full bg-surface-container-high/50 border border-white/5 rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-highest transition-all outline-none resize-none" 
                placeholder="Tell me about your project..." 
                rows={5}
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(173,198,255,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-primary text-on-primary rounded-2xl font-bold transition-all shadow-lg text-lg uppercase tracking-widest" 
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </SectionReveal>
  );
}
