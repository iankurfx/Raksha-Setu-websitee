import { Link } from "wouter";
import logoImg from "@assets/logo_1782424239518.jpg";
import { SiInstagram, SiFacebook, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img src={logoImg} alt="Raksha Setu Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-heading font-bold text-lg text-white">Raksha Setu</span>
            </Link>
            <p className="text-sm text-muted-foreground">Your Silent Bridge To Safety.</p>
            <p className="text-sm text-white/90 font-medium">Made with ❤️ for safer communities.</p>
            <div className="flex items-center gap-4 mt-2 text-muted-foreground">
              <a href="https://www.instagram.com/rakshasetu.co/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><SiInstagram size={18} /></a>
              <a href="https://www.facebook.com/profile.php?id=61591486922899" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><SiFacebook size={18} /></a>
              <a href="https://x.com/rakshasetuco" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><SiX size={18} /></a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-white">Navigation</h4>
            <Link href="/" className="text-sm text-muted-foreground hover:text-white transition-colors">Home</Link>
            <Link href="/features" className="text-sm text-muted-foreground hover:text-white transition-colors">Features</Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-white transition-colors">About</Link>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-white">Legal</h4>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-white transition-colors">Terms & Conditions</Link>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-white">Support</h4>
            <span className="text-sm text-muted-foreground">Contact Us</span>
            <a href="mailto:rakshasetuinfo@gmail.com" className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">rakshasetuinfo@gmail.com</a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Raksha Setu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}