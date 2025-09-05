import React from "react";
import { Button } from "@/components/ui/button";
import ContactFormSection from "./ContactFormSection";

function ContactForm() {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900 mb-1">
                Hey there!
              </h1>
              <h1 className="text-5xl font-bold text-teal-500">Let's Talk</h1>

              <p className="text-gray-600 text-lg font-bold leading-relaxed mb-1">
                Need help with your Website or Digital Marketing?
              </p>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                Got a question? Fill out the form below, and one of our team
                members will get back to you soon.
              </p>

              <p className="text-gray-600 text-lg font-bold leading-relaxed mb-1">
                Need to talk with an agent?
              </p>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                No worries. You can email us directly at one of our regional
                offices; one of our agents will get back to you soon
              </p>
            </div>

            <div className="w-[full]">
             <ContactFormSection />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
