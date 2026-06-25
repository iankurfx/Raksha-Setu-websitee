import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import appScreenshot from "@assets/image_1782424246724.png";

export default function Showcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const frames = [1, 2, 3, 4, 5];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center mb-12 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
        >
          See It In Action
        </motion.h2>
      </div>

      <div className="relative w-full overflow-hidden z-10" ref={emblaRef}>
        <div className="flex touch-pan-y" style={{ backfaceVisibility: "hidden" }}>
          {frames.map((_, index) => (
            <div 
              key={index}
              className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_35%] lg:flex-[0_0_25%] min-w-0 px-4 transition-opacity duration-300"
              style={{ opacity: selectedIndex === index ? 1 : 0.4 }}
            >
              <div className="relative pt-[200%] w-full">
                <div className="absolute inset-0">
                  <div className="w-full h-full rounded-[2.5rem] border-[6px] border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl relative">
                    <img 
                      src={appScreenshot} 
                      alt="Raksha Setu App Screen" 
                      className="w-full h-full object-cover"
                    />
                    {selectedIndex === index && (
                      <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(233,79,135,0.3)] pointer-events-none" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-2 mt-8 relative z-10">
        {frames.map((_, idx) => (
          <button
            key={idx}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              selectedIndex === idx ? "bg-primary w-8" : "bg-white/20 hover:bg-white/40"
            }`}
            onClick={() => emblaApi?.scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}