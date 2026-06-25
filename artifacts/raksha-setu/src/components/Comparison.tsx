import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function Comparison() {
  const features = [
    { name: "Offline Trigger", us: true, them: false },
    { name: "Voice Trigger", us: true, them: false },
    { name: "Volume Trigger", us: true, them: false },
    { name: "Fake Call", us: true, them: false },
    { name: "Privacy First", us: true, them: false },
    { name: "No Tracking", us: true, them: false },
    { name: "Modern UI", us: true, them: false },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Why Raksha Setu
          </h2>
          <p className="text-lg text-muted-foreground">
            We built what others wouldn't. True offline functionality with absolute privacy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-card overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-3 bg-white/5 border-b border-white/10">
            <div className="p-6 text-lg font-semibold text-white">Feature</div>
            <div className="p-6 text-lg font-semibold text-primary text-center bg-primary/5">Raksha Setu</div>
            <div className="p-6 text-lg font-semibold text-muted-foreground text-center">Other Apps</div>
          </div>
          
          <div className="divide-y divide-white/5">
            {features.map((feature, idx) => (
              <div key={idx} className="grid grid-cols-3 hover:bg-white/[0.02] transition-colors">
                <div className="p-5 flex items-center text-white/90 font-medium">
                  {feature.name}
                </div>
                <div className="p-5 flex items-center justify-center bg-primary/[0.02]">
                  {feature.us ? (
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                <div className="p-5 flex items-center justify-center">
                  {feature.them ? (
                    <Check className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground/30" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}