import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline/10">
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center h-24">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ letterSpacing: "0.3em" }}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl font-black tracking-[0.2em] text-on-surface cursor-pointer"
        >
          MADAN
        </motion.span>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2, color: "var(--color-primary)" }}
              transition={{ delay: i * 0.05 }}
              className="font-body text-[11px] uppercase tracking-[0.3em] text-on-surface-variant transition-all font-semibold relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "white", 
              color: "#002e6a",
              boxShadow: "0 0 20px rgba(173,198,255,0.2)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-8 py-3 bg-primary text-on-primary font-bold text-[10px] tracking-[0.3em] uppercase transition-all duration-300 rounded-full"
          >
            Let's Talk
          </motion.a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-on-surface"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-surface-container border-b border-white/10 overflow-hidden"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-on-surface-variant hover:text-on-surface py-2 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
