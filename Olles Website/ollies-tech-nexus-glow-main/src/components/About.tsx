
import { Users, Settings } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Olles Tech
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We are a team of passionate technologists dedicated to delivering 
            innovative solutions that drive business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Our Mission
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              To bridge the gap between complex technology and business success. 
              We believe in creating solutions that are not just functional, but 
              transformative for our clients' operations.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Founded with a vision to democratize advanced technology, we've grown 
              into a trusted partner for businesses of all sizes, from startups to 
              enterprise corporations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Users className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Expert Team</h4>
                  <p className="text-slate-300 text-sm">Skilled professionals with years of experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Settings className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Custom Solutions</h4>
                  <p className="text-slate-300 text-sm">Tailored approaches for unique challenges</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500/20 to-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
              <img 
                src="/lovable-uploads/c9da7d57-696d-434b-b53c-048788cb294d.png" 
                alt="Grocery basket" 
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-400">8+</div>
                  <div className="text-slate-300 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">50+</div>
                  <div className="text-slate-300 text-sm">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
