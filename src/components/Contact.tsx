import { Mail, MapPin } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { motion } from "motion/react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "6282243154938";
    const text = `Halo Naufal!
    
Nama: ${formData.name}
Email: ${formData.email}
Pesan: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <SectionReveal className="py-40 px-6 md:px-12 bg-surface-dim" id="contact">
      <div className="max-w-[1400px] mx-auto overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
          <div className="space-y-16">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-[1px] bg-primary" />
                <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Contact</span>
              </motion.div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                LET'S CREATE <br />
                <span className="text-primary">ART.</span>
              </h2>
            </div>
            
            <div className="space-y-12">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-none bg-primary flex items-center justify-center text-on-primary group-hover:bg-primary-container transition-colors duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.3em] font-black text-on-surface-variant mb-2">Inquiries</span>
                  <span className="text-xl font-bold border-b border-transparent group-hover:border-on-surface transition-all text-white">naufal.ramadhan@example.com</span>
                </div>
              </div>
              
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-none bg-primary flex items-center justify-center text-on-primary group-hover:bg-primary-container transition-colors duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.3em] font-black text-on-surface-variant mb-2">Location</span>
                  <span className="text-xl font-bold transition-all text-white">Malang, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface/40">Full Name</label>
                <input 
                  className="w-full bg-transparent border-b border-outline/30 focus:border-on-surface transition-all outline-none py-4 text-sm font-medium text-white" 
                  placeholder="Your Name" 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface/40">Email Address</label>
                <input 
                  className="w-full bg-transparent border-b border-outline/30 focus:border-on-surface transition-all outline-none py-4 text-sm font-medium text-white" 
                  placeholder="your@email.com" 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface/40">Your Vision</label>
              <textarea 
                className="w-full bg-transparent border-b border-outline/30 focus:border-on-surface transition-all outline-none py-4 text-sm font-medium resize-none text-white" 
                placeholder="Tell me about your design needs..." 
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-primary text-on-primary font-bold transition-all text-[11px] uppercase tracking-[0.4em]" 
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
