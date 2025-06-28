
export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/0601b390-04af-4e1c-96f6-1846815a48af.png" 
                alt="Olles Tech Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Empowering businesses with innovative technology solutions. 
              Transform your digital presence with our expert team.
            </p>
            <div className="text-slate-400 text-sm">
              © 2024 Olles Tech. All rights reserved.
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("pricing")}
                  className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-slate-300 text-sm">hello@ollestech.com</p>
              <p className="text-slate-300 text-sm">+1 (555) 123-4567</p>
              <p className="text-slate-300 text-sm">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
