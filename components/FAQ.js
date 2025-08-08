function FAQ() {
  try {
    const [openFAQ, setOpenFAQ] = React.useState(null);

    const faqs = [
      {
        id: 1,
        question: "How long does WhatsApp account recovery take?",
        answer: "Most WhatsApp account recoveries are completed within 24-48 hours. However, complex cases or permanent bans may take up to 3-5 business days. Our professional service has a 98% success rate with faster turnaround times."
      },
      {
        id: 2,
        question: "What information do I need to provide for account recovery?",
        answer: "You'll need to provide your phone number (with country code), the date when your account was banned, the reason for the ban (if known), and any error messages you received. Additional information like previous violations or business verification may be helpful."
      },
      {
        id: 3,
        question: "Can permanently banned WhatsApp accounts be recovered?",
        answer: "Yes, even permanently banned accounts can often be recovered with the right approach. Our professional team has specialized methods and direct contacts with WhatsApp that significantly increase the chances of successful recovery, even for permanent bans."
      },
      {
        id: 4,
        question: "Is the WhatsApp unban service safe and legitimate?",
        answer: "Absolutely. We use only legitimate methods that comply with WhatsApp's policies. Our process involves proper appeals through official channels and doesn't involve any hacking or illegal activities. Your account security and privacy are our top priorities."
      },
      {
        id: 5,
        question: "What happens to my chat history and contacts after recovery?",
        answer: "In most cases, your chat history, contacts, and media are preserved during the recovery process. However, we recommend backing up your data regularly. If you have a recent backup, you can restore it once your account is recovered."
      },
      {
        id: 6,
        question: "Do you offer a money-back guarantee?",
        answer: "Yes, we offer a 100% money-back guarantee. If we cannot successfully recover your WhatsApp account within the promised timeframe, you will receive a full refund. We stand behind our service quality and success rate."
      }
    ];

    const toggleFAQ = (id) => {
      setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
      <section id="faq" className="py-20 bg-[var(--bg-light)]" data-name="faq" data-file="components/FAQ.js">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Get answers to common questions about WhatsApp account recovery and our professional unban service.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-card" onClick={() => toggleFAQ(faq.id)}>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  <div className={`icon-${openFAQ === faq.id ? 'minus' : 'plus'} text-xl text-[var(--primary-color)] flex-shrink-0`}></div>
                </div>
                
                {openFAQ === faq.id && (
                  <div className="mt-4 pt-4 border-t border-gray-600">
                    <p className="text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-[var(--primary-color)] text-white px-6 py-3 rounded-full mb-4">
              <div className="icon-message-circle text-lg"></div>
              <span className="font-semibold">Still Have Questions?</span>
            </div>
            <div className="space-y-4">
              <p className="text-[var(--text-secondary)]">
                Can't find the answer you're looking for? Our support team is ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  Contact Support
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
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('FAQ component error:', error);
    return null;
  }
}