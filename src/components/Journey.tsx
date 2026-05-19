import SectionReveal from "./SectionReveal";

const milestones = [
  { year: "2023 - Present", title: "Kadiv DKV", org: "Himpunan HI UMM", color: "bg-primary" },
  { year: "2022 - 2023", title: "Media Team", org: "Prodi HI UMM", color: "bg-secondary" },
  { year: "2022", title: "Juara 3 Cinematography", org: "PSNMHII Awards", color: "bg-tertiary" },
  { year: "2022", title: "Volunteer", org: "Putra Putri Kampus UMM", color: "bg-primary-container" },
];

export default function Journey() {
  return (
    <SectionReveal className="py-32 px-6 md:px-20 bg-surface-container-low" id="journey">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-20">
          <span className="text-[12px] font-bold text-primary tracking-[0.4em] mb-4 block uppercase">MILESTONES</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Professional Journey</h2>
        </div>
        
        <div className="relative space-y-12">
          {/* Vertical line for desktop */}
          <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
          
          {milestones.map((item, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
              <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="glass-card p-8 rounded-2xl inline-block text-left w-full max-w-md group hover:border-primary/50 transition-all">
                  <span className={`font-bold text-sm mb-2 block ${item.color.replace("bg-", "text-")}`}>{item.year}</span>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-on-surface-variant font-medium">{item.org}</p>
                </div>
              </div>
              
              {/* Dot */}
              <div className={`absolute left-0 md:left-1/2 md:-ml-2 w-4 h-4 rounded-full ${item.color} ring-8 ring-white/5 z-10 transition-transform duration-500 scale-100 group-hover:scale-125`} />
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
