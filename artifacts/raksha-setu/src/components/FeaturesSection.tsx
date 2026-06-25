import { motion } from "framer-motion";
import { 
  Bell, Volume2, Mic, MapPin, PhoneCall, 
  Users, BrainCircuit, Speaker, Battery, 
  WifiOff, Shield, LayoutGrid
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Emergency SOS",
      description: "One tap instantly alerts emergency contacts with your live location."
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Volume Button Trigger",
      description: "Hold Volume Down for seconds to activate SOS without unlocking."
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice Code Trigger",
      description: "Secretly activate emergency mode using a custom voice keyword."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Live Location Sharing",
      description: "Continuously shares encrypted live location with trusted contacts."
    },
    {
      icon: <PhoneCall className="w-6 h-6" />,
      title: "Fake Call",
      description: "Generate a realistic incoming fake call to escape uncomfortable situations."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Trusted Contacts",
      description: "Manage emergency contacts easily securely on your device."
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Safety Intelligence",
      description: "Detect unsafe areas and nearby risks with local ML models."
    },
    {
      icon: <Speaker className="w-6 h-6" />,
      title: "Emergency Siren",
      description: "Trigger a loud alarm to deter threats and attract attention."
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Battery Optimized",
      description: "Designed to consume minimal battery even during continuous tracking."
    },
    {
      icon: <WifiOff className="w-6 h-6" />,
      title: "Works Offline",
      description: "Emergency logic functions even with limited connectivity."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy First",
      description: "No tracking, no data selling, location only shared during emergencies."
    },
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: "Modern UI",
      description: "Clean, fast, intuitive interface that gets out of your way."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Everything You Need To <span className="text-primary">Stay Safe</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive suite of personal safety tools designed to protect you without compromising your privacy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(233,79,135,0.2)]"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}