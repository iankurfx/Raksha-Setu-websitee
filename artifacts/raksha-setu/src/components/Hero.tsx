import { motion } from "framer-motion";
import { Shield, ShieldAlert, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import appScreenshot from "@assets/image_1782424246724.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] opacity-30 -translate-x-1/3 translate-y-1/3" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              v2.0 is now live
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-heading font-black text-white leading-[1.1] tracking-tight mb-6">
              YOUR SILENT <br />
              BRIDGE TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                SAFETY
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Your privacy-first emergency companion. Instant SOS alerts. Live location sharing. Offline emergency activation. Designed to protect when every second matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(233,79,135,0.4)] hover:shadow-[0_0_40px_rgba(233,79,135,0.6)] transition-all rounded-full px-8 h-14 text-lg font-semibold border-none">
                Download Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg font-semibold border-white/20 hover:bg-white/5 text-white">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-success" />
                <span>No Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-primary" />
                <span>Works Offline</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary" />
                <span>Privacy First</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[700px] flex items-center justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[280px] sm:w-[320px] aspect-[9/19.5] rounded-[3rem] border-[8px] border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl z-20"
            >
              <img 
                src={appScreenshot} 
                alt="Raksha Setu App Interface" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-zinc-800 rounded-b-xl" />
            </motion.div>
            
            {/* Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 lg:left-[70%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-primary/30 blur-[100px] rounded-full z-10" />
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[20%] right-[-5%] lg:right-[10%] p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl z-30"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">SOS Active</div>
                  <div className="text-success text-xs">Location Shared</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}