import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Calendar, 
  UserCheck, 
  Sparkles, 
  CreditCard, 
  Star,
  Download,
  MapPin,
  Clock,
  CheckCircle2
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Download the App",
      description: "Get the Pronto app from Google Play Store or Apple App Store. Sign up in less than a minute with your phone number.",
    },
    {
      number: "02",
      icon: MapPin,
      title: "Set Your Location",
      description: "Enter your address and let us know where you need cleaning services. We serve across major cities in India.",
    },
    {
      number: "03",
      icon: Calendar,
      title: "Choose Your Service",
      description: "Select from our range of cleaning services or bundles. Pick a time that works best for you - we're available 24x7.",
    },
    {
      number: "04",
      icon: UserCheck,
      title: "Professional Assigned",
      description: "A verified Pronto professional near you is automatically assigned. Track their arrival in real-time on the app.",
    },
    {
      number: "05",
      icon: Sparkles,
      title: "Service Completed",
      description: "Our professional arrives within 10 minutes and completes the job to perfection. All materials and equipment included.",
    },
    {
      number: "06",
      icon: Star,
      title: "Rate & Review",
      description: "Share your experience and help us maintain our high standards. Your feedback helps us serve you better.",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Know exactly when your professional will arrive with live GPS tracking",
    },
    {
      icon: CreditCard,
      title: "Cashless Payments",
      description: "Pay securely through the app with multiple payment options",
    },
    {
      icon: CheckCircle2,
      title: "Quality Checks",
      description: "Every service is quality-checked to ensure your complete satisfaction",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I get service?",
      answer: "Our professionals typically arrive within 10 minutes of booking, depending on your location and time of day.",
    },
    {
      question: "Are the professionals background verified?",
      answer: "Yes, every Pronto professional goes through rigorous background verification and police clearance before joining our team.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy, we'll send someone else or provide a full refund.",
    },
    {
      question: "Do I need to provide cleaning materials?",
      answer: "No, our professionals come fully equipped with all necessary cleaning materials and equipment.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent via-background to-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">How It Works</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Get professional cleaning help in just 6 simple steps
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="p-8 space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5">
                  {step.number}
                </div>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center relative z-10">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2 relative z-10">
                  <div className="text-sm font-semibold text-primary">Step {step.number}</div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">App Features</h2>
            <p className="text-lg opacity-90">Everything you need for hassle-free booking</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Got questions? We've got answers</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Experience Pronto?</h2>
          <p className="text-xl text-muted-foreground">
            Download the app now and get your first booking done in under a minute
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Download for iOS</Button>
            <Button size="lg" variant="outline">Download for Android</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
