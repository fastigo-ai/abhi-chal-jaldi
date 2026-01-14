import { Helmet } from "react-helmet-async";

import physical from "@/assets/banner/physical-damage.png";
import system from "@/assets/banner/my system is slow.png";
import port from "@/assets/banner/port issue.png";
import speaker from "@/assets/banner/speaker,camera.png";

import Software from "@/assets/quickSupport/Software not opening or crashing.png";
import excel from "@/assets/quickSupport/excel not working.png";
import hanging from "@/assets/quickSupport/laptop hanging or freezing.png";
import macbook from "@/assets/quickSupport/macbook starting slowly.png";
import macos from "@/assets/quickSupport/macos update no installing.png";
import problem from "@/assets/quickSupport/not sure about the problem.png";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Excel Not Working",
      image: excel,
      description: "Quick diagnosis & solution within 5–10 minutes",
    },
    {
      id: 2,
      title: "Laptop Hanging / Freezing",
      image: hanging,
      description: "Performance optimization & instant fix",
    },
    {
      id: 3,
      title: "MacBook Starting Slowly",
      image: macbook,
      description: "Speed boost & system cleanup",
    },
    {
      id: 4,
      title: "MacOS Update Not Installing",
      image: macos,
      description: "Update & OS troubleshooting",
    },
    {
      id: 5,
      title: "Not Sure About the Problem",
      image: problem,
      description: "Expert diagnosis for any issue",
    },
    {
      id: 6,
      title: "Software Not Opening",
      image: Software,
      description: "Crash & compatibility fixes",
    },
    {
      id: 7,
      title: "My System is Slow",
      image: system,
      description: "System speed & health optimization",
    },
    {
      id: 8,
      title: "Physical Damage",
      image: physical,
      description: "Screen & hardware repair",
    },
    {
      id: 9,
      title: "Port Issue",
      image: port,
      description: "Charging & USB port fixes",
    },
    {
      id: 10,
      title: "Speaker / Camera Issue",
      image: speaker,
      description: "Audio & camera troubleshooting",
    },
  ];

  // Same masonry layout logic
  const layout = [
    "col-span-2 row-span-3",
    "col-span-1 row-span-2",
    "col-span-1 row-span-2",
    "col-span-2 row-span-2",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-2",
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Helmet>
        <title>Our Services | Door2fy</title>
        <meta
          name="description"
          content="Fast doorstep laptop & tech support services. Expert diagnosis in 5–10 minutes."
        />
      </Helmet>

      {/* Header */}
      <div className="text-center mb-20 px-6">
        <h1 className="text-6xl md:text-8xl font-black mb-4">
          services
        </h1>
        <p className="text-gray-600 tracking-wide">
          Door2fy • Quick Tech Support
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            grid grid-cols-1 md:grid-cols-4
            auto-rows-[180px]
            gap-6
            mb-32
          "
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${layout[index % layout.length]}
                group relative overflow-hidden rounded-xl shadow-lg cursor-pointer`}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-110
                "
              />

              {/* Hover Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/90 via-black/50 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                  flex items-end
                "
              >
                <div
                  className="
                    p-6 text-white
                    translate-y-6 group-hover:translate-y-0
                    transition-transform duration-500
                  "
                >
                  <h3 className="text-xl font-bold mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {service.description}
                  </p>

                  <span className="inline-block mt-4 text-sm font-medium border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
                    Get Support →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
