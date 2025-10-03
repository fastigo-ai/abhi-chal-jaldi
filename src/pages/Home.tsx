import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Clock, Shield, Star } from "lucide-react";
import heroWorker1 from "@/assets/hero-worker-1.png";
import heroWorker2 from "@/assets/hero-worker-2.png";
import appMockup from "@/assets/app-mockup.png";
import serviceMopping from "@/assets/service-mopping.png";
import serviceLaundry from "@/assets/service-laundry.png";
import serviceWindow from "@/assets/service-window.png";
import serviceSweeping from "@/assets/service-sweeping.png";
import serviceUtensils from "@/assets/service-utensils.png";
import serviceBathroom from "@/assets/service-bathroom.png";
import serviceKitchen from "@/assets/service-kitchen.png";

export default function Home() {
  const stats = [
    { number: "99,952+", label: "Homes cleaned" },
    { number: "84,952+", label: "Hours saved" },
    { number: "957+", label: "Pronto professionals" },
  ];

  const services = [
    { name: "Mopping", image: serviceMopping },
    { name: "Laundry", image: serviceLaundry },
    { name: "Window cleaning", image: serviceWindow },
    { name: "Sweeping", image: serviceSweeping },
    { name: "Utensils", image: serviceUtensils },
    { name: "Bathroom cleaning", image: serviceBathroom },
    { name: "Kitchen cleaning", image: serviceKitchen },
  ];

  const features = [
    {
      icon: Clock,
      title: "10-Minute Response",
      description: "Professional help arrives within 10 minutes of your booking",
    },
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All our cleaners are background-verified and trained",
    },
    {
      icon: Star,
      title: "Quality Guaranteed",
      description: "100% satisfaction guaranteed or your money back",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                India's <span className="text-primary">10 minute</span>
                <br />
                House Help Service App
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground">
                Your home, professionally cleaned — exactly when you need it
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Download App
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Call +91 99104 83315
                </Button>
              </div>

              <div className="pt-8">
                <p className="text-sm text-muted-foreground mb-4">Trusted by thousands</p>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full bg-primary/20 border-2 border-background" />
                    ))}
                  </div>
                  <div className="flex items-center space-x-1 text-secondary">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4 items-center">
                <img
                  src={heroWorker1}
                  alt="Professional cleaner"
                  className="rounded-2xl shadow-2xl"
                />
                <img
                  src={heroWorker2}
                  alt="Professional cleaner"
                  className="rounded-2xl shadow-2xl mt-12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-5xl md:text-6xl font-bold">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-semibold text-accent-foreground">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Book trusted cleaning help</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From deep cleans to daily upkeep, Pronto's got you covered
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gradient-to-br from-card to-accent/20">
                <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-accent/30 flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-24 w-24 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-center font-semibold">{service.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Why choose Pronto?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              On-demand professional cleaners available 24x7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground">
            Download the app and book your first cleaning service in under a minute
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Download on App Store
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" className="group">
              Get it on Google Play
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
