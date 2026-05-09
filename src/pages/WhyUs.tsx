import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  Shield,
  Star,
  Users,
  Award,
  Heart,
  Zap,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function WhyUs() {
  const reasons = [
    {
      icon: Clock,
      title: "Lightning Fast Service",
      description:
        "Get professional help at your doorstep within 10 minutes of booking. No more waiting, no more planning around availability.",
    },
    {
      icon: Shield,
      title: "100% Verified Professionals",
      description:
        "Every Door2fy professional undergoes rigorous background verification, police clearance, and skill training before joining our team.",
    },
    {
      icon: Star,
      title: "Quality Guaranteed",
      description:
        "We stand behind our service with a 100% satisfaction guarantee. Not happy? We'll make it right or refund your money.",
    },
    {
      icon: Users,
      title: "Trained & Professional",
      description:
        "Our team members receive comprehensive training in professional Engineering techniques, customer service, and safety protocols.",
    },
    {
      icon: Award,
      title: "Trusted by Thousands",
      description:
        "Join 5000+ satisfied customers who have experienced the Door2fy difference in their homes across India.",
    },
    {
      icon: Heart,
      title: "Fair & Transparent Pricing",
      description:
        "No hidden charges, no surprises. What you see is what you pay. Plus, we ensure fair wages for all our professionals.",
    },
    {
      icon: Zap,
      title: "Available 24x7",
      description:
        "Early morning or late night, weekday or weekend – we're always available when you need us most.",
    },
    {
      icon: CheckCircle2,
      title: "Eco-Friendly Products",
      description:
        "We deploy only professionally trained engineers who use certified, eco-friendly tools and methods — ensuring safety for your devices, your family, and the environment.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      text: "Absolutely love Door2fy! The engineer arrived within 8 minutes and did an amazing job. My laptop is rebooting fast!",
    },
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      rating: 5,
      text: "Professional, punctual, and thorough. The verification process gives me peace of mind. Highly recommended!",
    },
    {
      name: "Anita Desai",
      location: "Bangalore",
      rating: 5,
      text: "Game changer for working professionals like me. Book at late night if system crashing, no worries for morning meeting Engineers will be there at instant!",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Why Choose Door2fy? | Trusted Laptop Repair Service</title>
        <meta
          name="description"
          content="Door2fy is India's most trusted doorstep laptop repair service. Get professional, certified technicians and reliable computer service at your convenience."
        />
        <meta
          name="keywords"
          content="why choose door2fy, trusted laptop repair service, professional laptop technicians, reliable computer service India, doorstep repair experts, certified laptop engineers"
        />
        <meta
          property="og:title"
          content="Why Choose Door2fy? | Trusted Laptop Repair Service"
        />
        <meta
          property="og:description"
          content="Door2fy is India's most trusted doorstep laptop repair service. Get professional, certified technicians and reliable computer service at your convenience."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <section className=" pt-12 px-4 sm:px-6 lg:px-8 bg-[#53BED1]/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#53BED1]/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h1 className="text-3xl md:text-6xl font-serif font-semibold text-slate-900 leading-snug">
            Why Choose <br className="hidden md:block" /> Door2fy?
          </h1>
          <p className="text-md md:text-xl text-slate-600 font-medium italic max-w-2xl mx-auto">
            India's most trusted DoorStep service platform, built on
            reliability, quality, and trust
          </p>
        </div>
      </section>

      {/* Main Reasons Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card
                key={index}
                className="p-8 space-y-6 hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border border-slate-100 rounded-[2.5rem] relative overflow-hidden group bg-white"
              >
                <div className="h-16 w-16 rounded-2xl bg-[#53BED1]/10 flex items-center justify-center transition-colors group-hover:bg-[#53BED1] group-hover:text-white">
                  <reason.icon className="h-8 w-8 text-[#53BED1] group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-serif font-semibold mb-1">{reason.title}</h3>
                  <p className="text-sm text-slate-500">
                    {reason.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#53BED1] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent opacity-50" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-white mb-2 leading-snug">Our Impact</h2>
            <p className="text-lg md-text-xl opacity-90 font-serif font-medium max-w-2xl mx-auto">
              Numbers that speak for themselves
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
            {[
              { number: "10,000+", label: "Happy Customers" },
              { number: "9000+", label: "Hours Saved" },
              { number: "5000+", label: "Professionals" },
              { number: "4.9/5", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="text-3xl md:text-5xl font-serif font-semibold transition-transform group-hover:scale-110">{stat.number}</div>
                <div className="text-md md:text-lg opacity-90 font-serif font-semibold tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-slate-900 mb-6 leading-snug">
              What Our Customers Say
            </h2>
            <p className="text-md md:text-lg text-slate-500 font-medium italic max-w-2xl mx-auto">
              Real experiences from real people who trust Door2fy
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 md:p-4 space-y-6 hover:shadow-premium transition-all duration-500 rounded-[2rem] bg-white border border-slate-100 group"
              >
                <div className="flex items-center space-x-1 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 italic text-md md:text-lg leading-relaxed font-medium">
                  "{testimonial.text}"
                </p>
                <div className="pt-6 border-t border-slate-50">
                  <div className="font-serif font-semibold text-slate-900 text-md md:text-lg">{testimonial.name}</div>
                  <div className="text-xs md:text-sm text-[#53BED1] font-semibold uppercase tracking-wider">
                    {testimonial.location}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#53BED1] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-semibold text-white leading-snug">
            Experience the <br className="hidden md:block" /> Door2fy Difference
          </h2>
          <p className="text-md md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto font-medium">
            Join thousands of satisfied customers who trust us for their IT
            needs. Download the app today and experience instant support.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" className="bg-white text-[#53BED1] hover:bg-slate-50 font-serif font-semibold px-12 py-8 rounded-full text-2xl shadow-2xl transition hover:scale-[1.02] active:scale-[0.98]">
              Download the App Now
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
