import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ end, suffix = "", prefix = "" }: { end: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const duration = 2000;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeProgress * end));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, end]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { value: 0, label: "Servers / Tracking" },
    { value: 100, suffix: "%", label: "Privacy Guarantee" },
    { value: 24, suffix: "/7", label: "Active Protection" },
    { custom: "0.5s", label: "Instant SOS" },
    { custom: "100%", label: "Offline Ready" }
  ];

  return (
    <section className="py-12 bg-[#0e0e11] border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                {stat.custom ? (
                  stat.custom
                ) : (
                  <Counter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                )}
              </div>
              <div className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}