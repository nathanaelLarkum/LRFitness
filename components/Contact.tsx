"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);

      setTimeout(() => {
        setCopied(null);
      }, 2000);
    });
  };

  const contactCards = [
    {
      type: "phone",
      label: "Phone",
      value: "07747000137",
      display: "07747000137",
    },
    {
      type: "email",
      label: "Email",
      value: "lucy@lucyrowlandsfitness.co.uk",
      display: "lucy@lucyrowlandsfitness.co.uk",
    },
    {
      type: "location",
      label: "Location",
      value: "Bains Lodge Newnham Lane Old Basing Hampshire RG24 7AT",
      display: "Bains Lodge Newnham Lane Old Basing Hampshire RG24 7AT",
    },
  ];

  return (
    <section
      id="contact"
      className="py-section-y px-section-x bg-C2 dark:bg-D5"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-D6 dark:text-C1">
          Contact
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {contactCards.map((card) => (
            <button
              key={card.type}
              type="button"
              onClick={() => copyToClipboard(card.value, card.type)}
              className="group p-6 bg-C1 dark:bg-D6 rounded-xl border border-C3 dark:border-D4 shadow-sm transition-all duration-200 ease-out hover:shadow-md hover:scale-105 active:scale-100 cursor-pointer text-left"
            >
              <span className="block font-semibold text-C6 dark:text-C4 mb-2">
                {card.label}
              </span>

              <p className="text-D5 dark:text-C2 group-hover:text-C5 dark:group-hover:text-C3 break-all transition-colors">
                {copied === card.type ? "✓ Copied!" : card.display}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-C6 dark:text-C3 font-medium hover:text-C5 dark:hover:text-C4 transition-colors"
          >
            Lucy Rowlands Fitness Instagram
          </a>
        </div>
      </div>
    </section>
  );
}