import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, Mail, MessageCircle } from "lucide-react";
import EngineerReviews from "./EngineerReviews";

export default function FAQs() {
  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What is Door2fy?",
          answer:
            "Door2fy is India's fastest doorstep service and quick support platform that connects you with verified professional engineers who can arrive at your location within minutes of booking.",
        },
        {
          question: "How do I book a service on Door2fy?",
          answer:
            "You can easily book a service through the Door2fy app by selecting the service you need, choosing a convenient time slot, and confirming your booking.",
        },
        {
          question: "How quickly can a technician reach my location?",
          answer:
            "Response times may vary based on your location and technician availability, but Door2fy aims to provide fast and convenient doorstep support as quickly as possible.",
        },
        {
          question: "Are Door2fy technicians verified?",
          answer:
            "Yes, all Door2fy technicians undergo a verification process to ensure professionalism, reliability, and quality service.",
        },
        {
          question: "Can Door2fy repair both laptops and desktop computers?",
          answer:
            "Yes, Door2fy offers repair and support services for laptops, desktop PCs, and MacBook devices.",
        },
        {
          question: "What if my issue cannot be fixed during the visit?",
          answer:
            "If the issue requires additional diagnostics, replacement parts, or advanced repair, the technician will guide you on the next steps and available solutions.",
        },
        {
          question: "How much do Door2fy services cost?",
          answer:
            "Service charges depend on the type of issue and the work required. Pricing details are shared transparently before any major repair work begins.",
        },
        {
          question: "Can I schedule a service for my office or business?",
          answer:
            "Yes, Door2fy provides tech support services for both residential customers and businesses requiring computer and IT assistance.",
        },
        {
          question: "How can I contact Door2fy support?",
          answer:
            "You can reach Door2fy support through the Android or iOS app.",
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
    <div className="min-h-screen pt-20 font-sans antialiased text-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-snug">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium italic">
            Find answers to common questions about Door2fy services
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#53BED1]">
                {category.category}
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#53BED1] transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-500 pt-2 pb-4 leading-relaxed font-medium">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-slate-500 font-medium">
              Our support team is here to help you 24x7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* <Card className="p-6 text-center space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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
            </Card> */}

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

      {/* Leave a Review Section */}
      <EngineerReviews showList={false} />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-snug">
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
