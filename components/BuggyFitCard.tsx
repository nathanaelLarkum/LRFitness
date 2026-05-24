'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface PricingOption {
  label: string;
  price: string;
}

interface BuggyFitCardProps {
  pricingOptions: PricingOption[];
  description: string;
  bookingUrl?: string;
}

export default function BuggyFitCard({ pricingOptions, description, bookingUrl }: BuggyFitCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="p-6 rounded-2xl bg-C2 dark:bg-D5 border border-C3 dark:border-D4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      <h3 className="text-lg font-bold mb-4 text-C6 dark:text-C3">Buggyfit</h3>

      <div className="space-y-2 mb-4 flex-1">
        {pricingOptions.map((option, index) => (
          <div key={index} className="flex justify-between items-center py-1.5">
            <span className="text-D5 dark:text-C2 text-sm">{option.label}</span>
            <span className="font-semibold text-C6 dark:text-C3">{option.price}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-C3 dark:border-D4 pt-4 mt-auto">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between text-sm font-medium text-D5 dark:text-C2 hover:text-C6 dark:hover:text-C3 transition-colors"
        >
          <span>More Details</span>
          <ChevronDown 
            size={16} 
            className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
        
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-C3 dark:border-D4">
            <p className="text-D5 dark:text-C2 text-sm leading-relaxed mb-3">{description}</p>
            {bookingUrl && (
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-1.5 bg-C6 dark:bg-C3 text-C1 dark:text-D6 rounded-lg font-medium text-xs hover:opacity-90 transition-opacity"
              >
                Book Now
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}