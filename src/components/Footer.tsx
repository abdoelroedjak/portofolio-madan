export default function Footer() {
  const socials = ["LinkedIn", "Instagram", "Dribbble", "Behance"];

  return (
    <footer className="bg-surface-container-lowest border-t border-white/5 py-12 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-black tracking-tighter text-on-surface mb-2">MADAN</span>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
            © 2024 Muhammad Naufal Ramadhan. Digital Craftsmanship.
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mt-1">Malang, Indonesia</p>
        </div>
        
        <div className="flex gap-8">
          {socials.map(social => (
            <a 
              key={social}
              href="#" 
              className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
