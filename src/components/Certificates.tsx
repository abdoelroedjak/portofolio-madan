import SectionReveal from "./SectionReveal";

const certificates = [];

export default function Certificates() {
  return (
    <SectionReveal className="py-32 px-6 md:px-20 bg-surface-container-highest" id="certificates">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Certification</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <div key={i} className="glass-card p-4 rounded-3xl group">
              <div className="aspect-video bg-white/5 rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={cert.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={cert.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl font-bold mb-1">{cert.title}</h4>
              <p className="text-on-surface-variant font-bold text-[10px] uppercase tracking-[0.2em]">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
