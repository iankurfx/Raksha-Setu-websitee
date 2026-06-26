import { Shield, EyeOff, Cpu, Users, Eye, Target } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Raksha Setu</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The story and vision behind your silent bridge to safety.
        </p>
      </div>

      <div className="space-y-16">
        {/* Section: Our Mission */}
        <section className="bg-card/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6 flex items-center gap-3">
            <Target className="w-7 h-7 text-primary" />
            Our Mission
          </h2>
          <div className="text-muted-foreground leading-relaxed text-base space-y-4">
            <p>
              Raksha Setu was born from a simple belief: everyone deserves to feel safe, and help should be just a button press away. In emergency situations, every second counts, and complex interfaces can be the difference between safety and danger.
            </p>
            <p>
              We envision a world where personal safety technology is accessible, reliable, and respectful of privacy. Our mission extends beyond just building an app—we're creating a safety net that anyone can trust, regardless of their technical expertise or circumstances.
            </p>
            <p>
              From college students walking alone at night to elderly individuals living independently, from professionals working in remote locations to families wanting peace of mind—Raksha Setu serves everyone who values their safety and the safety of their loved ones.
            </p>
          </div>
        </section>

        {/* Section: Why We Built This */}
        <section className="bg-card/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6 flex items-center gap-3">
            <Shield className="w-7 h-7 text-primary" />
            Why We Built This
          </h2>
          <div className="text-muted-foreground leading-relaxed text-base space-y-4">
            <p>
              Personal safety shouldn't require complicated apps with dozens of features you'll never use. We designed Raksha Setu to do one thing exceptionally well: get help to you when you need it most.
            </p>
            <p>
              Our team has experienced situations where immediate help was needed, and we understand the importance of a reliable, simple solution that works under pressure. We've seen how existing safety apps can be overwhelming, confusing, or unreliable when it matters most.
            </p>
            <p>
              We studied emergency response patterns, consulted with safety experts, and interviewed dozens of potential users to understand what truly matters in crisis situations. The result is an app that focuses on speed, reliability, and ease of use above all else.
            </p>
            <p>
              Every design decision was made with one question in mind: "Will this help someone get assistance faster and more reliably?" If the answer was no, we removed it. This philosophy of purposeful simplicity drives everything we build.
            </p>
          </div>
        </section>

        {/* Section: Commitment to Privacy */}
        <section className="bg-card/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6 flex items-center gap-3">
            <EyeOff className="w-7 h-7 text-primary" />
            Our Commitment to Privacy
          </h2>
          <div className="text-muted-foreground leading-relaxed text-base space-y-4">
            <p>
              We believe your safety data is yours alone. That's why Raksha Setu operates entirely on your device—no servers, no cloud storage, no data collection. Your emergency contacts, location data, and preferences never leave your phone unless you trigger an emergency alert.
            </p>
            <p>
              In an age where personal data is constantly harvested and monetized, we take a different approach. We don't need your data to provide value—our app works by empowering your device to protect you, not by collecting information about you.
            </p>
            <p>
              This privacy-first approach isn't just a feature—it's a fundamental principle that influences every technical decision we make. We can't be hacked or breached because we don't store your information. We can't sell your data because we don't have it.
            </p>
            <p>
              Your trust is sacred to us, and we protect it by designing systems that make privacy violations technically impossible, not just policy violations.
            </p>
          </div>
        </section>

        {/* Section: Technology That Works */}
        <section className="bg-card/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6 flex items-center gap-3">
            <Cpu className="w-7 h-7 text-primary" />
            Technology That Works
          </h2>
          <div className="text-muted-foreground leading-relaxed text-base space-y-4">
            <p>
              Behind Raksha Setu's simple interface lies sophisticated engineering designed for reliability and speed. We've optimized every aspect of the app to ensure it works when you need it most, even in challenging conditions.
            </p>
            <p>
              Our alert system is designed to work with minimal battery drain, poor network conditions, and even when your phone is under stress. We've tested the app in various real-world scenarios to ensure consistent performance.
            </p>
            <p>
              The app uses native Android capabilities to ensure maximum compatibility and performance across different devices and Android versions. We prioritize stability and reliability over flashy features.
            </p>
          </div>
        </section>

        {/* Section: Community and Support */}
        <section className="bg-card/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6 flex items-center gap-3">
            <Users className="w-7 h-7 text-primary" />
            Community and Support
          </h2>
          <div className="text-muted-foreground leading-relaxed text-base space-y-4">
            <p>
              Raksha Setu is more than just an app—it's part of a broader community committed to personal safety and mutual aid. We believe that technology can bring people together to create safer communities.
            </p>
            <p>
              We actively engage with safety experts, community organizations, and users to continuously improve our understanding of personal safety needs. This collaborative approach helps us build better solutions.
            </p>
            <p>
              Our support philosophy is simple: every user deserves timely, helpful assistance. We provide clear documentation, responsive support, and regular updates to ensure the best possible experience.
            </p>
          </div>
        </section>

        {/* Section: Looking Forward */}
        <section className="bg-card/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6 flex items-center gap-3">
            <Eye className="w-7 h-7 text-primary" />
            Looking Forward
          </h2>
          <div className="text-muted-foreground leading-relaxed text-base space-y-4">
            <p>
              We're continuously working to make Raksha Setu more reliable, faster, and more accessible. Our roadmap includes features like offline emergency protocols, integration with local emergency services, and accessibility improvements for users with disabilities.
            </p>
            <p>
              Future developments will always be guided by our core principles: privacy, simplicity, and reliability. We're exploring partnerships with local safety organizations and emergency services to enhance the effectiveness of our platform.
            </p>
            <p>
              We're also working on making Raksha Setu available in multiple languages and adapting it for different cultural contexts while maintaining its universal usability and effectiveness.
            </p>
            <p className="font-semibold text-white">
              Our vision is to make personal safety technology so reliable and accessible that using it becomes as natural as wearing a seatbelt—a simple precaution that could make all the difference when it matters most.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}