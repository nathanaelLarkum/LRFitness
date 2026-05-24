export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-section-y px-section-x flex items-center justify-center min-h-[70vh] bg-C1 dark:bg-D6">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-gradient">
          LUCY ROWLANDS FITNESS
        </h1>
        <p className="text-lg md:text-xl text-D5 dark:text-C2 mb-8 max-w-2xl mx-auto">
          Hello!



          I’m Lucy Rowlands and I am a Level 3 Personal
          Trainer with a  Level 2 Certificate in
          Understanding Nutrition and Health.



          Get in touch if you want to get fitter, stronger
          and feel amazing.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-C5 hover:bg-CH3 dark:bg-D4 dark:hover:bg-DH1 text-C1 px-8 py-3 rounded-full font-semibold transition-all shadow-lg"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
