import { useState } from "react";
import SectionReveal from "./SectionReveal";
import { Eye, Play, ExternalLink, Brush, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const works = [
  {
    title: "Culinary Voyage",
    category: "Poster",
    icon: Eye,
    image: "https://drive.google.com/thumbnail?id=1G0-oc-wMXyHCxNwc_31kqXamRNm1M65v&sz=w1000",
    height: "h-96"
  },
  {
    title: "UINAM Recap",
    category: "Poster",
    icon: Eye,
    image: "https://drive.google.com/thumbnail?id=1pq-i4Bni6VUOyfA5jaSo1ARlPbsmffcd&sz=w1000",
    height: "h-[450px]"
  },
  {
    title: "Sembagi Arutala",
    category: "Poster",
    icon: Eye,
    image: "https://drive.google.com/thumbnail?id=1J3hTVkqfjJZcMAFS4JH8DB7I26hHxm6G&sz=w1000",
    height: "h-[400px]"
  },
  {
    title: "IROS 2024",
    category: "Poster",
    icon: Eye,
    image: "https://drive.google.com/thumbnail?id=1omeydJml5JM_rtBatvnwMuEiiMZZ6wpY&sz=w1000",
    height: "h-[500px]"
  },
  {
    title: "Nuclear Agreement",
    category: "Poster",
    icon: Eye,
    image: "https://drive.google.com/thumbnail?id=1RwpHyLPem5pl4Rnye-GHjPHONEAzmBZo&sz=w1000",
    height: "h-[450px]"
  },
  {
    title: "Atmospheral 3.0",
    category: "Poster",
    icon: Eye,
    image: "https://drive.google.com/thumbnail?id=1mJ-b1xF3QX-ocBt3vjfQXr6H50psF4PO&sz=w1000",
    height: "h-[500px]"
  },
  {
    title: "Grand Finalist",
    category: "Poster",
    icon: Eye,
    image: "https://drive.google.com/thumbnail?id=1KhSDgVTpShWY6nTLGwMmzJaAV1n_mYhc&sz=w1000",
    height: "h-[450px]"
  },
  {
    title: "Roundtable Discussion",
    category: "Poster",
    icon: Eye,
    image: "https://drive.google.com/thumbnail?id=1va0nCL3zWmvbLvV91RKTlgKjG5kR-ef1&sz=w1000",
    height: "h-[400px]"
  },
  {
    title: "Perang Asimetris",
    category: "Poster",
    icon: Eye,
    image: "https://drive.google.com/thumbnail?id=1Q7OAtiseyVt4XRV65W3DcZw4fW488g_O&sz=w1000",
    height: "h-[500px]"
  },
  {
    title: "Video Cinematic 1",
    category: "Video",
    icon: Play,
    image: "https://drive.google.com/thumbnail?id=1XEt_tPVegojp0PzxvCdQ-dowV57BvEGP&sz=w1000",
    video: "https://drive.google.com/file/d/1XEt_tPVegojp0PzxvCdQ-dowV57BvEGP/preview",
    height: "h-[500px]"
  }
];

const categories = ["All", "Poster", "Video", "Certification"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredWorks = works.filter(w => activeTab === "All" || w.category === activeTab);

  return (
    <SectionReveal className="py-32 px-6 md:px-20" id="portfolio">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[12px] font-bold text-primary tracking-[0.4em] block mb-4 uppercase">SELECTED WORKS</span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">Visual Portfolio</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all border ${activeTab === cat ? "bg-primary text-on-primary border-primary" : "glass-card text-on-surface-variant hover:text-on-surface border-white/10"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                key={work.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl overflow-hidden group cursor-pointer relative"
                onClick={() => work.video && setSelectedVideo(work.video)}
              >
                <div className={`relative ${work.height}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col justify-end p-8">
                    <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">{work.category}</span>
                    <h3 className="text-2xl font-bold mb-4">{work.title}</h3>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center"
                    >
                      <work.icon size={20} />
                    </motion.button>
                  </div>
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={work.image} 
                    alt={work.title}
                    referrerPolicy="no-referrer"
                  />
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
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10 bg-surface/95 backdrop-blur-xl"
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
