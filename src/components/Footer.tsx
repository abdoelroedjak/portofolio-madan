export default function Footer() {
  const socials = ["LinkedIn", "Instagram", "Dribbble", "Behance"];

  return (
    <footer className="bg-surface border-t border-outline/10 py-20 px-6 md:px-12 relative z-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <span className="text-3xl font-display font-black tracking-[0.2em] text-on-surface">MADAN</span>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface-variant opacity-60">
            © 2026 MUHAMMAD NAUFAL RAMADHAN. 
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Precision in every pixel.</p>
        </div>
        
        <div className="flex gap-12">
          {socials.map(social => (
            <a 
              key={social}
              href="#" 
              className="text-[10px] font-bold uppercase tracking-[0.5em] text-on-surface-variant hover:text-on-surface transition-all"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
