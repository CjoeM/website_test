
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "per project",
      description: "Perfect for small businesses and startups",
      features: [
        "Custom Website Development",
        "Responsive Design",
        "Basic SEO Optimization",
        "3 Months Support",
        "Source Code Included"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "per project",
      description: "Ideal for growing businesses",
      features: [
        "Full-Stack Web Application",
        "Database Integration",
        "API Development",
        "Advanced Security",
        "6 Months Support",
        "Performance Monitoring",
        "Cloud Deployment"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "Tailored solutions for large organizations",
      features: [
        "Custom Solution Architecture",
        "Microservices Development",
        "Advanced Analytics",
        "24/7 Support",
        "Dedicated Team",
        "Security Compliance",
        "Multi-Platform Deployment",
        "Ongoing Maintenance"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the perfect plan for your project. All plans include our 
            commitment to quality and exceptional support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-slate-900 border-slate-700 hover:border-orange-400/50 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-orange-400 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-400 to-emerald-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-orange-400">{plan.price}</span>
                  <span className="text-slate-300 ml-2">{plan.period}</span>
                </div>
                <CardDescription className="text-slate-300 mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-slate-300"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className={`w-full mt-6 ${
                    plan.popular 
                      ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
