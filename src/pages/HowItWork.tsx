import React from "react";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Request Service",
    description: "App ya website par apna problem select karein aur service request bhejein.",
  },
  {
    title: "Engineer Assigned",
    description: "Door2fy professional aapke request ke 10 minutes ke andar assigned hota hai.",
  },
  {
    title: "Service at Your Doorstep",
    description: "Engineer aapke location par aakar problem ko diagnose karke fix karta hai.",
  },
];

export default function HowItWork() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          How Door2fy Works
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Simple steps to get professional support right at your doorstep.
        </p>
      </div>

      <div className="space-y-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Icon */}
            <div className="w-16 h-16 bg-[#028dcd] text-white rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-8 h-8" />
            </div>

            {/* Text */}
            <div className="mt-4 md:mt-0 md:w-3/4 px-4 text-left">
              <h3 className="text-2xl font-semibold text-gray-800">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-600 mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
