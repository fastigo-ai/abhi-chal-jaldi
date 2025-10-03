import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
      description:
        "Professional mopping service for all floor types including tiles, marble, and wood",
    },
    {
      name: "Laundry Service",
      image: serviceLaundry,
      description:
        "Complete laundry solutions including washing, drying, ironing, and folding",
    },
    {
      name: "Window & Glass Cleaning",
      image: serviceWindow,
      description:
        "Streak-free cleaning for windows, mirrors, and glass surfaces",
    },
    {
      name: "Sweeping & Dusting",
      image: serviceSweeping,
      description: "Comprehensive sweeping and dusting for your entire home",
    },
    {
      name: "Utensils Washing",
      image: serviceUtensils,
      description:
        "Professional utensil cleaning service for your kitchen",
    },
    {
      name: "Bathroom Deep Clean",
      image: serviceBathroom,
      description:
        "Thorough bathroom cleaning including tiles, fixtures, and sanitization",
    },
    {
      name: "Kitchen Deep Clean",
      image: serviceKitchen,
      description:
        "Complete kitchen cleaning including appliances, counters, and cabinets",
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

      {/* Services List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Service</h2>
            <p className="text-xl text-muted-foreground">
              Book individual services at your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
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
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>

                 
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
