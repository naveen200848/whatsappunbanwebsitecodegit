function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      phoneNumber: '',
      email: '',
      banReason: '',
      banDate: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState('');

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        // Prepare email data
        const emailData = {
          to: 'businesspromobazaar@gmail.com',
          subject: 'New WhatsApp Recovery Request',
          body: `
            New WhatsApp recovery request received:
            
            Phone Number: ${formData.phoneNumber}
            Email: ${formData.email}
            Ban Date: ${formData.banDate}
            Ban Reason: ${formData.banReason}
            Additional Info: ${formData.message}
            
            Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          `
        };
        
        // Simulate email sending (in real implementation, this would call your backend)
        console.log('Sending email to:', emailData.to);
        console.log('Email content:', emailData);
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSubmitStatus('success');
        setFormData({
          phoneNumber: '',
          email: '',
          banReason: '',
          banDate: '',
          message: ''
        });
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <section id="contact" className="py-20 bg-[var(--bg-light)]" data-name="contact" data-file="components/Contact.js">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Account Back</h2>
              <p className="text-xl text-[var(--text-secondary)]">
                Fill out the form below and our experts will start working on your case immediately.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="p-8 rounded-xl shadow-lg" style={{backgroundColor: 'rgba(217, 197, 124, 0.1)', border: '1px solid rgba(217, 197, 124, 0.3)'}}>
                <h3 className="text-2xl font-semibold mb-6">Recovery Request Form</h3>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                    <div className="flex items-center">
                      <div className="icon-check-circle text-green-600 text-lg mr-2"></div>
                      <span className="text-green-800">Request submitted successfully! We'll contact you within 2 hours.</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Phone Number (with country code)
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      style={{backgroundColor: 'rgba(217, 197, 124, 0.1)', borderColor: 'rgba(217, 197, 124, 0.3)', color: '#D9C57C'}}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      When was your account banned?
                    </label>
                    <input
                      type="date"
                      name="banDate"
                      value={formData.banDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Reason for ban (if known)
                    </label>
                    <select
                      name="banReason"
                      value={formData.banReason}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      required
                    >
                      <option value="">Select reason</option>
                      <option value="spam">Spam/Unwanted messages</option>
                      <option value="fake">Fake account</option>
                      <option value="violation">Terms violation</option>
                      <option value="unknown">Unknown/No reason given</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Please provide any additional details about your case..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="icon-loader text-lg mr-2 animate-spin"></div>
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        <div className="icon-send text-lg mr-2"></div>
                        Submit Recovery Request
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Pricing & Contact Info */}
              <div className="space-y-8">
                <div className="p-8 rounded-xl shadow-lg" style={{backgroundColor: 'rgba(217, 197, 124, 0.1)', border: '1px solid rgba(217, 197, 124, 0.3)'}}>
                  <h3 className="text-2xl font-semibold mb-6">Pricing</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3">
                      <span className="text-[var(--text-secondary)]">WhatsApp Account Recovery</span>
                      <span className="text-3xl font-bold text-[var(--primary-color)]">₹5,000</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="icon-shield-check text-green-600 text-lg mr-2"></div>
                      <span className="text-green-800 font-medium">100% Money Back Guarantee</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-xl shadow-lg" style={{backgroundColor: 'rgba(217, 197, 124, 0.1)', border: '1px solid rgba(217, 197, 124, 0.3)'}}>
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="icon-phone text-[var(--primary-color)] text-lg mr-3"></div>
                      <span className="text-[var(--text-secondary)]">+91-9493509921</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="icon-message-square text-[var(--primary-color)] text-lg mr-3"></div>
                        <span className="text-[var(--text-secondary)]">WhatsApp: +91-9493509921</span>
                      </div>
                      <a 
                        href="https://wa.me/919493509921" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg hover:bg-[var(--secondary-color)] transition-colors flex items-center"
                      >
                        <div className="icon-message-square text-sm mr-2"></div>
                        Chat Now
                      </a>
                    </div>
                    <div className="flex items-center">
                      <div className="icon-clock text-[var(--primary-color)] text-lg mr-3"></div>
                      <span className="text-[var(--text-secondary)]">Available 9 AM - 9 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}
