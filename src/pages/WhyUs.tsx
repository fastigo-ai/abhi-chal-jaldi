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
        <meta property="og:title" content="Why Choose Door2fy? | Trusted Laptop Repair Service" />
        <meta
          property="og:description"
          content="Door2fy is India's most trusted doorstep laptop repair service. Get professional, certified technicians and reliable computer service at your convenience."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Why Choose Door2fy?
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            India's most trusted DoorStep service platform, built on
            reliability, quality, and trust
          </p>
        </div>
      </section>

      {/* Main Reasons Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card
                key={index}
                className="p-8 space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center">
                  <reason.icon className="h-8 w-8 text-blue-400 " />
                </div>
                <h3 className="text-2xl font-bold">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#53BED1] text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg opacity-90">
              Numbers that speak for themselves
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Happy Customers" },
              { number: "9000+", label: "Hours Saved" },
              { number: "5000+", label: "Professionals" },
              { number: "4.9/5", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-5xl font-bold">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from real people
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 space-y-4 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-1 text-secondary">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience the Door2fy Difference
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of satisfied customers who trust Door2fy for their
            Doorstep & quick support.{" "}
          </p>
          <Button size="lg" className="bg-[#53BED1] hover:bg-[#53BED1]">
            Download the App Now
          </Button>
        </div>
      </section>
    </div>
  );
}
