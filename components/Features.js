function Features() {
  try {
    const features = [
      {
        icon: 'zap',
        title: 'Fix "Account Can No Longer Use WhatsApp"',
        description: 'Resolve all WhatsApp ban messages including spam-related bans and policy violations within 24-48 hours.'
      },
      {
        icon: 'shield-check',
        title: 'Safe & Secure',
        description: 'We use only legitimate methods that comply with WhatsApp policies and protect your data.'
      },
      {
        icon: 'users',
        title: 'Expert Team',
        description: 'Our experienced specialists have helped thousands of users recover their accounts.'
      },
      {
        icon: 'headphones',
        title: '24/7 Support',
        description: 'Round-the-clock customer support to guide you through the recovery process.'
      },
      {
        icon: 'dollar-sign',
        title: 'Fair Pricing',
        description: 'Transparent pricing with no hidden fees. Pay only when your account is successfully recovered.'
      },
      {
        icon: 'award',
        title: 'Guaranteed Results',
        description: 'Money-back guarantee if we cannot recover your account within the promised timeframe.'
      }
    ];

    return (
      <section id="features" className="py-20" style={{backgroundColor: '#004048'}} data-name="features" data-file="components/Features.js">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our WhatsApp Recovery Service?</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              We provide professional WhatsApp account recovery with proven methods and exceptional customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center mb-4">
                  <div className={`icon-${feature.icon} text-xl text-white`}></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}