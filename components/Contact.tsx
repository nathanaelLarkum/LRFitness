export default function Contact() {
  return (
    <section id="contact" className="py-section-y px-section-x bg-C2 dark:bg-D5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-D6 dark:text-C1">Contact</h2>
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="p-6 bg-C1 dark:bg-D6 rounded-xl border border-C3 dark:border-D4 shadow-sm">
            <span className="block font-semibold text-C6 dark:text-C4 mb-2">Phone</span>
            <a href="tel:07747000137" className="text-D5 dark:text-C2 hover:text-C5">07747000137</a>
          </div>
          
          <div className="p-6 bg-C1 dark:bg-D6 rounded-xl border border-C3 dark:border-D4 shadow-sm">
            <span className="block font-semibold text-C6 dark:text-C4 mb-2">Email</span>
            <a href="mailto:lucy@lucyrowlandsfitness.co.uk" className="text-D5 dark:text-C2 hover:text-C5 break-all">lucy@lucyrowlandsfitness.co.uk</a>
          </div>
          
          <div className="p-6 bg-C1 dark:bg-D6 rounded-xl border border-C3 dark:border-D4 shadow-sm">
            <span className="block font-semibold text-C6 dark:text-C4 mb-2">Location</span>
            <p className="text-D5 dark:text-C2 text-sm">Bains Lodge Newnham Lane Old Basing Hampshire RG24 7AT</p>
          </div>
          
        </div>
        <div className="mt-8">
          <a href="#" className="text-C6 dark:text-C3 font-medium hover:text-C5 dark:hover:text-C4 transition-colors">
            Lucy Rowlands Fitness Instagram.
          </a>
        </div>
      </div>
    </section>
  );
}
