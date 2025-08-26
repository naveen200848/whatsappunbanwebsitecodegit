function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navigateToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Section exists on current page - scroll to it
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      } else {
        // Section doesn't exist - navigate to home page with hash
        window.location.href = `index.html#${sectionId}`;
      }
    };

    const navigateToPage = (page) => {
      window.location.href = page;
      setIsMenuOpen(false);
    };

    return (
      <header className="fixed top-0 w-full backdrop-blur-sm z-50 shadow-sm" style={{backgroundColor: 'rgba(0, 64, 72, 0.95)'}} data-name="header" data-file="components/Header.js">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img 
                  src="https://github.com/naveen200848/whatsappunbanwebsitecodegit/blob/main/trickle/assets/idigitalworkslogocompact.jpg" 
                  alt="iDigitalWorkslogocompact" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h1 className="text-xl font-bold text-gradient">WhatsApp Unban</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => navigateToSection('home')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Home Page
              </button>
              <button onClick={() => navigateToSection('features')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Service Features
              </button>
              <button onClick={() => navigateToPage('blog.html')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Blog
              </button>
              <button onClick={() => navigateToSection('faq')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                FAQ
              </button>
              <button onClick={() => navigateToSection('contact')} className="btn-primary">
                Start Recovery Process
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
                <button onClick={() => navigateToSection('home')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                  Home Page
                </button>
                <button onClick={() => navigateToSection('features')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                  Service Features
                </button>
                <button onClick={() => navigateToPage('blog.html')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                  Blog
                </button>
                <button onClick={() => navigateToSection('faq')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                  FAQ
                </button>
                <button onClick={() => navigateToSection('contact')} className="btn-primary text-left">
                  Start Recovery Process
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
