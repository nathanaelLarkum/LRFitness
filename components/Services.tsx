import ServiceCard from '@/components/ServiceCard';
import BuggyFitCard from '@/components/BuggyFitCard';

export default function Services() {
  const oneToOnePricing = [
    { label: '1 session (60 mins)', price: '£35' },
    { label: '10 sessions (60 mins)', price: '£300' },
  ];

  const groupPTPricing = [
    { label: '1 session up to 3 people (60 mins)', price: '£45' },
    { label: '10 sessions up to 3 people (60 mins)', price: '£400' },
  ];

  const buggyFitPricing = [
    { label: '£8 per session (60 mins)', price: 'PAYG' },
    { label: '10 sessions (within 12 weeks)', price: '£75' },
  ];

  const buggyFitDescription =
    'You come with your baby and we embark on a mix of cardio and strength exercise. Having participated in Buggyfit sessions in London when I had my son, I know the importance of getting outside, moving your body and being around other Mums in those newborn days.';

  return (
    <section id="services" className="py-section-y px-section-x bg-C1 dark:bg-D6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-D6 dark:text-C1">Services & Packages</h2>
        <p className="text-center text-D5 dark:text-C2 mb-12 max-w-2xl mx-auto">
          Get in contact for more information and to book in your session!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <ServiceCard
            title="One-to-One Personal Training"
            pricingOptions={oneToOnePricing}
          />

          <ServiceCard
            title="Group Personal Training"
            pricingOptions={groupPTPricing}
          />

          <BuggyFitCard
            pricingOptions={buggyFitPricing}
            description={buggyFitDescription}
            bookingUrl="https://gymcatch.com/app/provider/8339/packages"
          />
        </div>

        <div className="text-center text-D5 dark:text-C2 text-sm space-y-2">
          <p>
            <strong>Buggyfit Sessions:</strong> Mondays & Wednesdays 10:30am, Basingstoke area
          </p>
          <p>
            <strong>Free trial session available!</strong>
          </p>
        </div>
      </div>
    </section>
  );
}