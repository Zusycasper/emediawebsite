"use client";
import React, { useState, useEffect, useRef } from "react";
import { SlashIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const sections = [
  { id: "introduction", title: "1. Introduction", content: "This Privacy Policy explains how test.e-mediabiz.com ('we', 'us', 'our') collects, uses, and protects your personal data when you visit our Website or use our Services. We are committed to safeguarding your privacy and complying with the UK GDPR, EU GDPR, and the Data Protection Act 2018." },
  { id: "data", title: "2. Data We Collect", content: "We may collect personal data you provide directly (e.g., name, email, billing details), automatically (e.g., IP address, cookies), or from third parties (e.g., payment providers, partners)." },
  { id: "use", title: "3. How We Use Your Data", content: "We process your data to provide and improve Services, process payments, communicate updates, ensure security, and comply with legal obligations." },
  { id: "legal", title: "4. Legal Basis for Processing", content: "We rely on contract, consent, legal obligation, and legitimate interests as lawful bases for processing under UK/EU GDPR." },
  { id: "cookies", title: "5. Cookies & Tracking", content: "We use cookies and similar technologies to improve user experience. You can manage cookies via browser settings. See our Cookie Policy for details." },
  { id: "sharing", title: "6. Sharing Your Data", content: "We do not sell personal data. We may share it with service providers, legal authorities, or partners (with consent or where lawful)." },
  { id: "transfers", title: "7. International Data Transfers", content: "If data is transferred outside the UK/EU, safeguards such as SCCs or adequacy decisions are applied." },
  { id: "retention", title: "8. Data Retention", content: "We retain data only as long as necessary, unless law requires longer retention (e.g., tax/financial records)." },
  { id: "rights", title: "9. Your Rights", content: "UK/EU residents have rights including access, rectification, erasure, restriction, portability, objection, and consent withdrawal." },
  { id: "security", title: "10. Data Security", content: "We apply organisational and technical measures to protect data against loss, misuse, or unauthorised access." },
  { id: "children", title: "11. Children’s Privacy", content: "Our Services are not directed at individuals under 18, and we do not knowingly collect children's data." },
  { id: "changes", title: "12. Changes to this Policy", content: "We may update this Privacy Policy, with changes posted here and reflected in the 'Last Updated' date." },
  { id: "contact", title: "13. Contact Us", content: "📧 Email: [Insert email address] | 🏢 Address: [Insert business address]. You may also lodge complaints with the ICO or your local data authority." },
];

export default function PrivacyContent() {
  const [query, setQuery] = useState("");
  const sidebarRef = useRef(null);

  const filteredSections = sections.filter(
    section =>
      section.title.toLowerCase().includes(query.toLowerCase()) ||
      section.content.toLowerCase().includes(query.toLowerCase())
  );

  // Optional: Highlight currently visible section for UX
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(s => {
        const el = document.getElementById(s.id);
        if (!el) return { id: s.id, offset: Infinity };
        return { id: s.id, offset: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      const closest = offsets.reduce((prev, curr) => (curr.offset < prev.offset ? curr : prev), offsets[0]);
      setActiveSection(closest.id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r sticky top-0 h-screen p-6 bg-gray-50">
        <h2 className="text-lg font-semibold mb-4">Privacy Policy</h2>
        <Input
          placeholder="Search sections..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          icon={<Search size={16} />}
          className="mb-4"
        />
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2 text-sm">
            {sections.map(section => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`block py-1 hover:text-teal-500 ${activeSection === section.id ? "font-semibold text-teal-600" : ""}`}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/home" className="hover:text-blue-500">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/privacy" className="hover:text-blue-500">
                  Privacy
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <h1 className="text-3xl font-bold mb-2 text-teal-500">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-6">(for test.e-mediabiz.com – UK/EU compliant)</p>
        <p className="text-gray-500 mb-8"><em>Last Updated: [Insert Date]</em></p>

        <div className="space-y-8 prose max-w-none text-gray-700">
          {filteredSections.map(section => (
            <section key={section.id} id={section.id}>
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <p>{section.content}</p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
