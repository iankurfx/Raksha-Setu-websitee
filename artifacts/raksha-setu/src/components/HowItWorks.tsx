import { motion } from "framer-motion";
import { Download, UserPlus, Settings, ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Download className="w-6 h-6" />,
      title: "Install Raksha Setu",
      description: "Download the app for free. No account creation required."
    },
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "Add Trusted Contacts",
      description: "Select family and friends from your local phonebook."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Enable Permissions",
      description: "Grant necessary permissions for offline and background operation."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Stay Protected",
      description: "You're all set. The app stays silent until you need it."
    }
  ];

  return (
    <section className="py-24 bg-card/30 border-y border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Set up your safety net in minutes. It's designed to be simple, fast, and completely private.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-white/10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary/50 to-secondary transform origin-left"
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-background border-2 border-white/10 flex items-center justify-center relative z-10 mb-6 group-hover:border-primary transition-colors duration-300">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/30">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}