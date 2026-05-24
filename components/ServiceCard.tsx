interface PricingOption {
  label: string;
  price: string;
}

interface ServiceCardProps {
  title: string;
  pricingOptions: PricingOption[];
  description?: string;
}

export default function ServiceCard({ title, pricingOptions, description }: ServiceCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-C2 dark:bg-D5 border border-C3 dark:border-D4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      <h3 className="text-lg font-bold mb-4 text-C6 dark:text-C3">{title}</h3>
      
      {description && (
        <div className="mb-4 pb-4 border-b border-C3 dark:border-D4">
          <p className="text-D5 dark:text-C2 text-sm leading-relaxed">{description}</p>
        </div>
      )}

      <div className="space-y-2 flex-1">
        {pricingOptions.map((option, index) => (
          <div key={index} className="flex justify-between items-center py-1.5">
            <span className="text-D5 dark:text-C2 text-sm">{option.label}</span>
            <span className="font-semibold text-C6 dark:text-C3">{option.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}