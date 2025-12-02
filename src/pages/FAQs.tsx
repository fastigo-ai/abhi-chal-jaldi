import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function FAQs() {
  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What is Door2fy?",
          answer:
            "Door2fy is India's fastest Doorstep service & Quick Support  platform that connects you with verified professional Engineers who can arrive at your doorstep within 10 minutes of booking.",
        },
        {
          question: "Where is Door2fy available?",
          answer:
            "Door2fy is currently available in major metro cities including Delhi NCR, Mumbai, Bangalore, Hyderabad, Pune, and Chennai. We're rapidly expanding to more cities.",
        },
        {
          question: "What are your service hours?",
          answer:
            "Door2fy services are available 24x7, 365 days a year. You can book a service anytime that suits your schedule.",
        },
        {
          question: "How do I download the Door2fy app?",
          answer:
            "You can download the Door2fy app from Google Play Store for Android devices or Apple App Store for iOS devices. Simply search for 'Door2fy' and install.",
        },
      ],
    },
    {
      category: "Booking & Pricing",
      questions: [
        {
          question: "How do I book a service?",
          answer:
            "Download the app, sign up with your phone number, select your desired service, choose a time slot, and confirm your booking. A professional will be assigned immediately.",
        },
        {
          question: "Can I schedule services in advance?",
          answer:
            "Yes! You can schedule services up to 7 days in advance through the app. We also support recurring bookings for Quick support.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major payment methods including credit/debit cards, UPI, net banking, and popular mobile wallets. Payment is processed securely through the app.",
        },
        {
          question: "Are there any hidden charges?",
          answer:
            "No, we believe in transparent pricing. The price you see in the app is the final price you pay. There are no hidden charges or surprise fees.",
        },
        {
          question: "Do you offer discounts or promotions?",
          answer:
            "Yes! We regularly offer discounts for first-time users, bundle packages, and seasonal promotions. Check the app for current offers.",
        },
      ],
    },
    {
      category: "Service & Quality",
      questions: [
        {
          question: "Are your professionals verified?",
          answer:
            "Absolutely! Every Door2fy professional undergoes rigorous background verification, police clearance, and skill training before joining our platform.",
        },
        {
          question: "Do I need to provide laptop hardware essentials?",
          answer:
            "No, our professionals come fully equipped with all necessary Laptop hardware essentials, equipment, and eco-friendly products.",
        },
        {
          question: "What if I'm not satisfied with the service?",
          answer:
            "We offer a 100% satisfaction guarantee. If you're not happy with the service, contact us immediately and we'll either send another professional or provide a full refund.",
        },
        {
          question: "Can I request the same professional for future bookings?",
          answer:
            "Yes! If you're happy with a particular professional, you can save them as a favorite and request them for future bookings through the app.",
        },
        {
          question: "What hardware products do you use?",
          answer:
            "We use only certified, brand hardware as respect to the user requirements.",
        },
      ],
    },
    {
      category: "Safety & Security",
      questions: [
        {
          question: "How do you ensure my safety?",
          answer:
            "All professionals are background-verified with police clearance. We also have real-time tracking, and you can share your service details with family members through the app.",
        },
        {
          question: "What COVID-19 precautions do you take?",
          answer:
            "All our professionals are vaccinated, wear masks, maintain social distancing, and follow strict hygiene protocols. Equipment is sanitized before and after each service.",
        },
        {
          question: "Is my personal information secure?",
          answer:
            "Yes, we take data privacy very seriously. All personal information is encrypted and stored securely. We never share your data with third parties without consent.",
        },
      ],
    },
    {
      category: "Cancellation & Refunds",
      questions: [
        {
          question: "Can I cancel or reschedule a booking?",
          answer:
            "Yes, you can cancel or reschedule bookings through the app. Cancellations made more than 2 hours before the scheduled time are free. Late cancellations may incur a small fee.",
        },
        {
          question: "How long do refunds take?",
          answer:
            "Refunds are processed within 24 hours of approval and typically reflect in your account within 5-7 business days, depending on your bank.",
        },
        {
          question: "What is your refund policy?",
          answer:
            "If you're not satisfied with the service, contact us within 24 hours. After reviewing your case, we'll either send another professional or process a full refund.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Find answers to common questions about Door2fy services
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h2 className="text-3xl font-bold text-[#53BED1]">
                {category.category}
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#53BED1]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground">
              Our support team is here to help you 24x7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
                <Phone className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Speak with our customer support team
                </p>
                <Button className="bg-[#53BED1] hover:bg-[#53BED1]" size="sm">
                  +91 9599094941
                </Button>
              </div>
            </Card>

            <Card className="p-6 text-center space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  We'll respond within 24 hours
                </p>
                <Button className="bg-[#53BED1] hover:bg-[#53BED1]" size="sm">
                  support@Door2fy.in
                </Button>
              </div>
            </Card>

            <Card className="p-6 text-center space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-16 w-16 rounded-full bg-blue-50  flex items-center justify-center mx-auto">
                <MessageCircle className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Live Chat</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Chat with us in the app
                </p>
                <Button className="bg-[#53BED1] hover:bg-[#53BED1]" size="sm">
                  Open App Chat
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Get Started?
          </h2>

          <p className="text-xl  text-muted-foreground">
            Download the app and book your first Doorstep & Quick support
            Service in under a minute
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-[#53BED1] hover:bg-[#53BED1] my-6">
              Download for Android
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
