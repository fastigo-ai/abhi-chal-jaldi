import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Clock,
  Shield,
  Star,
  CheckCircle2,
  CheckCircle,
  CalendarDays,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

/* ================= ASSETS (Keep your imports exactly like this) ================= */

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

import womanProblem from "@/assets/woman-laptop-problem.png";
import engineerReceiving from "@/assets/engineer-receiving.png";
import engineerTraveling from "@/assets/engineer-traveling.png";
import problemSolved from "@/assets/problem-solved.png";
import Banner1 from "../assets/bgimage.jpeg";
import Phone from "@/assets/phone.png";

/* ================= SCROLL STORY COMPONENT ================= */

/* ================= SCROLL STORY COMPONENT ================= */
function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  /* SCENE OPACITY */
  const s1 = useTransform(progress, [0, 0.25, 0.35], [1, 1, 0]);
  const s2 = useTransform(progress, [0.38, 0.5, 0.65], [0, 1, 0]);
  const s3 = useTransform(progress, [0.68, 0.8, 0.9], [0, 1, 0]);
  const s4 = useTransform(progress, [0.9, 1], [0, 1]);

  /* TEXT MOTION (keep same as Step 01) */
  const textY = useTransform(progress, [0, 1], ["100px", "-20px"]);
  const textOpacity = useTransform(progress, [0, 0.15], [0, 1]);

  /* IMAGE MOTION */
  const imageScale = useTransform(progress, [0, 1], [1, 1.05]);

  /* IMAGE SLIDE X */
  const x1 = useTransform(progress, [0, 0.25, 0.35], ["-100px", "0px", "0px"]); // Left → Center
  const x2 = useTransform(progress, [0.38, 0.5, 0.65], ["100px", "0px", "0px"]); // Right → Center
  const imageX3 = useTransform(progress, [0.8, 1], ["140px", "-300px"]);
  const x4 = useTransform(progress, [0.9, 1], ["100px", "0px"]); // Right → Center

  return (
    <section ref={containerRef} className="relative h-[420vh] bg-slate-50/50">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-6xl mx-auto px-6 h-[70vh]">
          {/* ================= SCENE 1 ================= */}
          <motion.div
            style={{ opacity: s1 }}
            className="absolute inset-0 grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image Left */}
            <motion.img
              src={womanProblem}
              style={{ scale: imageScale, x: x1 }}
              className="rounded-[2.5rem] w-full max-h-[450px] object-cover"
            />

            {/* Text Right */}
            <motion.div style={{ y: textY, opacity: textOpacity }}>
              <p className="text-sm font-semibold text-[#53BED1] uppercase tracking-widest mb-2">
                Step 01
              </p>
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-serif tracking-tight leading-[1.1] text-[#0f172a]">
                Suddenly work <br />
                <span className="text-[#53BED1]">Stops.</span>
              </h2>
              <p className="mt-6 text-xl text-slate-600 max-w-md">
                A frozen screen isn’t just a glitch — it’s lost productivity.
              </p>
            </motion.div>
          </motion.div>

          {/* ================= SCENE 2 ================= */}
          <motion.div
            style={{ opacity: s2 }}
            className="absolute inset-0 grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Left */}
            <motion.div style={{ y: textY, opacity: textOpacity }}>
              <div className="order-2 lg:order-1 space-y-4 text-center lg:text-right">
              <span className="text-primary font-serif tracking-widest uppercase text-xs">Step 02</span>
              <h2 className="text-4xl md:text-6xl font-serif text-navy leading-tight">Expert <br/><span className="text-[#53BED1]">Matched.</span></h2>
              <p className="text-lg text-slate-600  max-w-md mx-auto lg:ml-auto lg:mr-0 font-serif">Instantly assigning the best-rated engineer in your vicinity.</p>
            </div>
            </motion.div>

            {/* Image Right */}
            <motion.img
              src={engineerReceiving}
              style={{ scale: imageScale, x: x2 }}
              className="rounded-[2.5rem] w-full max-h-[450px] object-fill shadow-2xl"
            />
          </motion.div>

          {/* ================= SCENE 3 ================= */}
          <motion.div
            style={{ opacity: s3 }}
            className="absolute w-full flex flex-col items-center justify-center"
          >
            <motion.div
              style={{
                x: useTransform(smoothProgress, [0.6, 0.8], ["15%", "-15%"]),
              }}
              className="relative flex justify-center"
            >
              <img
                src={engineerTraveling}
                className="rounded-2xl border border-border max-w-2xl lg:max-w-3xl"
                alt="Traveling"
              />
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ x: [0, 400], opacity: [0, 0.4, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                  className="absolute h-[2px] bg-primary w-40 z-20"
                  style={{ top: `${30 * i + 20}%`, left: "0%" }}
                />
              ))}
            </motion.div>
            <h2 className="text-3xl md:text-4xl  font-serif text-slate-600
