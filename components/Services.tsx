export default function Services() {
  return (
    <section id="services" className="py-section-y px-section-x bg-C1 dark:bg-D6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-D6 dark:text-C1">Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-2xl bg-C2 dark:bg-D5 border border-C3 dark:border-D4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-C6 dark:text-C3">Packages & Courses</h3>
            <p className="text-D5 dark:text-C2 mb-2">Packages.</p>
            <p className="text-D5 dark:text-C2">Courses.</p>
          </div>

          <div className="p-8 rounded-2xl bg-C2 dark:bg-D5 border border-C3 dark:border-D4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-C6 dark:text-C3">Buggyfit & PT Sessions</h3>
            <p className="text-D5 dark:text-C2 mb-4">
              I am postnatal trained and also run Buggyfit classes in Basingstoke area on Mondays and Wednesdays.
            </p>
            <p className="text-D5 dark:text-C2 font-medium">
              Get in touch if you want to get fitter, stronger and feel amazing for PT sessions or at one of our Buggyfit classes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
