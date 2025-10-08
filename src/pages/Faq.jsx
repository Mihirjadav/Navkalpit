import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    id: 1,
    q: "What is your turnaround time for PCB prototypes?",
    a: "Our typical turnaround for PCB prototypes is 3-5 business days depending on complexity and quantities.",
  },
  {
    id: 2,
    q: "What file formats do you accept for quotes?",
    a: "We accept Gerber (RS-274X) zip files, ODB++, and IPC-2581. Please include drill files and fabrication notes.",
  },
  {
    id: 3,
    q: "Do you offer PCB assembly services?",
    a: "Yes — we provide SMT and through-hole assembly, both turnkey and consigned (customer-supplied parts).",
  },
  {
    id: 4,
    q: "What are your shipping options?",
    a: "We offer standard, express, and freight shipping. Shipping costs depend on destination and weight.",
  },
  {
    id: 5,
    q: "Can I track my order?",
    a: "Yes. Once your order ships you will receive a tracking number via email.",
  },
  {
    id: 6,
    q: "What is your quality guarantee?",
    a: "We perform outgoing visual and electrical inspections. If there's an issue, contact support and we'll work on a resolution.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600">
            Have questions? We've got answers. If you can't find what you're
            looking for, feel free to contact us.
          </p>
        </div>
      </header>

      {/* Accordion list */}
      <main className="max-w-4xl mx-auto py-16 px-6">
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.id} className="border-b last:border-b-0">
              <button
                onClick={() => setOpen(open === f.id ? null : f.id)}
                className="w-full flex items-center justify-between py-6 text-left"
                aria-expanded={open === f.id}
              >
                <span className="font-medium text-gray-900">{f.q}</span>
                <span className="text-gray-500">
                  {open === f.id ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>

              {open === f.id && <div className="pb-6 text-gray-700">{f.a}</div>}
            </div>
          ))}
        </div>
      </main>

      {/* Footer spacing */}
      <div className="h-24" />
    </div>
  );
};

export default Faq;
