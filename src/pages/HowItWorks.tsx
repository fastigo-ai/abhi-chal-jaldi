import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  MapPin,
  Calendar,
  UserCheck,
  Sparkles,
  Star,
  Clock,
  CreditCard,
  CheckCircle2,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: Download,
      title: "Download the App",
      description:
        "Get the Pronto app from Google Play Store or Apple App Store. Sign up in less than a minute with your phone number.",
    },
    {
      number: "2",
      icon: MapPin,
      title: "Set Your Location",
      description:
        "Enter your address and let us know where you need Quick Support services. We serve across metro cities in India.",
    },
    {
      number: "3",
      icon: Calendar,
      title: "Choose Your Service",
      description:
        "Select from our range of Quick Support services. Pick a time that works best for you - we're available 24x7.",
    },
    {
      number: "4",
      icon: UserCheck,
      title: "Professional Assigned",
      description:
        "A verified professional Engineer near you is automatically assigned. Track their arrival in real-time on the app.",
    },
    {
      number: "5",
      icon: Sparkles,
      title: "Service Completed",
      description:
        "Our professional arrives within 10 minutes and completes the job to perfection. All materials and equipment included.",
    },
    {
      number: "6",
      icon: Star,
      title: "Rate & Review",
      description:
        "Share your experience and help us maintain our high standards. Your feedback helps us serve you better.",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description:
        "Know exactly when your professional will arrive with live GPS tracking",
    },
    {
      icon: CreditCard,
      title: "Cashless Payments",
      description: "Pay securely through the app with multiple payment options",
    },
    {
      icon: CheckCircle2,
      title: "Quality Checks",
      description:
        "Every service is quality-checked to ensure your complete satisfaction",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I get service?",
      answer:
        "Our professionals typically arrive within 10 minutes of booking, depending on your location and time of day.",
    },
    {
      question: "Are the professionals background verified?",
      answer:
        "Yes, every professional Engineer goes through rigorous background verification and police clearance before joining our team.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer:
        "We offer a 100% satisfaction guarantee. If you're not happy, we'll send someone else or provide a full refund.",
    },
    {
      question: "Do I need to provide Laptop Hardware?",
      answer:
        "No, our professionals come fully equipped with all necessary Laptop materials and equipment.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      <Helmet>
        <title>How It Works | Door2fy - 10 Minute Doorstep Service</title>
        <meta
          name="description"
          content="Learn how Door2fy works — from booking to doorstep repair in 10 minutes. Quick, professional, and guaranteed tech support made simple."
        />
        <meta
          name="keywords"
          content="door2fy repair process, laptop repair booking, doorstep repair service, laptop pickup and drop, easy repair steps, how laptop repair works"
        />
        <meta property="og:title" content="How Door2fy Works | Quick Doorstep Tech Support" />
        <meta
          property="og:description"
          content="Book a verified engineer, track in real-time, and get tech support at your doorstep within 10 minutes. Learn how it works!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://door2fy.com/how-it-works" />
      </Helmet>
      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter text-slate-900 leading-[0.9]">
            HOW IT <span className="text-primary text-gradient">WORKS</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Premium Engineering support at your doorstep in 6 seamless steps. No waiting, no friction, just results.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="p-10 space-y-6 hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border border-slate-100 rounded-[3rem] relative overflow-hidden group bg-white"
              >
                {/* Step Number Overlay */}
                <div className="absolute -top-10 -right-10 text-[120px] font-display font-black text-slate-50 group-hover:text-primary/5 transition-colors select-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center relative z-10 transition-colors group-hover:bg-primary group-hover:text-white">
                  <step.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <div className="space-y-4 relative z-10">
                  <div className="text-sm font-display font-bold text-primary uppercase tracking-widest">
                    Step {step.number}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900">{step.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-transparent opacity-50" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter mb-6 leading-[0.9]">
              ULTIMATE <span className="text-secondary">ADVANTAGE</span>
            </h2>
            <p className="text-xl opacity-90 font-medium max-w-2xl mx-auto">
              A frictionless experience built into every line of code. Everything you need for hassle-free booking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-6 group">
                <div className="h-24 w-24 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-2xl">
                  <feature.icon className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-3xl font-display font-bold">{feature.title}</h3>
                <p className="opacity-90 text-lg leading-relaxed font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
              QUICK <span className="text-primary text-gradient">ANSWERS</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium">
              Clarity is the first step to a great service experience.
            </p>
          </div>

          <div className="grid gap-8">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="p-10 border-none shadow-sm rounded-[2.5rem] bg-white transition-all hover:shadow-premium group"
              >
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{faq.question}</h3>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -ml-48 -mb-48" />
        
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter leading-[0.9]">
            READY TO <span className="text-primary">MOBILIZE?</span>
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
            Join thousands of users who have revolutionized how they handle tech emergencies. Download the app and book in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-primary hover:bg-emerald-600 text-white font-display font-bold px-12 py-8 rounded-2xl text-2xl shadow-2xl transition hover:scale-[1.02] active:scale-[0.98]">
                Download for Android
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
