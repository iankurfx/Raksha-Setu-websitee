import { motion } from "framer-motion";
import { Shield, ShieldCheck, Lock, MapPin, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  { x: 155, y: 155, label: "Priya",  color: "#2DD36F", delay: 0,   pulse: true,  isYou: false },
  { x: 310, y: 260, label: "You",    color: "#E94F87", delay: 0.3,  pulse: true,  isYou: true  },
  { x: 90,  y: 310, label: "Arjun",  color: "#FF6EA9", delay: 0.6,  pulse: false, isYou: false },
  { x: 390, y: 180, label: "Mom",    color: "#2DD36F", delay: 0.9,  pulse: false, isYou: false },
];

const blocks = [
  [10,10,100,140],[130,10,130,140],[280,10,80,100],
  [10,170,90,130],[10,330,80,80],[100,340,100,120],
  [220,350,80,100],[320,340,140,120],[330,200,120,120],
  [220,200,80,120],[220,130,40,50],[130,170,70,100],
  [130,280,70,40],[380,100,90,60],
];

const roads = [
  { d: "M 0 180 Q 80 160 160 180 Q 240 200 320 180 Q 400 160 480 180", w: 14, cw: 10, dash: false },
  { d: "M 0 320 Q 100 310 200 320 Q 300 330 400 320 Q 440 315 480 320", w: 14, cw: 10, dash: false },
  { d: "M 120 0 Q 130 80 120 160 Q 110 240 120 320 Q 130 400 120 480", w: 14, cw: 10, dash: false },
  { d: "M 280 0 Q 290 80 280 160 Q 270 240 280 320 Q 290 400 280 480", w: 14, cw: 10, dash: false },
  { d: "M 0 440 Q 120 430 200 440 Q 300 450 480 440", w: 10, cw: 6, dash: true },
  { d: "M 60 0 Q 55 120 60 240 Q 65 360 60 480",      w: 10, cw: 6, dash: true },
  { d: "M 380 0 Q 385 140 380 260 Q 375 380 380 480",  w: 10, cw: 6, dash: true },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/15 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] opacity-25 -translate-x-1/3 translate-y-1/3" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT: copy */}
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

          {/* RIGHT: Live Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Outer ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-primary/15 rounded-full blur-[90px] pointer-events-none" />

            {/* Floating map card */}
            <motion.div
              animate={{ y: [-7, 7, -7] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[480px] max-w-full aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.75)] bg-[#0c0c10]"
            >
              <svg
                viewBox="0 0 480 480"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Base */}
                <rect width="480" height="480" fill="#0d0d12" />

                {/* City blocks */}
                {blocks.map(([x, y, w, h], i) => (
                  <rect key={i} x={x} y={y} width={w} height={h} rx={4}
                    fill={i % 3 === 0 ? "#131318" : i % 3 === 1 ? "#111116" : "#0f0f14"}
                    stroke="#1a1a22" strokeWidth={1}
                  />
                ))}

                {/* Roads — dark base */}
                {roads.map((r, i) => (
                  <path key={`rb-${i}`} d={r.d} stroke="#1e1e2c" strokeWidth={r.w} fill="none" strokeLinecap="round" />
                ))}
                {/* Roads — lighter centre lane */}
                {roads.map((r, i) => (
                  <path key={`rc-${i}`} d={r.d} stroke="#252535" strokeWidth={r.cw} fill="none"
                    strokeLinecap="round" strokeDasharray={r.dash ? "8 8" : "none"} />
                ))}

                {/* Route: You → Priya (animated draw) */}
                <motion.path
                  d="M 310 260 Q 230 210 155 155"
                  stroke="#E94F87" strokeWidth={2.5} fill="none"
                  strokeLinecap="round" strokeDasharray="6 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.75 }}
                  transition={{ duration: 1.4, delay: 1.2, ease: "easeOut" }}
                />

                {/* Safe-zone halos (use transform scale so r stays fixed) */}
                {[{ cx: 155, cy: 155 }, { cx: 390, cy: 180 }].map((z, i) => (
                  <g key={i} style={{ transformOrigin: `${z.cx}px ${z.cy}px`, transformBox: "fill-box" }}>
                    <circle cx={z.cx} cy={z.cy} r={42}
                      fill="#2DD36F" fillOpacity={0.07}
                      stroke="#2DD36F" strokeOpacity={0.22} strokeWidth={1.5}
                    />
                    {/* CSS keyframe pulse ring via inline style */}
                    <circle cx={z.cx} cy={z.cy} r={42}
                      fill="none" stroke="#2DD36F" strokeOpacity={0.12} strokeWidth={1}
                      style={{ animation: `ping ${2.5 + i * 0.5}s ease-out ${i * 0.4}s infinite` }}
                    />
                  </g>
                ))}

                {/* Contact pins */}
                {contacts.map((c, i) => (
                  <motion.g
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + c.delay, duration: 0.5, type: "spring" }}
                    style={{ transformOrigin: `${c.x}px ${c.y}px`, transformBox: "fill-box" }}
                  >
                    {/* Pulse ring — CSS animation to avoid animating r */}
                    {c.pulse && (
                      <circle
                        cx={c.x} cy={c.y} r={c.isYou ? 20 : 16}
                        fill={c.color} fillOpacity={0.15}
                        style={{
                          transformOrigin: `${c.x}px ${c.y}px`,
                          transformBox: "fill-box",
                          animation: `scalePing 2.4s ease-out ${c.delay}s infinite`,
                        }}
                      />
                    )}
                    {/* Main dot */}
                    <circle
                      cx={c.x} cy={c.y} r={c.isYou ? 10 : 7}
                      fill={c.color}
                      style={{ filter: `drop-shadow(0 0 7px ${c.color})` }}
                    />
                    {/* Inner white core */}
                    <circle cx={c.x} cy={c.y} r={c.isYou ? 4 : 2.5} fill="white" fillOpacity={0.9} />

                    {/* Label pill */}
                    <rect
                      x={c.x - 22} y={c.y - (c.isYou ? 30 : 26)}
                      width={44} height={17} rx={8}
                      fill="#17171A" stroke={c.color} strokeOpacity={0.5} strokeWidth={1}
                    />
                    <text
                      x={c.x} y={c.y - (c.isYou ? 18 : 14)}
                      textAnchor="middle" fill={c.color}
                      fontSize={9} fontFamily="Inter, sans-serif" fontWeight="600"
                    >
                      {c.label}
                    </text>
                  </motion.g>
                ))}

                {/* SOS live badge */}
                <motion.g
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2, duration: 0.5, type: "spring" }}
                  style={{ transformOrigin: "288px 233px", transformBox: "fill-box" }}
                >
                  <rect x={252} y={220} width={72} height={26} rx={13}
                    fill="#FF3B4A" fillOpacity={0.14}
                    stroke="#FF3B4A" strokeOpacity={0.45} strokeWidth={1}
                  />
                  <circle cx={266} cy={233} r={4} fill="#FF3B4A">
                    <animate attributeName="opacity" values="1;0.25;1" dur="1.2s" repeatCount="indefinite" />
                  </circle>
                  <text x={278} y={237} fill="#FF3B4A" fontSize={9}
                    fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="0.5">
                    SOS LIVE
                  </text>
                </motion.g>

                {/* Inline keyframe styles */}
                <defs>
                  <style>{`
                    @keyframes scalePing {
                      0%   { transform: scale(1);   opacity: 0.18; }
                      70%  { transform: scale(2.2); opacity: 0; }
                      100% { transform: scale(2.2); opacity: 0; }
                    }
                    @keyframes ping {
                      0%   { transform: scale(1);   opacity: 0.15; }
                      70%  { transform: scale(1.5); opacity: 0; }
                      100% { transform: scale(1.5); opacity: 0; }
                    }
                  `}</style>
                </defs>
              </svg>

              {/* Edge fade overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/65 via-transparent to-[#09090B]/30 pointer-events-none rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#09090B]/40 via-transparent to-[#09090B]/40 pointer-events-none rounded-3xl" />

              {/* Top-left: Live Map pill */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/55 backdrop-blur-sm border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span className="text-white/80 text-xs font-medium">Live Map</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#2DD36F] animate-pulse" />
              </div>

              {/* Top-right: contacts online */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-black/55 backdrop-blur-sm border border-white/10">
                <span className="text-white/60 text-xs">4 contacts </span>
                <span className="text-[#2DD36F] text-xs font-semibold">● online</span>
              </div>

              {/* Bottom status bar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.3, duration: 0.6 }}
                className="absolute bottom-0 inset-x-0 px-5 py-4 bg-gradient-to-t from-[#09090B] via-[#09090B]/80 to-transparent"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-white text-sm font-semibold">Protected</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DD36F]" />
                      Encrypted
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      No servers
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
