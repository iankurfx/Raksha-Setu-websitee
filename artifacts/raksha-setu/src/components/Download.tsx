import { motion } from "framer-motion";
import { SiGoogleplay, SiApple } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function DownloadSection() {
  return (
    <section className="py-32 relative overflow-hidden border-t border-white/10 bg-[#070709]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(233,79,135,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tight">
            Ready To Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Safe?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Download Raksha Setu Today. Your silent bridge to safety is just one tap away.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="https://play.google.com/store/apps/details?id=com.studioankur.rakshasetu" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-white hover:bg-white/90 text-black rounded-full px-8 h-16 text-lg font-bold shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all flex items-center gap-3">
                <SiGoogleplay size={24} />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] uppercase font-semibold">Get it on</span>
                  <span className="text-base">Google Play</span>
                </div>
              </Button>
            </a>
            
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 h-16 text-lg font-semibold border-white/20 bg-transparent text-white/50 cursor-not-allowed flex items-center gap-3" disabled>
              <SiApple size={24} />
              <div className="flex flex-col items-start leading-tight text-left">
                <span className="text-[10px] uppercase font-semibold text-white/40">Coming Soon on</span>
                <span className="text-base">App Store</span>
              </div>
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">Version 2.0 • Requires Android 8.0+</p>
        </motion.div>
      </div>
    </section>
  );
}