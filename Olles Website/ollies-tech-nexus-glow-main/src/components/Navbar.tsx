
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/0601b390-04af-4e1c-96f6-1846815a48af.png" 
              alt="Olles Tech Logo" 
              className="h-14 w-auto"
            />
          </div>
        
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-20" />
        <div className="flex w-max animate-marquee items-center whitespace-nowrap flex gap-[130px] text-transparent font-bold bg-clip-text bg-gradient-to-r from-orange-400 to-emerald-400">
          <span>  🚀 Coming Soon — Features Arriving In Time! Stay Tuned 🚀</span>
          <span> 🚀 Coming Soon — Features Arriving In Time!! Stay Tuned 🚀</span>
          
       
      </div>

  
          

          {/* Desktop Navigation */}
          {/* <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("hero")}
                className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("pricing")}
                className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div> */}

          {/* <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Get Started
            </Button>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-orange-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection("hero")}
              className="block px-3 py-2 text-slate-300 hover:text-orange-400 w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-slate-300 hover:text-orange-400 w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-slate-300 hover:text-orange-400 w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="block px-3 py-2 text-slate-300 hover:text-orange-400 w-full text-left"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-slate-300 hover:text-orange-400 w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
