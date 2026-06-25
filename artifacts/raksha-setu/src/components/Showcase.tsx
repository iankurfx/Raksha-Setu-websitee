import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// ADD YOUR APP SCREENSHOTS HERE
// 1. Copy your image files into:  artifacts/raksha-setu/public/screenshots/
//    (e.g. public/screenshots/screen1.png, screen2.png, …)
// 2. Add their public URLs to the array below — they map 1-to-1 to slides.
// ─────────────────────────────────────────────────────────────────────────────
const APP_SCREENSHOTS: { src: string; label: string }[] = [
  { src: "/screenshots/screen1.png", label: "Home Screen" },
  { src: "/screenshots/screen2.png", label: "SOS Activated" },
  { src: "/screenshots/screen3.png", label: "Live Location" },
  { src: "/screenshots/screen4.png", label: "Trusted Contacts" },
  { src: "/screenshots/screen5.png", label: "Fake Call" },
];

// Fallback placeholder shown when a screenshot hasn't been added yet
function PhonePlaceholder({ label, index }: { label: string; index: number }) {
  const hues = ["#E94F87", "#FF6EA9", "#2DD36F", "#E94F87", "#FF3B4A"];
  const color = hues[index % hues.length];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-[#111113]">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-heading font-black"
        style={{ background: `${color}22`, color }}
      >
        {index + 1}
      </div>
      <p className="text-muted-foreground text-sm font-medium px-4 text-center">{label}</p>
      <p className="text-white/20 text-xs px-6 text-center">
        Drop your screenshot in<br />
        <code className="text-white/30">public/screenshots/screen{index + 1}.png</code>
      </p>
    </div>
  );
}

function Screenshot({ src, label, index }: { src: string; label: string; index: number }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return error || !src ? (
    <PhonePlaceholder label={label} index={index} />
  ) : (
    <>
      {!loaded && <PhonePlaceholder label={label} index={index} />}
      <img
        src={src}
        alt={label}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0 absolute inset-0"}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </>
  );
}

export default function Showcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center mb-14 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
        >
          App Preview
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
        >
          See It In Action
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-md mx-auto"
        >
          Designed for speed. Built for moments that matter.
        </motion.p>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden z-10" ref={emblaRef}>
        <div className="flex touch-pan-y" style={{ backfaceVisibility: "hidden" }}>
          {APP_SCREENSHOTS.map((screen, index) => (
            <motion.div
              key={index}
              className="flex-[0_0_72%] sm:flex-[0_0_48%] md:flex-[0_0_32%] lg:flex-[0_0_22%] min-w-0 px-3"
              animate={{
                scale: selectedIndex === index ? 1 : 0.9,
                opacity: selectedIndex === index ? 1 : 0.45,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Phone frame */}
              <div className="relative" style={{ paddingTop: "210%" }}>
                <div className="absolute inset-0">
                  {/* Glow on selected */}
                  {selectedIndex === index && (
                    <div className="absolute -inset-2 bg-primary/20 rounded-[3rem] blur-2xl pointer-events-none" />
                  )}

                  <div className="relative w-full h-full rounded-[2.8rem] border-[7px] border-zinc-800 bg-zinc-950 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                    {/* Status bar */}
                    <div className="absolute top-0 inset-x-0 h-7 bg-black/60 z-10 flex items-center justify-center">
                      <div className="w-20 h-4 bg-zinc-800 rounded-b-xl" />
                    </div>

                    {/* Screenshot */}
                    <Screenshot src={screen.src} label={screen.label} index={index} />

                    {/* Bottom bar glow */}
                    <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-black/60 to-transparent z-10" />

                    {/* Active pink inner shadow */}
                    {selectedIndex === index && (
                      <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(233,79,135,0.2)] pointer-events-none rounded-[2rem] z-20" />
                    )}
                  </div>

                  {/* Label below phone */}
                  <p className="text-center text-muted-foreground text-sm font-medium mt-4">
                    {screen.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-10 relative z-10">
        <button
          data-testid="button-showcase-prev"
          onClick={scrollPrev}
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-primary/40 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {APP_SCREENSHOTS.map((_, idx) => (
          <button
            key={idx}
            data-testid={`button-showcase-dot-${idx}`}
            className={`rounded-full transition-all duration-300 ${
              selectedIndex === idx
                ? "bg-primary w-8 h-2.5"
                : "bg-white/20 hover:bg-white/40 w-2.5 h-2.5"
            }`}
            onClick={() => emblaApi?.scrollTo(idx)}
            aria-label={`Go to screen ${idx + 1}`}
          />
        ))}

        <button
          data-testid="button-showcase-next"
          onClick={scrollNext}
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-primary/40 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
