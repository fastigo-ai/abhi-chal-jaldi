// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { ArrowRight, Clock, Shield, Star } from "lucide-react";

// import heroWorker1 from "@/assets/hero-worker-1.png";
// import heroWorker2 from "@/assets/hero-worker-2.png";
// import appMockup from "@/assets/app-mockup.png";
// import physical from "@/assets/banner/physical-damage.png";
// import system from "@/assets/banner/my system is slow.png";
// import port from "@/assets/banner/port issue.png";
// import speaker from "@/assets/banner/speaker,camera.png";
// import banner from "@/assets/banner/last banner.png";
// import Banner1 from '../assets/LandingPageBanner.jpg'

// import Software from "@/assets/quickSupport/Software not opening or crashing.png";
// import excel from "@/assets/quickSupport/excel not working.png";
// import hanging from "@/assets/quickSupport/laptop hanging or freezing.png";
// import macbook from "@/assets/quickSupport/macbook starting slowly.png";
// import macos from "@/assets/quickSupport/macos update no installing.png";
// import problem from "@/assets/quickSupport/not sure about the problem.png";

// export default function Home() {
//   const stats = [
//     { number: "10,000+", label: "Jobs Completed" },
//     { number: "9000+", label: "Hours Saved for Our Users" },
//     { number: "5000+", label: "Door2fy professionals Ready to Help" },
//   ];

//   const services = [
//     { name: "Physical Damage", image: physical },
//     { name: "System Slow", image: system },
//     { name: "Port Issue", image: port },
//     { name: "Speaker & Camera", image: speaker },
//     { name: "Software Crashing", image: Software },
//     { name: "Excel not Working", image: excel },
//     { name: "laptop hanging", image: hanging },
//     { name: "Macbook Starting Slowly", image: macbook },
//     { name: "Macos installing", image: macos },
//     { name: "Not sure about the problem", image: problem },
//   ];

//   const features = [
//     {
//       icon: Clock,
//       title: "10-Minute Response",
//       description:
//         "Professional help arrives within 10 minutes of your request — that’s the Door2fy promise.",
//     },
//     {
//       icon: Shield,
//       title: "Verified Professionals",
//       description:
//         "All Door2fy experts are background-verified and fully trained for your peace of mind.",
//     },
//     {
//       icon: Star,
//       title: "Quality Guaranteed",
//       description:
//         "100% satisfaction guaranteed — or your money back. That’s how Door2fy works.",
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* ✅ Hero Section with Responsive Text */}
//       <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
//   {/* ✅ Mobile Background */}
//   <div
//     className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20 md:hidden"
//     style={{ backgroundImage: `url(${Banner1})` }}
//   />

//   {/* ✅ Desktop Background */}
//   <div
//     className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20 hidden md:block"
//     style={{ backgroundImage: `url(${banner})` }}
//   />

//   {/* Optional overlay */}
//   <div className="absolute inset-0 bg-black/40 -z-10" />

//   {/* Content */}
//   <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
//     {/* Mobile view */}
//     <div className="md:hidden space-y-6">
//       <h1 className="text-4xl font-bold leading-tight">
//         Fast Tech Help in 10 Minutes
//       </h1>
//       <p className="text-lg text-white/80">
//         Door2fy — fast doorstep repair & support
//       </p>
//       <p className="text-base text-white/70 pt-4">
//         Download the app or call{" "}
//         <span className="font-semibold text-white">+91 9599094941</span>
//       </p>
//     </div>

//     {/* Desktop view */}
//     <div className="hidden md:block space-y-8">
//       <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//         India's 10 minute
//         <br />
//         Doorstep Service App
//       </h1>
//       <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
//         Door2fy — instant tech solutions, anytime you need them
//       </p>
//       <p className="text-lg text-white/80 pt-6">
//         Ready to book? Download the app
//         <br />
//         or call us at{" "}
//         <span className="font-semibold text-white">+91 9599094941</span>
//       </p>
//     </div>
//   </div>
// </section>

//       {/* Stats Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#53BED1] text-primary-foreground">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-8">
//             {stats.map((stat, index) => (
//               <AnimatedStat
//                 key={index}
//                 number={stat.number}
//                 label={stat.label}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center space-y-4 mb-16">
//             <div className="inline-block px-4 py-2 bg-[#53BED1] rounded-full text-sm font-semibold text-white">
//               Our Services
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold">Trusted support</h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               just a click away — that’s Door2fy
//             </p>
//           </div>

//           <div className="overflow-hidden">
//             <div
//               className="flex gap-6 w-max"
//               style={{ animation: "scroll-left 30s linear infinite" }}
//             >
//               {[...services, ...services].map((service, index) => (
//                 <Card
//                   key={index}
//                   className="group min-w-[200px] max-w-[200px] p-6 flex-shrink-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gradient-to-br from-card to-accent/20"
//                 >
//                   <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-accent/30 flex items-center justify-center">
//                     <img
//                       src={service.image}
//                       alt={service.name}
//                       className="h-24 w-24 object-contain group-hover:scale-110 transition-transform duration-300"
//                     />
//                   </div>
//                   <h3 className="text-center font-semibold">{service.name}</h3>
//                 </Card>
//               ))}
//             </div>
//           </div>

//           <style>
//             {`
//               @keyframes scroll-left {
//                 0% { transform: translateX(0%); }
//                 100% { transform: translateX(-50%); }
//               }

