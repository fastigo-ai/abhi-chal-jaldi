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
    <div className="min-h-screen pt-20">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">How It Works</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Get Professional Doorstep Engineer in just 6 simple steps{" "}
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="p-8 space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center relative z-10">
                  <step.icon className="h-8 w-8 text-blue-400" />
                </div>
                <div className="space-y-2 relative z-10">
                  <div className="text-sm font-semibold text-blue-400">
                    Step {step.number}
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#53BED1] text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              App Features
            </h2>
            <p className="text-lg opacity-90">
              Everything you need for hassle-free booking
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
                  <feature.icon className="h-8 w-8 text-blue-400" />
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
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
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
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Experience Pronto?
          </h2>
          <p className="text-xl text-muted-foreground">
            Download the app now and get your first booking done in under a
            minute
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

  <a
    href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button size="lg" className=" bg-[#53BED1] hover:bg-[#53BED1]">
      Download for iOS
    </Button>
  </a>

  <a
    href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button size="lg" className=" bg-[#53BED1] hover:bg-[#53BED1]">
      Download for Android
    </Button>
  </a>

</div>

        </div>
      </section>
    </div>
  );
}
