import React, { useState } from "react";
import { SlashIcon, Search } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from "../../components/Footer/Footer";

const termsData = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <p>
        Welcome to <a className="hover:text-blue-500 underline" href="https://test.e-mediabiz.com/">test.e-mediabiz.com</a> (the “Website”). These
        Terms of Service (“Terms”) govern your access to and use of our Website,
        services, and content (together, the “Services”). By using our Services,
        you agree to be bound by these Terms. If you do not agree, please do not
        use the Website.
      </p>
    ),
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    content: (
      <p>
        You must be at least 18 years old (or the legal age of majority in your
        country) to use our Services. By using this Website, you confirm that
        you meet this requirement.
      </p>
    ),
  },
  {
    id: "use-of-services",
    title: "3. Use of Services",
    content: (
      <>
        <p>You agree to use the Services only for lawful purposes and in accordance with these Terms.</p>
        <p>You must not misuse our Services, including by attempting unauthorised access, introducing malware, or engaging in fraudulent or harmful activity. We reserve the right to suspend or terminate your access if you breach these Terms.</p>
      </>
    ),
  },
  {
    id: "accounts",
    title: "4. Accounts",
    content: (
      <p>
        Some Services may require you to create an account. You agree to provide
        accurate, complete, and current information. You are responsible for
        maintaining the confidentiality of your account credentials and all
        activities under your account.
      </p>
    ),
  },
  {
    id: "content",
    title: "5. Content",
    content: (
      <>
        <p>
          <strong>Your Content:</strong> If you upload, post, or submit content, you grant us a worldwide, non-exclusive, royalty-free licence to use, display, and distribute it solely for the purpose of providing our Services.
        </p>
        <p>
          <strong>Our Content:</strong> All intellectual property on the Website (including text, design, graphics, logos, software) is owned by or licensed to us. You may not copy, modify, or distribute our content without permission.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "6. Payments (if applicable)",
    content: (
      <>
        <p>
          If you purchase any paid Services, you agree to provide accurate billing information and authorise us (or our payment providers) to charge your chosen payment method.
        </p>
        <p>
          Prices include UK VAT where applicable. Refunds are provided in accordance with UK consumer law and our Refund Policy.
        </p>
      </>
    ),
  },
  {
    id: "consumer-rights",
    title: "7. Consumer Rights (UK/EU)",
    content: (
      <>
        <p>If you are a consumer in the UK or EU:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>You have the right to withdraw from most online purchases within 14 days (“cooling-off period”), unless an exception applies (e.g., digital content that has already been delivered and accessed).</li>
          <li>Your statutory rights under the Consumer Rights Act 2015 and EU Consumer Rights Directive remain unaffected.</li>
        </ul>
      </>
    ),
  },
  {
    id: "privacy",
    title: "8. Privacy & Data Protection",
    content: (
      <p>
        We process personal data in line with the UK GDPR and EU GDPR (where applicable). Please see our Privacy Policy for details on how we collect, use, and protect your data.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "9. Third-Party Services",
    content: (
      <p>
        Our Services may include links to third-party websites or services. We are not responsible for their content, policies, or practices.
      </p>
    ),
  },
  {
    id: "liability",
    title: "10. Limitation of Liability",
    content: (
      <>
        <p>We provide the Services on an “as is” and “as available” basis.</p>
        <p>To the fullest extent permitted by law, we exclude all warranties, conditions, or representations (express or implied).</p>
        <p>We are not liable for any loss of profits, business interruption, or indirect damages, except where liability cannot be excluded by law (e.g., for death or personal injury caused by negligence).</p>
      </>
    ),
  },
  {
    id: "termination",
    title: "11. Termination",
    content: (
      <p>
        We may suspend or terminate your account or access if you breach these Terms. You may stop using the Services at any time by closing your account (if applicable).
      </p>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to Terms",
    content: (
      <p>
        We may update these Terms from time to time. The updated Terms will be effective when posted on this page. We will notify you of material changes where legally required.
      </p>
    ),
  },
  {
    id: "law",
    title: "13. Governing Law & Jurisdiction",
    content: (
      <p>
        These Terms are governed by the laws of England and Wales. If you are a consumer in the EU, you may also benefit from mandatory consumer protection laws of your country of residence. Disputes will be subject to the exclusive jurisdiction of the courts of England and Wales, unless otherwise required by law.
      </p>
    ),
  },
  {
    id: "contact",
    title: "14. Contact Us",
    content: (
      <>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <ul className="list-none mt-2">
          <li>
            📧 Email: 
            <a href={`mailto:info@e-mediabiz.com`} className="hover:text-blue-500 hover:underline">info@e-mediabiz.com</a>
          </li>
          <li>🏢 Address: 30 The Gossamers
 Watford 
Hertsfordshire 
WD25 9AJ</li>
        </ul>
      </>
    ),
  },
];


function TermsOfService() {
  const [search, setSearch] = useState("");

  const filteredTerms = termsData.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      (typeof item.content === "string"
        ? item.content.toLowerCase().includes(search.toLowerCase())
        : false)
  );

  return (
    <>
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 hidden md:flex flex-col sticky top-0 h-screen overflow-y-auto p-6">
        <h2 className="font-semibold text-gray-800 mb-4">Terms Of Service</h2>

        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-4 shadow-sm">
          <Search className="h-4 w-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search terms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Quick Links */}
        <ul className="space-y-2 text-sm">
          {termsData.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block hover:text-teal-500 transition"
              >
                {item.title}
              </a>
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
              <BreadcrumbLink className="text-[12px] hover:text-blue-500" href="/home">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              /
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-[12px] hover:text-blue-500" href="/terms">
                Terms of Service
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl font-bold mb-2 text-teal-600">Terms of Service</h1>
        <p className="text-sm text-gray-600 mb-1">
          (for test.e-mediabiz.com – UK/EU compliant)
        </p>
        <p className="text-gray-500 mb-8">
          <em>Last Updated: 10.03.2025</em>
        </p>

        {/* Terms Sections */}
        <div className="space-y-10">
          {(search ? filteredTerms : termsData).map((item) => (
            <section key={item.id} id={item.id}>
              <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
              <div className="prose prose-sm text-gray-700">{item.content}</div>
            </section>
          ))}

          {search && filteredTerms.length === 0 && (
            <p className="text-gray-500 italic">No results found.</p>
          )}
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
}

export default TermsOfService;
