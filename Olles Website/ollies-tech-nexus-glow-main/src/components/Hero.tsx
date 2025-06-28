

import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-orange-500/10 rounded-full flex items-center justify-center">
              <img 
                src="/lovable-uploads/0601b390-04af-4e1c-96f6-1846815a48af.png" 
                alt="Olles Tech Logo" 
                // className="h-20 w-20 object-cover rounded-full"
                className="h-20 w-20 object-contain"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-emerald-400">
              Olles Tech
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {/* Empowering businesses with cutting-edge technology solutions. 
            We transform ideas into digital reality with precision and innovation. */}
          </p>
          
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection("services")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
           */}
          {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-orange-400/50 transition-all duration-300">
              <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-emerald-400/50 transition-all duration-300">
              <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-slate-300">Support Available</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-orange-400/50 transition-all duration-300">
              <div className="text-3xl font-bold text-orange-400 mb-2">99%</div>
              <div className="text-slate-300">Client Satisfaction</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

