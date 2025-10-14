import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import serviceMopping from "@/assets/service-mopping.png";
import serviceLaundry from "@/assets/service-laundry.png";
import serviceWindow from "@/assets/service-window.png";
import serviceSweeping from "@/assets/service-sweeping.png";
import serviceUtensils from "@/assets/service-utensils.png";
import serviceBathroom from "@/assets/service-bathroom.png";
import serviceKitchen from "@/assets/service-kitchen.png";


import physical from "@/assets/banner/physical-damage.png";
import system from "@/assets/banner/my system is slow.png";
import port from "@/assets/banner/port issue.png";
import speaker from "@/assets/banner/speaker,camera.png";
// import banner from "@/assets/banner/last banner.png";


import Software from "@/assets/quickSupport/Software not opening or crashing.png";
import excel from "@/assets/quickSupport/excel not working.png";
import hanging from "@/assets/quickSupport/laptop hanging or freezing.png";
import macbook from "@/assets/quickSupport/macbook starting slowly.png";
import macos from "@/assets/quickSupport/macos update no installing.png";
import problem from "@/assets/quickSupport/not sure about the problem.png";

export default function Services() {
  const services = [
    {
      name: "Excel not working",
      image: excel,
      description:
        "5-10 minutes,our experts will diagnose the problem and provide the best possible solution",
    },
    {
      name: "Laptop Hanging/Freezing",
      image: hanging,
      description:
        "5-10 minutes,our experts will diagnose the problem and provide the best possible solution",
    },
    {
      name: "Macbook rebooting slowly",
      image: macbook,
      description:
        "5-10 minutes,our experts will diagnose the problem and provide the best possible solution",
    },
    {
      name: "Macos update not installing",
      image: macos,
      description: "5-10 minutes,our experts will diagnose the problem and provide the best possible solution",
    },
    {
      name: "Not sure about the problem",
      image: problem,
      description:
        "5-10 minutes,our experts will diagnose the problem and provide the best possible solution",
    },
    {
      name: "Software not opening",
      image: Software,
      description:
        "5-10 minutes,our experts will diagnose the problem and provide the best possible solution",
    },
    // {
    //   name: "WiFi not Connecting",
    //   image: serviceKitchen,
    //   description:
    //     "5-10 minutes,our experts will diagnose the problem and provide the best possible solution",
    // },
    {
      name: "My System is Slow",
      image: system,
      description:
        "5-10 minutes,our experts will diagnose the problem and provide the best possible solution",
    },
    {
      name: "Physical Damage",
      image: physical,
      description:
        "5-10 minutes,our experts will diagnose the problem and provide the best possible solution",
    },
    {
      name: "Port Issue",
      image: port,
      description:
        "5-10 minutes,our experts will diagnose the problem and provide the best possible solution",
    },
    {
      name: "Speaker/Camera Issue",
      image: speaker,
      description:
        "5-10 minutes,our experts will diagnose the problem and provide the best possible solution",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50 ">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">Our Services</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Doorstep Services
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          

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
            <Button size="lg" className=" bg-[#53BED1] hover:bg-[#53BED1]">Download for iOS</Button>
            <Button size="lg" className=" bg-[#53BED1] hover:bg-[#53BED1]">
              Download for Android
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
