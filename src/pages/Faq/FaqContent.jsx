import React, { useState } from "react";
import { SlashIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const faqData = [
  // Services
  {
    category: "services",
    question: "What services does E-Media Biz provide?",
    answer: (
      <>
        <p>
          E-Media Biz, based in the UK with over 11 years of experience, offers
          a complete suite of digital media and business solutions:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Digital Media Production:</strong> Video production,
            animation, branding, and graphic design
          </li>
          <li>
            <strong>Web Development:</strong> Websites, e-commerce platforms,
            custom applications
          </li>
          <li>
            <strong>Digital Marketing:</strong> SEO, social media campaigns,
            pay-per-click (PPC), email marketing
          </li>
          <li>
            <strong>Business Solutions:</strong> CRM implementation,
            automation, consulting
          </li>
          <li>
            <strong>Content Creation:</strong> Blog writing, video scripts,
            social media content
          </li>
        </ul>
      </>
    ),
  },
  {
    category: "services",
    question: "Do you offer custom service packages?",
    answer: (
      <p>
        Yes. We understand every business has unique goals. Our team builds
        fully tailored service packages designed to fit your objectives and
        budget. <a href="/consultation">Book a free consultation</a> to explore
        your options.
      </p>
    ),
  },
  {
    category: "services",
    question: "Which industries do you work with?",
    answer: (
      <p>
        Over the past 11+ years, we’ve worked with businesses in e-commerce,
        healthcare, education, technology, hospitality, and professional
        services. Our adaptable approach ensures results across diverse sectors.
      </p>
    ),
  },

  // Ordering
  {
    category: "ordering",
    question: "How do I start a project with E-Media Biz?",
    answer: (
      <ol className="list-decimal list-inside space-y-1">
        <li>
          <strong>Consultation:</strong> We discuss your goals
        </li>
        <li>
          <strong>Proposal:</strong> You receive a detailed timeline and
          pricing
        </li>
        <li>
          <strong>Agreement:</strong> Approve and sign off
        </li>
        <li>
          <strong>Onboarding:</strong> We gather all assets and access needed
        </li>
        <li>
          <strong>Execution:</strong> Our team begins production
        </li>
      </ol>
    ),
  },
  {
    category: "ordering",
    question: "What information do you need from me?",
    answer: (
      <ul className="list-disc list-inside space-y-1">
        <li>Business goals and target audience</li>
        <li>Brand guidelines (logos, fonts, colors)</li>
        <li>Content assets (text, images, video)</li>
        <li>Access to platforms or systems (if relevant)</li>
        <li>Preferred deadlines or milestones</li>
      </ul>
    ),
  },

  // Pricing
  {
    category: "pricing",
    question: "How do you structure pricing?",
    answer: (
      <>
        <p>We offer flexible pricing models:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Fixed project rate:</strong> For well-defined work
          </li>
          <li>
            <strong>Hourly rate:</strong> For ongoing or open-ended tasks
          </li>
          <li>
            <strong>Monthly retainers:</strong> For continuous marketing or
            support
          </li>
          <li>
            <strong>Enterprise plans:</strong> For large-scale, complex projects
          </li>
        </ul>
      </>
    ),
  },
  {
    category: "pricing",
    question: "What payment methods do you accept?",
    answer: (
      <ul className="list-disc list-inside space-y-1">
        <li>Credit & Debit Cards (Visa, MasterCard, AmEx)</li>
        <li>Bank transfers</li>
        <li>PayPal</li>
        <li>Stripe</li>
        <li>Installment plans available for large projects</li>
      </ul>
    ),
  },

  // Support
  {
    category: "support",
    question: "Do you provide support after project completion?",
    answer: (
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>Basic Support:</strong> Maintenance & updates
        </li>
        <li>
          <strong>Pro Support:</strong> Ongoing updates and dedicated contact
        </li>
        <li>
          <strong>Enterprise Support:</strong> 24/7 monitoring, priority
          response
        </li>
        <li>Training & documentation for in-house teams</li>
      </ul>
    ),
  },
];

function FaqContent() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const categories = [
    { key: "all", label: "All Questions" },
    { key: "services", label: "Our Services" },
    { key: "ordering", label: "Ordering Process" },
    { key: "pricing", label: "Pricing & Payments" },
    { key: "support", label: "Project Support" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumb className="px-6 py-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:text-blue-500" href="/home">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:text-teal-500" href="/FAQ-emedia">
              FAQ
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* FAQ Section */}
      <section className="faq-section py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2 text-teal-500">Frequently Asked Questions</h1>
          <p className="text-gray-600 mb-6">
            Answers about E-Media Biz services (UK-based, 11+ years in the
            industry)
          </p>

          {/* Categories */}
          <div className="faq-categories flex flex-wrap gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-4 py-2 rounded-md border ${
                  filter === cat.key
                    ? "bg-teal-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-teal-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="faq-accordion space-y-4">
            {faqData
              .filter((item) => filter === "all" || item.category === filter)
              .map((item, index) => (
                <div key={index} className="faq-item border border-teal-500 rounded-md shadow-sm">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="faq-question flex justify-between items-center w-full text-left p-4 font-medium"
                  >
                    <span>{item.question}</span>
                    <span className="icon text-xl">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="faq-answer p-4 text-gray-700">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
          </div>

          {/* Footer */}
          <div className="faq-footer mt-10 text-center">
            <p>Ready to start your project or need more details?</p>
            <div className="flex gap-4 justify-center mt-4">
              {/* <a
                href="/get-quote"
                className="px-5 py-2 bg-teal-500 text-white rounded-lg hover:bg-blue-600"
              >
                Get a Free Quote
              </a> */}
              <a
                href="/contact"
                className="px-5 py-2 bg-teal-500 text-gray-800 rounded-lg hover:bg-[#B2519A] "
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FaqContent;
