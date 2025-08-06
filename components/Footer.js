function Footer() {
  try {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <footer className="py-16" style={{backgroundColor: '#003540', color: '#D9C57C'}} data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                  <div className="icon-phone text-xl text-white"></div>
                </div>
                <h3 className="text-xl font-bold">WhatsApp Unban</h3>
              </div>
              <p className="mb-6 leading-relaxed" style={{color: 'rgba(217, 197, 124, 0.8)'}}>
                Professional WhatsApp account recovery service helping thousands of Indian users regain access to their banned accounts safely and quickly.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <div className="icon-facebook text-lg"></div>facebooksymbol
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <div className="icon-twitter text-lg"></div>twittersymbol
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <div className="icon-instagram text-lg"></div>instagramsymbol
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('home')} className="transition-colors" style={{color: 'rgba(217, 197, 124, 0.8)'}} onMouseOver={(e) => e.target.style.color = '#D9C57C'} onMouseOut={(e) => e.target.style.color = 'rgba(217, 197, 124, 0.8)'}>
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('features')} className="transition-colors" style={{color: 'rgba(217, 197, 124, 0.8)'}} onMouseOver={(e) => e.target.style.color = '#D9C57C'} onMouseOut={(e) => e.target.style.color = 'rgba(217, 197, 124, 0.8)'}>
                    Features
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('process')} className="transition-colors" style={{color: 'rgba(217, 197, 124, 0.8)'}} onMouseOver={(e) => e.target.style.color = '#D9C57C'} onMouseOut={(e) => e.target.style.color = 'rgba(217, 197, 124, 0.8)'}>
                    How It Works
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('testimonials')} className="transition-colors" style={{color: 'rgba(217, 197, 124, 0.8)'}} onMouseOver={(e) => e.target.style.color = '#D9C57C'} onMouseOut={(e) => e.target.style.color = 'rgba(217, 197, 124, 0.8)'}>
                    Reviews
                  </button>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="transition-colors" style={{color: 'rgba(217, 197, 124, 0.8)'}} onMouseOver={(e) => e.target.style.color = '#D9C57C'} onMouseOut={(e) => e.target.style.color = 'rgba(217, 197, 124, 0.8)'}>FAQ</a>
                </li>
                <li>
                  <a href="#" className="transition-colors" style={{color: 'rgba(217, 197, 124, 0.8)'}} onMouseOver={(e) => e.target.style.color = '#D9C57C'} onMouseOut={(e) => e.target.style.color = 'rgba(217, 197, 124, 0.8)'}>Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="transition-colors" style={{color: 'rgba(217, 197, 124, 0.8)'}} onMouseOver={(e) => e.target.style.color = '#D9C57C'} onMouseOut={(e) => e.target.style.color = 'rgba(217, 197, 124, 0.8)'}>Terms of Service</a>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="transition-colors" style={{color: 'rgba(217, 197, 124, 0.8)'}} onMouseOver={(e) => e.target.style.color = '#D9C57C'} onMouseOut={(e) => e.target.style.color = 'rgba(217, 197, 124, 0.8)'}>
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p style={{color: 'rgba(217, 197, 124, 0.8)'}}>
              © 2024 WhatsApp Unban Service. All rights reserved. Not affiliated with WhatsApp Inc.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
