import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import serviceMopping from "@/assets/service-mopping.png";
import serviceLaundry from "@/assets/service-laundry.png";
import serviceWindow from "@/assets/service-window.png";
import serviceSweeping from "@/assets/service-sweeping.png";
import serviceUtensils from "@/assets/service-utensils.png";
import serviceBathroom from "@/assets/service-bathroom.png";
import serviceKitchen from "@/assets/service-kitchen.png";

export default function Services() {
  const services = [
    {
      name: "Mopping & Floor Cleaning",
      image: serviceMopping,
      description: "Professional mopping service for all floor types including tiles, marble, and wood",
      features: ["Deep cleaning", "Sanitization", "Polish & shine", "Stain removal"],
      price: "₹299",
    },
    {
      name: "Laundry Service",
      image: serviceLaundry,
      description: "Complete laundry solutions including washing, drying, ironing, and folding",
      features: ["Wash & dry", "Iron & fold", "Stain treatment", "Delicate care"],
      price: "₹399",
    },
    {
      name: "Window & Glass Cleaning",
      image: serviceWindow,
      description: "Streak-free cleaning for windows, mirrors, and glass surfaces",
      features: ["Inside & outside", "Frame cleaning", "Streak-free finish", "Safety assured"],
      price: "₹249",
    },
    {
      name: "Sweeping & Dusting",
      image: serviceSweeping,
      description: "Comprehensive sweeping and dusting for your entire home",
      features: ["All rooms", "Hard-to-reach areas", "Cobweb removal", "Furniture dusting"],
      price: "₹199",
    },
    {
      name: "Utensils Washing",
      image: serviceUtensils,
      description: "Professional utensil cleaning service for your kitchen",
      features: ["Dishes & cutlery", "Pots & pans", "Grease removal", "Sanitization"],
      price: "₹149",
    },
    {
      name: "Bathroom Deep Clean",
      image: serviceBathroom,
      description: "Thorough bathroom cleaning including tiles, fixtures, and sanitization",
      features: ["Toilet cleaning", "Tile scrubbing", "Drain cleaning", "Anti-bacterial treatment"],
      price: "₹349",
    },
    {
      name: "Kitchen Deep Clean",
      image: serviceKitchen,
      description: "Complete kitchen cleaning including appliances, counters, and cabinets",
      features: ["Appliance cleaning", "Degreasing", "Counter tops", "Cabinet organization"],
      price: "₹449",
    },
  ];

  const bundles = [
    {
      name: "Daily Essentials",
      services: ["Sweeping", "Mopping", "Dusting", "Utensils"],
      price: "₹599",
      savings: "Save ₹248",
      popular: true,
    },
    {
      name: "Weekly Deep Clean",
      services: ["All Daily Essentials", "Bathroom Clean", "Kitchen Clean", "Laundry"],
      price: "₹1,299",
      savings: "Save ₹547",
      popular: false,
    },
    {
      name: "Complete Home Care",
      services: ["All Weekly Services", "Window Cleaning", "Balcony Clean", "Furniture Polish"],
      price: "₹1,899",
      savings: "Save ₹899",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent via-background to-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">Our Services</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Professional cleaning services tailored to your needs
          </p>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Service</h2>
            <p className="text-xl text-muted-foreground">
              Book individual services or create your custom package
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-square bg-accent/20 flex items-center justify-center p-8">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-32 w-32 object-contain"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{service.name}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">Starting at</div>
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                    </div>
                    <Button size="sm">Book Now</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Bundles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Service Bundles</h2>
            <p className="text-xl text-muted-foreground">
              Save more with our curated cleaning packages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bundles.map((bundle, index) => (
              <Card
                key={index}
                className={`p-8 space-y-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden ${
                  bundle.popular ? "border-2 border-primary" : ""
                }`}
              >
                {bundle.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{bundle.name}</h3>
                  <div className="text-sm text-primary font-semibold">{bundle.savings}</div>
                </div>

                <ul className="space-y-3">
                  {bundle.services.map((service, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Bundle price</div>
                    <div className="text-3xl font-bold text-primary">{bundle.price}</div>
                  </div>
                  <Button className="w-full" variant={bundle.popular ? "default" : "outline"}>
                    Choose Bundle
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Need a Custom Package?</h2>
          <p className="text-xl text-muted-foreground">
            Contact us to create a personalized cleaning plan that fits your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Call +91 99104 83315</Button>
            <Button size="lg" variant="outline">Download App</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