">
              On the way to you
            </h2>
          </motion.div>

          {/* ================= SCENE 4 ================= */}
          <motion.div
            style={{ opacity: s4 }}
            className="absolute inset-0 grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Left */}
            <motion.div style={{ y: textY, opacity: textOpacity }}>
              <p className="text-sm font-semibold text-[#53BED1] uppercase tracking-widest mb-2">
                Step 04
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-green-100 text-green-700 border border-green-200  font-serif mb-4 text-sm tracking-wide">
                <CheckCircle2 size={18} /> Success
              </div>

              <h2 className="text-[40px] md:text-[56px] lg:text-[64px]  font-serif tracking-tight leading-[1.1] text-[#0f172a]">
                Back in <span className="text-[#53BED1]">Action</span>
              </h2>
              <p className="mt-6 text-xl text-slate-600">
                Repairs done. Productivity restored.
              </p>
            </motion.div>

            {/* Image Right */}
            <motion.img
              src={problemSolved}
              style={{ scale: imageScale, x: x4 }}
              className="rounded-[2.5rem] w-full max-h-[450px] object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// export default ScrollStory;

/* ================= COUNT UP STAT ================= */
function CountUp({ end, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const duration = 2200;
          const startTime = performance.now();

          const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) requestAnimationFrame(animate);
            else setCount(end);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="space-y-2 text-center">
      <h3 className="text-6xl font-black">{count.toLocaleString()}+</h3>
      <p className="text-lg font-bold opacity-90">{label}</p>
    </div>
  );
}

/* ================= MAIN HOME COMPONENT ================= */

