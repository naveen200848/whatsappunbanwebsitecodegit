function Process() {
  try {
    const steps = [
      {
        number: '1',
        title: 'Submit Your Case',
        description: 'Provide your phone number and details about when your account was banned.',
        icon: 'file-text'
      },
      {
        number: '2',
        title: 'Case Analysis',
        description: 'Our experts analyze your case and determine the best recovery approach.',
        icon: 'search'
      },
      {
        number: '3',
        title: 'Recovery Process',
        description: 'We initiate the recovery process using our proven methods and WhatsApp contacts.',
        icon: 'settings'
      },
      {
        number: '4',
        title: 'Account Restored',
        description: 'Your WhatsApp account is successfully unbanned and ready to use again.',
        icon: 'check-circle'
      }
    ];

    return (
      <section id="process" className="py-20 bg-[var(--bg-light)]" data-name="process" data-file="components/Process.js">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our Recovery Process Works</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Our streamlined recovery process ensures your WhatsApp account is restored quickly and safely.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="service-step">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-2">
                      <div className={`icon-${step.icon} text-xl text-[var(--primary-color)] mr-3`}></div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Start Recovery Process
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Process component error:', error);
    return null;
  }
}