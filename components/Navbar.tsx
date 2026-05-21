export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-C1/90 dark:bg-D6/90 backdrop-blur-md z-50 border-b border-C2 dark:border-D5">
      <div className="max-w-6xl mx-auto px-section-x h-16 flex items-center justify-between">
        
        <a href="#home" className="flex items-center gap-3">
          {/* Light Mode Logo */}
          <img 
            src="/lrfitness_black.png" 
            alt="Lucy Rowlands Fitness" 
            className="h-8 w-auto dark:hidden"
          />
          {/* Dark Mode Logo */}
          <img 
            src="/lrfitness_white.png" 
            alt="Lucy Rowlands Fitness" 
            className="h-8 w-auto hidden dark:block"
          />
          <span className="font-bold text-lg tracking-tight text-gradient hidden sm:block">
            LR FITNESS
          </span>
        </a>

        <div className="hidden md:flex space-x-6 text-sm font-medium text-D5 dark:text-C2">
          <a href="#about" className="hover:text-C6 dark:hover:text-C4 transition-colors">About</a>
          <a href="#services" className="hover:text-C6 dark:hover:text-C4 transition-colors">Services</a>
          <a href="#contact" className="hover:text-C6 dark:hover:text-C4 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
