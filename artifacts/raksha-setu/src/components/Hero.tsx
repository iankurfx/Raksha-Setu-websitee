import { motion } from "framer-motion";
import { Shield, ShieldCheck, ShieldAlert, MapPin, Phone, Bell, Users, Wifi, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingCards = [
  {
    icon: ShieldCheck,
    iconColor: "text-[#2DD36F]",
    bg: "bg-[#2DD36F]/10",
    title: "SOS Sent",
    sub: "3 contacts alerted",
    delay: 0,
    position: "top-[6%] right-[2%]",
    animate: { y: [0, -14, 0], rotate: [0, 2, 0] },
  },
  {
    icon: MapPin,
    iconColor: "text-[#E94F87]",
    bg: "bg-[#E94F87]/10",
    title: "Location Shared",
    sub: "Live • Encrypted",
    delay: 0.6,
    position: "top-[38%] right-[-4%]",
    animate: { y: [0, 12, 0], rotate: [0, -2, 0] },
  },
  {
    icon: Phone,
    iconColor: "text-[#FF6EA9]",
    bg: "bg-[#FF6EA9]/10",
    title: "Fake Call",
    sub: "Escape activated",
    delay: 1.2,
    position: "bottom-[14%] right-[4%]",
    animate: { y: [0, -10, 0], rotate: [0, 3, 0] },
  },
  {
    icon: Users,
    iconColor: "text-[#E94F87]",
    bg: "bg-[#E94F87]/10",
    title: "Trusted Contacts",
    sub: "4 contacts ready",
    delay: 0.4,
    position: "top-[22%] left-[-2%]",
    animate: { y: [0, 16, 0], rotate: [0, -3, 0] },
  },
  {
    icon: Wifi,
    iconColor: "text-[#2DD36F]",
    bg: "bg-[#2DD36F]/10",
    title: "Offline Ready",
    sub: "No internet needed",
    delay: 1.0,
    position: "bottom-[28%] left-[0%]",
    animate: { y: [0, -12, 0], rotate: [0, 2, 0] },
  },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background */}
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Emergency Safety App
            </div>

            <h1 className="text-5xl lg:text-7xl font-heading font-black text-white leading-[1.05] tracking-tight mb-6">
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
              <Button
                size="lg"
                data-testid="button-download-now"
                className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(233,79,135,0.4)] hover:shadow-[0_0_50px_rgba(233,79,135,0.7)] transition-all rounded-full px-8 h-14 text-lg font-semibold border-none"
              >
                Download Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                data-testid="button-learn-more"
                className="rounded-full px-8 h-14 text-lg font-semibold border-white/20 hover:bg-white/5 text-white"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground flex-wrap">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#2DD36F]" />
                <span>No Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-primary" />
                <span>Works Offline</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-secondary" />
                <span>Privacy First</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content — Animated Shield Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[520px] lg:h-[640px] flex items-center justify-center"
          >
            {/* Pink glow blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] bg-primary/25 rounded-full blur-[90px] pointer-events-none" />

            {/* Outer pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.18, 1], opacity: [0.2, 0.08, 0.2] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[340px] h-[340px] rounded-full border border-primary/30"
            />
            {/* Middle pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute w-[260px] h-[260px] rounded-full border border-primary/40"
            />
            {/* Inner ring */}
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.15, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute w-[200px] h-[200px] rounded-full border border-primary/50"
            />

            {/* Central Shield */}
            <motion.div
              animate={{ y: [-8, 8, -8], scale: [1, 1.02, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-[140px] h-[140px] flex items-center justify-center"
            >
              {/* Shield glow background */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[30px]" />
              {/* Glass circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-sm shadow-2xl" />
              {/* Shield icon */}
              <Shield
                className="relative z-10 text-primary drop-shadow-[0_0_20px_rgba(233,79,135,0.9)]"
                style={{ width: 70, height: 70 }}
                strokeWidth={1.5}
              />
            </motion.div>

            {/* SOS pulse indicator */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-10 w-6 h-6 rounded-full bg-[#FF3B4A]/40 border-2 border-[#FF3B4A]"
              style={{ top: "calc(50% - 58px)", left: "calc(50% + 46px)" }}
            />
            <div
              className="absolute z-10 w-3 h-3 rounded-full bg-[#FF3B4A]"
              style={{ top: "calc(50% - 50px)", left: "calc(50% + 54px)" }}
            />

            {/* Floating status cards */}
            {floatingCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  className={`absolute ${card.position} z-30`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + card.delay, duration: 0.6 }}
                >
                  <motion.div
                    animate={card.animate}
                    transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
                    className="px-4 py-3 rounded-2xl bg-[#17171A]/80 backdrop-blur-md border border-white/10 shadow-xl flex items-center gap-3 min-w-[170px]"
                  >
                    <div className={`w-9 h-9 rounded-xl ${card.bg} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold leading-tight">{card.title}</div>
                      <div className="text-muted-foreground text-xs mt-0.5">{card.sub}</div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Bottom stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 px-6 py-3 rounded-2xl bg-[#17171A]/80 backdrop-blur-md border border-white/10 shadow-xl flex items-center gap-6"
            >
              <div className="text-center">
                <div className="text-primary font-heading font-bold text-lg leading-none">0.3s</div>
                <div className="text-muted-foreground text-xs mt-1">Response</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-[#2DD36F] font-heading font-bold text-lg leading-none">100%</div>
                <div className="text-muted-foreground text-xs mt-1">Private</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-secondary font-heading font-bold text-lg leading-none">24/7</div>
                <div className="text-muted-foreground text-xs mt-1">Active</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
