import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Shield, Star } from "lucide-react";

import heroWorker1 from "@/assets/hero-worker-1.png";
import heroWorker2 from "@/assets/hero-worker-2.png";
import appMockup from "@/assets/app-mockup.png";
import Banner from "@/assets/banner.png";

import serviceMopping from "@/assets/service-mopping.png";
import serviceLaundry from "@/assets/service-laundry.png";
import serviceWindow from "@/assets/service-window.png";
import serviceSweeping from "@/assets/service-sweeping.png";
import serviceUtensils from "@/assets/service-utensils.png";
import serviceBathroom from "@/assets/service-bathroom.png";
import serviceKitchen from "@/assets/service-kitchen.png";

export default function Home() {
  const stats = [
    { number: "99952+", label: "Jobs Completed" },
    { number: "84952+", label: "Hours Saved for Our Users" },
    { number: "957+", label: "Door2fy professionals Ready to Help" },
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
      description:"Professional help arrives within 10 minutes of your request — that’s the Door2fy promise.",
    },
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All Door2fy experts are background-verified and fully trained for your peace of mind.",
    },
    {
      icon: Star,
      title: "Quality Guaranteed",
      description: "100% satisfaction guaranteed — or your money back. That’s how Door2fy works.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-accent/20 -z-10" />

        <div className="absolute left-0 bottom-0 hidden lg:block w-64 xl:w-80">
          <img src={heroWorker1} alt="Professional cleaner" className="w-full h-auto object-contain" />
        </div>
        <div className="absolute right-0 bottom-0 hidden lg:block w-64 xl:w-80">
          <img src={heroWorker2} alt="Professional cleaner" className="w-full h-auto object-contain" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              India's 10 minute<br />Doorsetp Service App
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Door2fy — instant tech solutions, anytime you need them
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-14 cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                className="h-14 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>

            <p className="text-lg text-muted-foreground pt-6">
              Ready to book? Download the app<br />
              or call us at{" "}
              <span className="font-semibold text-foreground">+91 9599094941</span>
            </p>

            <div className="pt-8 max-w-md mx-auto">
              <img src={Banner} alt="Door2fy App" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#53BED1] text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <AnimatedStat key={index} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Auto Scroll */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-semibold text-accent-foreground">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Trusted support</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              just a click away — that’s Door2fy
            </p>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-6 w-max"
              style={{
                animation: "scroll-left 30s linear infinite",
              }}
            >
              {[...services, ...services].map((service, index) => (
                <Card
                  key={index}
                  className="group min-w-[200px] max-w-[200px] p-6 flex-shrink-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gradient-to-br from-card to-accent/20"
                >
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

          <style>
            {`
              @keyframes scroll-left {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }

              div[style*="scroll-left"]:hover {
                animation-play-state: paused;
              }
            `}
          </style>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Why choose Door2fy?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              On-demand professional cleaners available 24x7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
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
            <Button size="lg" className="group bg-[#53BED1]">
              Download on App Store
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" className="group bg-[#53BED1]">
              Get it on Google Play
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ✅ AnimatedStat component
function AnimatedStat({ number, label }: { number: string; label: string }) {
  const target = parseInt(number.replace(/\D/g, ""));
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1000;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = Math.ceil(target / totalSteps);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center space-y-2">
      <div className="text-5xl md:text-6xl font-bold">
        {count.toLocaleString()}+
      </div>
      <div className="text-lg opacity-90">{label}</div>
    </div>
  );
}
