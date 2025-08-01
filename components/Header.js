function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    return (
      <header className="fixed top-0 w-full backdrop-blur-sm z-50 shadow-sm" style={{backgroundColor: 'rgba(0, 64, 72, 0.95)'}} data-name="header" data-file="components/Header.js">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <div className="icon-phone text-xl text-white"></div>
              </div>
              <h1 className="text-xl font-bold text-gradient">WhatsApp Unban</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('features')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('process')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Process
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary">
                Get Started
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-xl text-[var(--text-primary)]`}></div>
            </button>
          </div>

          {/* Mobile Navigation */}
            {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t" style={{borderColor: 'rgba(217, 197, 124, 0.3)'}}>
              <div className="flex flex-col space-y-4 pt-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                  Home
                </button>
                <button onClick={() => scrollToSection('features')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                  Features
                </button>
                <button onClick={() => scrollToSection('process')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                  Process
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                  Reviews
                </button>
                <button onClick={() => scrollToSection('contact')} className="btn-primary text-left">
                  Get Started
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}