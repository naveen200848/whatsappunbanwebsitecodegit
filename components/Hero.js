function Hero() {
  try {
    const scrollToContact = () => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <section id="home" className="pt-20 pb-16" style={{background: 'linear-gradient(to bottom right, #004048, #003540)'}} data-name="hero" data-file="components/Hero.js">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Get Your WhatsApp Account Back
              </h1>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                <strong>Getting "This account can no longer use WhatsApp" or "WhatsApp banned due to spam"?</strong> We help you regain access to your banned WhatsApp account <strong>quickly and safely in India</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button onClick={scrollToContact} className="btn-primary">
                Recover My Account
              </button>
              <a 
                href="https://wa.me/919493509921" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                <div className="icon-message-square text-lg mr-2"></div>
                WhatsApp Us
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--success-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-check text-2xl text-white"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">98% Success Rate</h3>
                <p className="text-[var(--text-secondary)]">Proven track record of successful account recoveries</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-clock text-2xl text-white"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">24-48 Hours</h3>
                <p className="text-[var(--text-secondary)]">Fast recovery process with quick turnaround</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--accent-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-shield text-2xl text-white"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Safe</h3>
                <p className="text-[var(--text-secondary)]">Secure methods that protect your privacy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}