//               div[style*="scroll-left"]:hover {
//                 animation-play-state: paused;
//               }
//             `}
//           </style>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center space-y-4 mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold">
//               Why choose Door2fy?
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               On-demand professional Engineer available 24x7
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <Card
//                 key={index}
//                 className="p-8 space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center">
//                   <feature.icon className="h-8 w-8 text-blue-500" />
//                 </div>
//                 <h3 className="text-2xl font-bold">{feature.title}</h3>
//                 <p className="text-muted-foreground">{feature.description}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center space-y-8">
//           <h2 className="text-4xl md:text-5xl font-bold">
//             Ready to get started?
//           </h2>
//           <p className="text-xl text-muted-foreground">
//             Download the app and book your first Doorstep & Quick support
//             Service in under a minute{" "}
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" className="bg-[#53BED1] hover:bg-[#53BED1]">
//               Download on App Store
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//             <Button size="lg" className="bg-[#53BED1] hover:bg-[#53BED1]">
//               Get it on Google Play
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// // ✅ Animated Stat Counter Component
// function AnimatedStat({ number, label }: { number: string; label: string }) {
//   const target = parseInt(number.replace(/\D/g, ""));
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let current = 0;
//     const duration = 1000;
//     const stepTime = 16;
//     const totalSteps = duration / stepTime;
//     const increment = Math.ceil(target / totalSteps);

//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= target) {
//         setCount(target);
//         clearInterval(timer);
//       } else {
//         setCount(current);
//       }
//     }, stepTime);

//     return () => clearInterval(timer);
//   }, [target]);

//   return (
//     <div className="text-center space-y-2">
//       <div className="text-5xl md:text-6xl font-bold">
//         {count.toLocaleString()}+
//       </div>
//       <div className="text-lg opacity-90">{label}</div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Shield, Star } from "lucide-react";

import heroWorker1 from "@/assets/hero-worker-1.png";
import heroWorker2 from "@/assets/hero-worker-2.png";
import appMockup from "@/assets/app-mockup.png";
import physical from "@/assets/banner/physical-damage.png";
import system from "@/assets/banner/my system is slow.png";
import port from "@/assets/banner/port issue.png";
import speaker from "@/assets/banner/speaker,camera.png";
import banner from "@/assets/banner/last banner.png";
import Banner1 from "../assets/WhatsApp Image 2025-10-16 at 4.55.27 PM.jpeg";

import Software from "@/assets/quickSupport/Software not opening or crashing.png";
import excel from "@/assets/quickSupport/excel not working.png";
import hanging from "@/assets/quickSupport/laptop hanging or freezing.png";
import macbook from "@/assets/quickSupport/macbook starting slowly.png";
import macos from "@/assets/quickSupport/macos update no installing.png";
import problem from "@/assets/quickSupport/not sure about the problem.png";

export default function Home() {
  const stats = [
    { number: "10,000+", label: "Jobs Completed" },
    { number: "9000+", label: "Hours Saved for Our Users" },
    { number: "5000+", label: "Door2fy professionals Ready to Help" },
  ];

  const services = [
    { name: "Physical Damage", image: physical },
    { name: "System Slow", image: system },
    { name: "Port Issue", image: port },
    { name: "Speaker & Camera", image: speaker },
    { name: "Software Crashing", image: Software },
    { name: "Excel not Working", image: excel },
    { name: "laptop hanging", image: hanging },
    { name: "Macbook Starting Slowly", image: macbook },
    { name: "Macos installing", image: macos },
    { name: "Not sure about the problem", image: problem },
  ];

  const features = [
    {
      icon: Clock,
      title: "10-Minute Response",
      description:
        "Professional help arrives within 10 minutes of your request — that’s the Door2fy promise.",
    },
    {
      icon: Shield,
      title: "Verified Professionals",
      description:
        "All Door2fy experts are background-verified and fully trained for your peace of mind.",
    },
    {
      icon: Star,
      title: "Quality Guaranteed",
      description:
        "100% satisfaction guaranteed — or your money back. That’s how Door2fy works.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ✅ Hero Section with Responsive Text */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            India's 10 minute Doorstep Service App
          </h1>
          <p className="text-lg text-gray-600">
            Door2fy — fast doorstep repair & support
          </p>
          <p className="text-base text-gray-500 pt-4">
            Download the app or call{" "}
            <span className="font-semibold text-gray-800">+91 9599094941</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-[#53BED1] hover:bg-[#53BED1] text-white"
            >
              Download on App Store
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="bg-[#53BED1] hover:bg-[#53BED1] text-white"
            >
              Get it on Google Play
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img
            src={Banner1}
            alt="App Mockup"
            className=" h-1/3 w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#53BED1] text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                number={stat.number}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-2 bg-[#53BED1] rounded-full text-sm font-semibold text-white">
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
              style={{ animation: "scroll-left 30s linear infinite" }}
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why choose Door2fy?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              On-demand professional Engineer available 24x7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-blue-500" />
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
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted-foreground">
            Download the app and book your first Doorstep & Quick support
            Service in under a minute{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#53BED1] hover:bg-[#53BED1]">
              Download on App Store
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" className="bg-[#53BED1] hover:bg-[#53BED1]">
              Get it on Google Play
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ✅ Animated Stat Counter Component
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