export default function Home() {
  const services = [
    { name: "Physical Damage", image: physical },
    { name: "System Slow", image: system },
    { name: "Port Issue", image: port },
    { name: "Speaker & Camera", image: speaker },
    { name: "Software Crashing", image: Software },
    { name: "Excel not Working", image: excel },
    { name: "Laptop Hanging", image: hanging },
    { name: "Macbook Starting", image: macbook },
    { name: "MacOS Installing", image: macos },
    { name: "Not sure", image: problem },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
      <Helmet>
        <title>Door2fy | 10-Minute Doorstep Service App</title>
      </Helmet>

      {/* 1. HERO */}
      {/* ================= REAL HERO ================= */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src={Banner1}
          alt="background"
          className="absolute  w-full h-full object-cover"
        />

        {/* white fade for readability */}
        <div className="absolute inset-0  "></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl text-center px-6">
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-serif leading-tight text-slate-900">
            Relax, We're <span className="text-[#53BED1]">10</span>
            <br />
            <span className="bg-gradient-to-r from-[#1f3c88] via-[#2ea6c1] to-[#7cd5e4] bg-clip-text text-transparent">
              Minutes Away
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600">
            Door2fy delivers fast IT solutions to your doorstep.
          </p>

          <a
  href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-8 bg-gradient-to-r from-[#2ea6c1] to-[#7cd5e4] text-white font-semibold text-lg px-10 h-14 rounded-full shadow-lg hover:scale-105 transition inline-flex items-center gap-3">
    Download App →
  </button>
</a>


          <p className="mt-4 text-slate-500 font-medium">
            Instant Expert Assistance
          </p>

          {/* badges */}
          {/* badges */}
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur px-2 py-2 rounded-full shadow text-sm font-medium">
              <CheckCircle className="text-green-500" size={18} />
              Verified Engineers
            </div>

            <div className="flex items-center gap-2 bg-white/90 backdrop-blur px-2 py-2 rounded-full shadow text-sm font-medium">
              <Clock className="text-teal-500" size={18} />
              We Reach in 10 Minutes
            </div>

            <div className="flex items-center gap-2 bg-white/90 backdrop-blur px-2 py-2 rounded-full shadow text-sm font-medium">
              <CalendarDays className="text-blue-500" size={18} />
              24x7-Day Support
            </div>
          </div>
        </div>

        {/* FLOATING PHONE IMAGE */}
        <img
          src={Phone}
          alt="phone"
          className="
      absolute
      bottom-2
      right-[6%]
      w-[260px]
      md:w-[340px]
      lg:w-[320px]
      drop-shadow-2xl
      shadow-white/50
      z-20
    "
        />
      </section>

      {/* 2. SCROLL STORY (Added above stats as requested) */}
      <ScrollStory />

      {/* 3. STATS (Blue bar from your image) */}
      <section className="bg-[#53BED1] py-8 text-white relative z-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3  font-serif gap-12 text-center">
          <CountUp end={1000} label="Jobs Completed" />

          <CountUp end={1500} label="Hours Saved for Our Users" />

          <CountUp end={3000} label="Professionals Ready to Help" />
        </div>
      </section>

      {/* 4. SERVICES */}
      <section className="py-20 overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto text-center px-6 mb-16">
          <div className="inline-block px-4 py-1 mb-4 text-xs font-serif bg-[#53BED1]/10 text-[#53BED1] rounded-full uppercase tracking-widest">
            Our Services
          </div>
          <h2 className="text-5xl lg:text-6xl  font-serif font-black text-slate-900 mb-4">
            Trusted Support
          </h2>
          <p className="text-slate-400 text-xl italic font-medium">
            just a click away — that's Door2fy
          </p>
        </div>

        <div className="flex gap-8 animate-marquee">
          {[...services, ...services].map((s, i) => (
            <div
              key={i}
              className="min-w-[300px] bg-white border border-slate-100 p-3 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={s.image}
                  className="h-60 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={s.name}
                />
              </div>
              <p className="py-6 text-center  font-serif text-xl text-slate-800">
                {s.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl font-black  font-serif text-slate-900 mb-2">
            Why choose Door2fy?
          </h2>
          <p className="text-slate-500 text-xl font-medium mb-20">
            On-demand professional Engineer available 24x7
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "10-Minute Response",
                desc: "Local technicians reach you in record time.",
              },
              {
                icon: Shield,
                title: "Verified Professionals",
                desc: "Background verified and technical experts.",
              },
              {
                icon: Star,
                title: "Quality Guaranteed",
                desc: "30-day warranty on all repairs.",
              },
            ].map((f, i) => (
              <Card
                key={i}
                className="p-6 border-none shadow-sm rounded-[3rem] bg-white text-left group hover:bg-[#53BED1] transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20">
                  <f.icon className="h-8 w-8 text-[#53BED1] group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-white">
                  {f.title}
                </h3>
                <p className="text-slate-500 group-hover:text-white/80 leading-relaxed text-lg">
                  {f.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* 6. DOOR2FY VS OTHERS */}
<section className="py-18 bg-white border-t border-slate-100">
  <div className="max-w-5xl mx-auto px-6">
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1 mb-4 text-xs font-serif bg-[#53BED1]/10 text-[#53BED1] rounded-full uppercase tracking-widest">
        Comparison
      </span>
      <h2 className="text-5xl lg:text-6xl font-serif font-black text-slate-900">
        Door2fy vs Others
      </h2>
      <p className="text-slate-500 text-xl mt-4">
        See the difference before you choose
      </p>
    </div>

    <div className="overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-sm">
      <div className="grid grid-cols-3 bg-[#53BED1] text-white font-bold text-lg">
        <div className="p-6">Feature</div>
        <div className="p-6 text-center">Door2fy ⚡</div>
        <div className="p-6 text-center opacity-70">Others</div>
      </div>

      {[
        ["Response Time", "10 Minutes", "1–2 Days"],
        ["Doorstep Service", "Always", "Rare"],
        ["Verified Engineers", "100%", "Not Assured"],
        ["Live Tracking", "Available", "Not Available"],
        ["Pricing", "Transparent", "Hidden Charges"],
        ["Guarantee", "Money-Back", "None"],
      ].map((row, i) => (
        <div
          key={i}
          className={`grid grid-cols-3 text-lg ${
            i % 2 === 0 ? "bg-white" : "bg-slate-50"
          }`}
        >
          <div className="p-6 font-semibold">{row[0]}</div>
          <div className="p-6 text-center font-bold text-[#53BED1]">
            {row[1]}
          </div>
          <div className="p-6 text-center text-slate-500">
            {row[2]}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<div className="h-24 bg-gradient-to-b from-white to-slate-50" />
{/* 7. TRUSTED BY THOUSANDS */}
<section className="-py-8 bg-slate-50">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1 mb-4 text-xs font-serif text-[#53BED1] rounded-full uppercase tracking-widest">
        Customer
      </span>
      <h2 className="text-5xl lg:text-6xl font-serif font-black text-slate-900">
        Trusted by Clients
      </h2>
      <p className="text-slate-500 text-xl mt-4">
        Real people. Real experiences.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          name: "Rahul Sharma",
          city: "Delhi",
          text: "Engineer reached in 8 minutes. Laptop fixed at home. Super smooth experience.",
        },
        {
          name: "Priya Patel",
          city: "Mumbai",
          text: "MacBook was extremely slow. Door2fy fixed it in one visit. Loved it!",
        },
        {
          name: "Amit Kumar",
          city: "Bangalore",
          text: "No shop visits, no delays. Very professional service.",
        },
      ].map((t, i) => (
        <Card
          key={i}
          className="p-8 rounded-[2.5rem] border-none shadow-sm bg-white"
        >
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star
                key={j}
                className="w-4 h-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            “{t.text}”
          </p>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#53BED1] text-white flex items-center justify-center font-bold">
              {t.name[0]}
            </div>
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-slate-500">{t.city}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>


      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
