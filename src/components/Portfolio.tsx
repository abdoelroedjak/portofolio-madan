import { useState } from "react";
import SectionReveal from "./SectionReveal";
import { Eye, Play, ExternalLink, Brush, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const works = [
  {
    title: "Culinary Voyage",
    category: "Poster",
    description: "Digital narrative focusing on culinary exploration.",
    image: "https://drive.google.com/thumbnail?id=1G0-oc-wMXyHCxNwc_31kqXamRNm1M65v&sz=w1000"
  },
  {
    title: "UINAM Recap",
    category: "Poster",
    description: "Visual summary for university regional events.",
    image: "https://drive.google.com/thumbnail?id=1pq-i4Bni6VUOyfA5jaSo1ARlPbsmffcd&sz=w1000"
  },
  {
    title: "Sembagi Arutala",
    category: "Poster",
    description: "Geometric and abstract representational design.",
    image: "https://drive.google.com/thumbnail?id=1J3hTVkqfjJZcMAFS4JH8DB7I26hHxm6G&sz=w1000"
  },
  {
    title: "IROS 2024",
    category: "Poster",
    description: "Official event poster for international robotics seminar.",
    image: "https://drive.google.com/thumbnail?id=1omeydJml5JM_rtBatvnwMuEiiMZZ6wpY&sz=w1000"
  },
  {
    title: "Nuclear Agreement",
    category: "Poster",
    description: "Strategic visual for complex geopolitical topics.",
    image: "https://drive.google.com/thumbnail?id=1RwpHyLPem5pl4Rnye-GHjPHONEAzmBZo&sz=w1000"
  },
  {
    title: "Atmospheral 3.0",
    category: "Poster",
    description: "Creative design for annual media expo.",
    image: "https://drive.google.com/thumbnail?id=1mJ-b1xF3QX-ocBt3vjfQXr6H50psF4PO&sz=w1000"
  },
  {
    title: "Grand Finalist",
    category: "Poster",
    description: "Achievement recognition visual artwork.",
    image: "https://drive.google.com/thumbnail?id=1KhSDgVTpShWY6nTLGwMmzJaAV1n_mYhc&sz=w1000"
  },
  {
    title: "Roundtable Discussion",
    category: "Poster",
    description: "Clean layout for academic events.",
    image: "https://drive.google.com/thumbnail?id=1va0nCL3zWmvbLvV91RKTlgKjG5kR-ef1&sz=w1000"
  },
  {
    title: "Cinematic Motion",
    category: "Video",
    description: "Professional video editing and cinematic storytelling.",
    image: "https://drive.google.com/thumbnail?id=1XEt_tPVegojp0PzxvCdQ-dowV57BvEGP&sz=w1000",
    video: "https://drive.google.com/file/d/1XEt_tPVegojp0PzxvCdQ-dowV57BvEGP/preview"
  }
];

const categories = ["All", "Poster", "Video", "Certificate"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredWorks = works.filter(w => activeTab === "All" || w.category === activeTab);

  return (
    <SectionReveal className="py-40 px-6 md:px-12 bg-transparent" id="portfolio">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Gallery</span>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tight text-white">OUR WORK.</h2>
          </div>

          <div className="flex flex-wrap gap-8">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] pb-2 transition-all border-b-2 ${activeTab === cat ? "text-primary border-primary" : "text-on-surface-variant border-transparent opacity-40 hover:opacity-100"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                key={work.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10, transition: { duration: 0.4 } }}
                className="relative group cursor-pointer overflow-hidden rounded-[2rem] aspect-[4/5] glass-card border-white/5"
                onClick={() => {
                  if (work.video) setSelectedVideo(work.video);
                }}
              >
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                
                <img 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                  src={work.image} 
                  alt={work.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <span className="text-[10px] font-bold text-primary tracking-[0.4em] uppercase mb-2">{work.category}</span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-white mb-1">{work.title}</h3>
                    {work.video && <Play size={20} className="text-primary" />}
                  </div>
                  <p className="text-xs text-white/50">{work.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-all"
              >
                <X size={24} />
              </button>
              <iframe
                src={selectedVideo}
                className="w-full h-full border-none"
                allow="autoplay"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionReveal>
  );
}
