import { motion } from "framer-motion";
import { Shield, ShieldCheck, Lock, MapPin, ShieldAlert, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  { x: 180, y: 145, label: "Priya",  color: "#2DD36F", pulse: true,  isYou: false, delay: 0.2 },
  { x: 295, y: 275, label: "You",    color: "#E94F87", pulse: true,  isYou: true,  delay: 0.0 },
  { x: 95,  y: 295, label: "Arjun",  color: "#A78BFA", pulse: false, isYou: false, delay: 0.5 },
  { x: 385, y: 140, label: "Mom",    color: "#2DD36F", pulse: false, isYou: false, delay: 0.7 },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[130px] opacity-60 translate-x-1/4 -translate-y-1/4" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-4 items-center">

          {/* LEFT */}
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
              YOUR SILENT <br />BRIDGE TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SAFETY</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Your privacy-first emergency companion. Instant SOS alerts. Live location sharing. Offline emergency activation. Designed to protect when every second matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <Button size="lg" data-testid="button-download-now"
                className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(233,79,135,0.4)] hover:shadow-[0_0_50px_rgba(233,79,135,0.7)] transition-all rounded-full px-8 h-14 text-lg font-semibold border-none">
                Download Now
              </Button>
              <Button size="lg" variant="outline" data-testid="button-learn-more"
                className="rounded-full px-8 h-14 text-lg font-semibold border-white/20 hover:bg-white/5 text-white">
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground flex-wrap">
              {[
                { icon: ShieldCheck, color: "#2DD36F", label: "No Tracking" },
                { icon: ShieldAlert, color: "#E94F87", label: "Works Offline" },
                { icon: Lock,        color: "#A78BFA", label: "Privacy First" },
              ].map(({ icon: Icon, color, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-5 h-5" style={{ color }} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Map + floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Glow behind card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

            {/* Wrapper — extra padding for floating cards */}
            <div className="relative" style={{ width: 460, padding: "0 40px 0 40px" }}>

              {/* ── FLOATING CARD: SOS ─────────── */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute z-30 pointer-events-none"
                style={{ top: 62, right: -10 }}
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-2xl border shadow-2xl"
                  style={{
                    background: "rgba(14,10,20,0.88)",
                    borderColor: "rgba(233,79,135,0.35)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 8px 32px rgba(233,79,135,0.18)",
                    minWidth: 185,
                  }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(233,79,135,0.15)" }}>
                    <Shield className="w-5 h-5" style={{ color: "#E94F87" }} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold leading-tight">SOS Activated</div>
                    <div className="text-xs mt-0.5 flex items-center gap-1" style={{ color: "#E94F87" }}>
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse inline-block" style={{ background: "#E94F87" }} />
                      Contacts alerted
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* ── FLOATING CARD: Location ────── */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute z-30 pointer-events-none"
                style={{ bottom: 100, right: -10 }}
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-2xl border shadow-2xl"
                  style={{
                    background: "rgba(14,10,20,0.88)",
                    borderColor: "rgba(45,211,111,0.30)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 8px 32px rgba(45,211,111,0.12)",
                    minWidth: 175,
                  }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(45,211,111,0.12)" }}>
                    <MapPin className="w-5 h-5" style={{ color: "#2DD36F" }} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold leading-tight">Live Location</div>
                    <div className="text-xs mt-0.5" style={{ color: "#2DD36F" }}>Encrypted · Shared</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* ── FLOATING CARD: Contacts ───── */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute z-30 pointer-events-none"
                style={{ bottom: 130, left: -10 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-2xl border shadow-2xl"
                  style={{
                    background: "rgba(14,10,20,0.88)",
                    borderColor: "rgba(167,139,250,0.30)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 8px 32px rgba(167,139,250,0.12)",
                    minWidth: 170,
                  }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(167,139,250,0.12)" }}>
                    <Phone className="w-5 h-5" style={{ color: "#A78BFA" }} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold leading-tight">3 Notified</div>
                    <div className="text-xs mt-0.5" style={{ color: "#A78BFA" }}>Responded in 0.3s</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* ── MAP CARD ────────────────────── */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl overflow-hidden border"
                style={{
                  aspectRatio: "1 / 1",
                  background: "#0b0b14",
                  borderColor: "rgba(255,255,255,0.1)",
                  boxShadow: "0 40px 120px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.05)",
                }}
              >
                <svg viewBox="0 0 420 420" className="absolute inset-0 w-full h-full"
                  xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <style>{`
                      @keyframes svgPulse{0%,100%{transform:scale(1);opacity:.55}60%{transform:scale(2.5);opacity:0}}
                      @keyframes svgBlink{0%,100%{opacity:1}50%{opacity:.2}}
                    `}</style>
                    <radialGradient id="mapGlow" cx="70%" cy="66%" r="50%">
                      <stop offset="0%" stopColor="#E94F87" stopOpacity=".22"/>
                      <stop offset="100%" stopColor="#E94F87" stopOpacity="0"/>
                    </radialGradient>
                    <radialGradient id="gPink" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#E94F87" stopOpacity=".7"/>
                      <stop offset="100%" stopColor="#E94F87" stopOpacity="0"/>
                    </radialGradient>
                    <radialGradient id="gGreen" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#2DD36F" stopOpacity=".6"/>
                      <stop offset="100%" stopColor="#2DD36F" stopOpacity="0"/>
                    </radialGradient>
                    <radialGradient id="gPurple" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#A78BFA" stopOpacity=".55"/>
                      <stop offset="100%" stopColor="#A78BFA" stopOpacity="0"/>
                    </radialGradient>
                  </defs>

                  {/* Base */}
                  <rect width="420" height="420" fill="#0b0b14"/>

                  {/* CITY BLOCKS — subtle darker fills */}
                  {/* Row 1 */}
                  <rect x="6"   y="6"   width="118" height="82"  rx="3" fill="#101019" stroke="#181825" strokeWidth="1"/>
                  <rect x="6"   y="98"  width="118" height="62"  rx="3" fill="#0e0e17" stroke="#181825" strokeWidth="1"/>
                  <rect x="138" y="6"   width="104" height="82"  rx="3" fill="#101019" stroke="#181825" strokeWidth="1"/>
                  <rect x="138" y="98"  width="50"  height="62"  rx="3" fill="#0d0d16" stroke="#181825" strokeWidth="1"/>
                  <rect x="198" y="98"  width="50"  height="62"  rx="3" fill="#0f0f18" stroke="#181825" strokeWidth="1"/>
                  <rect x="258" y="6"   width="78"  height="82"  rx="3" fill="#0e0e17" stroke="#181825" strokeWidth="1"/>
                  <rect x="258" y="98"  width="34"  height="62"  rx="3" fill="#101019" stroke="#181825" strokeWidth="1"/>
                  <rect x="300" y="6"   width="114" height="82"  rx="3" fill="#0f0f18" stroke="#181825" strokeWidth="1"/>
                  <rect x="300" y="98"  width="114" height="62"  rx="3" fill="#0d0d16" stroke="#181825" strokeWidth="1"/>
                  {/* Row 2 */}
                  <rect x="6"   y="172" width="118" height="110" rx="3" fill="#0f0f18" stroke="#181825" strokeWidth="1"/>
                  <rect x="6"   y="292" width="118" height="54"  rx="3" fill="#101019" stroke="#181825" strokeWidth="1"/>
                  <rect x="138" y="172" width="50"  height="110" rx="3" fill="#0d0d16" stroke="#181825" strokeWidth="1"/>
                  <rect x="198" y="172" width="50"  height="110" rx="3" fill="#101019" stroke="#181825" strokeWidth="1"/>
                  <rect x="258" y="172" width="34"  height="50"  rx="3" fill="#0e0e17" stroke="#181825" strokeWidth="1"/>
                  <rect x="300" y="172" width="114" height="110" rx="3" fill="#0f0f18" stroke="#181825" strokeWidth="1"/>
                  <rect x="258" y="232" width="34"  height="50"  rx="3" fill="#0d0d16" stroke="#181825" strokeWidth="1"/>
                  {/* Row 3 */}
                  <rect x="6"   y="356" width="118" height="58"  rx="3" fill="#0e0e17" stroke="#181825" strokeWidth="1"/>
                  <rect x="138" y="356" width="104" height="58"  rx="3" fill="#101019" stroke="#181825" strokeWidth="1"/>
                  <rect x="258" y="292" width="156" height="58"  rx="3" fill="#0f0f18" stroke="#181825" strokeWidth="1"/>
                  <rect x="258" y="356" width="156" height="58"  rx="3" fill="#0d0d16" stroke="#181825" strokeWidth="1"/>

                  {/* MAJOR ROADS — clearly visible */}
                  {/* Horizontal */}
                  <rect x="0" y="163" width="420" height="18" fill="#1c1c2e"/>
                  <rect x="0" y="165" width="420" height="14" fill="#252540"/>
                  <line x1="0" y1="172" x2="420" y2="172" stroke="#3a3a5e" strokeWidth="1" strokeDasharray="14 8"/>
                  <rect x="0" y="282" width="420" height="18" fill="#1c1c2e"/>
                  <rect x="0" y="284" width="420" height="14" fill="#252540"/>
                  <line x1="0" y1="291" x2="420" y2="291" stroke="#3a3a5e" strokeWidth="1" strokeDasharray="14 8"/>

                  {/* Vertical */}
                  <rect x="126" y="0" width="18" height="420" fill="#1c1c2e"/>
                  <rect x="128" y="0" width="14" height="420" fill="#252540"/>
                  <line x1="135" y1="0" x2="135" y2="420" stroke="#3a3a5e" strokeWidth="1" strokeDasharray="14 8"/>
                  <rect x="248" y="0" width="18" height="420" fill="#1c1c2e"/>
                  <rect x="250" y="0" width="14" height="420" fill="#252540"/>
                  <line x1="257" y1="0" x2="257" y2="420" stroke="#3a3a5e" strokeWidth="1" strokeDasharray="14 8"/>

                  {/* MINOR ROADS */}
                  <rect x="0"   y="88" width="420" height="8" fill="#181828"/>
                  <rect x="0"  y="344" width="420" height="8" fill="#181828"/>
                  <rect x="0"   y="90" width="420" height="5" fill="#1e1e32"/>
                  <rect x="0"  y="346" width="420" height="5" fill="#1e1e32"/>
                  <rect x="42"  y="0"  width="8" height="420" fill="#181828"/>
                  <rect x="44"  y="0"  width="5" height="420" fill="#1e1e32"/>

                  {/* Ambient map glow */}
                  <rect width="420" height="420" fill="url(#mapGlow)"/>

                  {/* Safe zone halos — very subtle */}
                  <circle cx="180" cy="145" r="48"
                    fill="none" stroke="#2DD36F" strokeOpacity=".18" strokeWidth="1.5" strokeDasharray="6 5"/>
                  <circle cx="180" cy="145" r="34"
                    fill="#2DD36F" fillOpacity=".04" stroke="#2DD36F" strokeOpacity=".12" strokeWidth="1"/>
                  <circle cx="385" cy="140" r="40"
                    fill="none" stroke="#2DD36F" strokeOpacity=".15" strokeWidth="1.5" strokeDasharray="6 5"/>
                  <circle cx="385" cy="140" r="28"
                    fill="#2DD36F" fillOpacity=".03" stroke="#2DD36F" strokeOpacity=".1" strokeWidth="1"/>

                  {/* Route: You → Priya */}
                  <motion.path d="M 295 275 Q 240 210 180 145"
                    stroke="#E94F87" strokeWidth="2.5" fill="none"
                    strokeLinecap="round" strokeDasharray="7 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.9 }}
                    transition={{ duration: 1.3, delay: 0.5, ease: "easeOut" }}
                  />

                  {/* CONTACT PINS */}
                  {contacts.map((c, i) => {
                    const gradId = c.color === "#E94F87" ? "gPink" : c.color === "#2DD36F" ? "gGreen" : "gPurple";
                    return (
                      <motion.g key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: c.delay, duration: 0.4, type: "spring", stiffness: 280 }}
                        style={{ transformOrigin: `${c.x}px ${c.y}px`, transformBox: "fill-box" }}
                      >
                        {/* Glow halo */}
                        <ellipse cx={c.x} cy={c.y}
                          rx={c.isYou ? 38 : 30} ry={c.isYou ? 38 : 30}
                          fill={`url(#${gradId})`} opacity=".7"/>
                        {/* Pulse ring */}
                        {c.pulse && (
                          <circle cx={c.x} cy={c.y} r={c.isYou ? 20 : 15}
                            fill="none" stroke={c.color} strokeWidth="1.5" strokeOpacity=".7"
                            style={{
                              transformOrigin: `${c.x}px ${c.y}px`, transformBox: "fill-box",
                              animation: `svgPulse 2.3s ease-out ${i * 0.25}s infinite`,
                            }}
                          />
                        )}
                        {/* Main dot */}
                        <circle cx={c.x} cy={c.y} r={c.isYou ? 12 : 9}
                          fill={c.color}
                          style={{ filter: `drop-shadow(0 0 10px ${c.color})` }}
                        />
                        {/* White core */}
                        <circle cx={c.x} cy={c.y} r={c.isYou ? 5 : 3.5} fill="white" fillOpacity=".95"/>
                        {/* Label */}
                        <rect x={c.x - 26} y={c.y - (c.isYou ? 37 : 32)} width={52} height={19} rx={9.5}
                          fill="#0a0a12" stroke={c.color} strokeOpacity=".65" strokeWidth="1.2"/>
                        <text x={c.x} y={c.y - (c.isYou ? 23 : 18)}
                          textAnchor="middle" fill={c.color}
                          fontSize="10" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing=".3">
                          {c.label}
                        </text>
                      </motion.g>
                    );
                  })}

                  {/* SOS badge on You */}
                  <motion.g
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
                    style={{ transformOrigin: "312px 287px", transformBox: "fill-box" }}
                  >
                    <rect x="272" y="278" width="80" height="22" rx="11"
                      fill="#FF3B4A" fillOpacity=".16"
                      stroke="#FF3B4A" strokeOpacity=".6" strokeWidth="1.2"/>
                    <circle cx="286" cy="289" r="4" fill="#FF3B4A"
                      style={{ animation: "svgBlink 1.1s ease-in-out infinite" }}/>
                    <text x="299" y="293" fill="#FF3B4A" fontSize="9"
                      fontFamily="Inter,sans-serif" fontWeight="800" letterSpacing=".8">
                      SOS LIVE
                    </text>
                  </motion.g>
                </svg>

                {/* Vignette overlays */}
                <div className="absolute inset-0 pointer-events-none rounded-3xl"
                  style={{ background: "linear-gradient(to top, #0b0b14cc 0%, transparent 40%, #0b0b1466 100%)" }}/>
                <div className="absolute inset-0 pointer-events-none rounded-3xl"
                  style={{ background: "linear-gradient(to right, #0b0b1466 0%, transparent 30%, transparent 70%, #0b0b1466 100%)" }}/>

                {/* Map HUD pills */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2 px-3 py-1.5 rounded-xl"
                  style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.09)" }}>
                  <MapPin className="w-3.5 h-3.5" style={{ color: "#E94F87" }}/>
                  <span className="text-white/85 text-xs font-semibold">Live Map</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD36F] animate-pulse"/>
                </div>
                <div className="absolute top-3.5 right-3.5 px-3 py-1.5 rounded-xl"
                  style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.09)" }}>
                  <span className="text-white/50 text-xs">4 contacts </span>
                  <span className="text-[#2DD36F] text-xs font-bold">● online</span>
                </div>

                {/* Bottom bar */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="absolute bottom-0 inset-x-0 px-4 py-3.5"
                  style={{ background: "linear-gradient(to top, #0b0b14 60%, transparent)" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" style={{ color: "#E94F87" }}/>
                      <span className="text-white text-sm font-semibold">Protected</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs" style={{ color: "#888" }}>
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2DD36F]"/>Encrypted
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#E94F87" }}/>No servers
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
