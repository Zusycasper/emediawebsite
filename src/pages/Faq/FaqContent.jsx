import React, { useState } from "react";
import { SlashIcon, Search } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const faqData = [
  // Services (updated)
  {
    category: "services",
    question: "What services does E-Media Biz provide?",
    answer: (
      <>
        <p className="mb-3">E-Media Biz (UK) — 11 years in IT. We provide end-to-end IT and digital services that combine human expertise with AI-assisted tools.</p>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Digital Marketing (AI-Enhanced)</h3>
            <p className="mt-1">AI-powered insights to optimize campaigns, target the right audience, and deliver measurable growth.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Search Engine Optimization (SEO)</li>
              <li>Email Marketing Campaigns</li>
              <li>AI-driven Marketing Automation</li>
              <li>Performance Analytics & Reporting</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Social Media Management (Smart & Automated)</h3>
            <p className="mt-1">AI helps us track trends, analyze engagement, and create strategies that keep your brand relevant.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Social Media Strategy & Planning</li>
              <li>Content Creation & Scheduling</li>
              <li>Trend & Sentiment Analysis with AI</li>
              <li>Social Ads Management</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Web & App Development (Future-Ready)</h3>
            <p className="mt-1">Custom websites and mobile apps with AI-driven features, personalization, and automation.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Web & Mobile App Development (iOS & Android)</li>
              <li>E-commerce Solutions</li>
              <li>AI-Powered Web & App Analytics, testing & security</li>
              <li>UI/UX for Web & Mobile & Optimization</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Cloud & IT Infrastructure Support (Intelligent & Secure)</h3>
            <p className="mt-1">Reliable cloud solutions, IT infrastructure, and AI-powered monitoring that ensure performance, security, and scalability.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Cloud infra & management (AWS, Azure, GCP)</li>
              <li>IT Infrastructure Setup & Optimization</li>
              <li>AI-powered Network Security & Monitoring</li>
              <li>Automation, Disaster Recovery & Business Continuity</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Creative Design (Human + AI)</h3>
            <p className="mt-1">Branding, UI/UX, and visuals crafted with human creativity and AI-assisted tools for impact and efficiency.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Brand Identity & Logo Design</li>
              <li>Marketing & Social Media Graphics</li>
              <li>Motion Graphics & Animation</li>
              <li>AI-Assisted Design & Prototyping</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    category: "services",
    question: "Do you offer custom service packages?",
    answer: (
      <p>
        Yes. We build tailored packages that combine the services you need. Whether it's a single campaign, a full-stack product delivery, or ongoing managed services, we'll propose a plan aligned to your goals and budget. <a href="/consultation">Book a free consultation</a> to get a custom proposal.
      </p>
    ),
  },
  {
    category: "services",
    question: "Which industries do you work with?",
    answer: (
      <p>
        We work across e-commerce, healthcare, education, technology, hospitality, and professional services. Our solutions are sector-agnostic and focus on measurable outcomes.
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
          <strong>Proposal:</strong> You receive a detailed timeline and pricing
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
            <strong>Monthly retainers:</strong> For continuous marketing or support
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
          <strong>Enterprise Support:</strong> 24/7 monitoring, priority response
        </li>
        <li>Training & documentation for in-house teams</li>
      </ul>
    ),
  },
];

function FaqContent() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

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

  const filteredFaq = faqData.filter(
    (item) =>
      (filter === "all" || item.category === filter) &&
      item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 hidden md:flex flex-col sticky top-0 h-screen overflow-y-auto p-6">
        <h2 className="font-semibold text-gray-800 mb-4">FAQ Topics</h2>

        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-4 shadow-sm">
          <Search className="h-4 w-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Category Links */}
        <ul className="space-y-2 text-sm">
          {categories.map((cat) => (
            <li key={cat.key}>
              <button
                onClick={() => setFilter(cat.key)}
                className={`block w-full text-left ${
                  filter === cat.key
                    ? "text-teal-500 font-medium"
                    : "text-gray-700 hover:text-teal-500"
                }`}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
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

        <h1 className="text-3xl font-bold mb-2 text-teal-600">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-8">Answers about E-Media Biz services (UK-based, 11 years in IT)</p>

        {/* All FAQ Content */}
        <div className="space-y-4">
          {filteredFaq.map((item, index) => (
            <div
              key={index}
              className="faq-item border border-teal-500 rounded-md shadow-sm"
              id={item.question.replace(/\s+/g, "-").toLowerCase()}
            >
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
                <div className="faq-answer p-4 text-gray-700">{item.answer}</div>
              )}
            </div>
          ))}

          {filteredFaq.length === 0 && (
            <p className="text-gray-500 italic">No matching results found.</p>
          )}
        </div>

        {/* Footer */}
        <div className="faq-footer mt-10 text-center">
          <p>Ready to start your project or need more details?</p>
          <div className="flex gap-4 justify-center mt-4">
            <a
              href="/contact"
              className="px-5 py-2 bg-teal-500 text-gray-800 rounded-lg hover:bg-[#B2519A]"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FaqContent;
