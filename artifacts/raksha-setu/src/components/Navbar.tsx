import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { SiInstagram, SiFacebook, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/logo_1782424239518.jpg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Logo & Tagline */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(233,79,135,0.3)] group-hover:shadow-[0_0_25px_rgba(233,79,135,0.5)] transition-all">
            <img src={logoImg} alt="Raksha Setu Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl leading-tight text-white">Raksha Setu</span>
            <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">Personal Safety</span>
          </div>
        </Link>

        {/* Center: Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Socials & CTA (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="https://www.instagram.com/rakshasetu.co/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><SiInstagram size={18} /></a>
            <a href="https://www.facebook.com/profile.php?id=61591486922899" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><SiFacebook size={18} /></a>
            <a href="https://x.com/rakshasetuco" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><SiX size={18} /></a>
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.studioankur.rakshasetu" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(233,79,135,0.4)] hover:shadow-[0_0_30px_rgba(233,79,135,0.6)] transition-all rounded-full px-6 font-semibold border-none">
              Download App
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b border-white/10 px-4 py-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-white px-4 py-2 hover:bg-white/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <div className="flex justify-center gap-6 py-2 text-muted-foreground">
            <a href="https://www.instagram.com/rakshasetu.co/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><SiInstagram size={24} /></a>
            <a href="https://www.facebook.com/profile.php?id=61591486922899" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><SiFacebook size={24} /></a>
            <a href="https://x.com/rakshasetuco" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><SiX size={24} /></a>
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.studioankur.rakshasetu" target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-4 rounded-full font-bold shadow-[0_0_15px_rgba(233,79,135,0.4)]">
              Download App
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}