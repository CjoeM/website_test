
import { Computer, Settings, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Computer,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices.",
      features: ["React & Next.js", "Full-Stack Solutions", "Responsive Design", "Performance Optimization"]
    },
    {
      icon: Settings,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services for modern applications.",
      features: ["AWS & Azure", "DevOps & CI/CD", "Microservices", "Database Management"]
    },
    {
      icon: Users,
      title: "Digital Consulting",
      description: "Strategic technology consulting to accelerate your digital transformation.",
      features: ["Tech Strategy", "System Architecture", "Process Optimization", "Team Training"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to meet your business needs 
            and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-slate-800 border-slate-700 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="text-center">
                <div className="mx-auto p-4 bg-gradient-to-br from-orange-500/20 to-emerald-500/20 rounded-full w-fit mb-4 group-hover:from-orange-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                <CardDescription className="text-slate-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-slate-300 text-sm"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
