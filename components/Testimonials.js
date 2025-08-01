function Testimonials() {
  try {
    const testimonials = [
      {
        name: 'Priya Sharma',
        location: 'Mumbai, India',
        rating: 5,
        text: 'Excellent service! My WhatsApp was banned suddenly and I was worried about losing all my family photos and messages. They recovered it in just 24 hours!'
      },
      {
        name: 'Rajesh Kumar',
        location: 'Delhi, India',
        rating: 5,
        text: 'Very professional team. They kept me updated throughout the process and my account was restored exactly as promised. Worth every rupee!'
      },
      {
        name: 'Sneha Patel',
        location: 'Bangalore, India',
        rating: 5,
        text: 'Initially I was doubtful, but they really delivered! Got my WhatsApp back in 2 days and all my business contacts were safe. Highly recommend!'
      }
    ];

    return (
      <section id="testimonials" className="py-20" style={{backgroundColor: '#004048'}} data-name="testimonials" data-file="components/Testimonials.js">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Join thousands of satisfied customers who got their WhatsApp accounts back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="icon-star text-yellow-400 text-lg"></div>
                  ))}
                </div>
                
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center mr-4">
                    <div className="icon-user text-xl text-white"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">{testimonial.name}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-[var(--success-color)] text-white px-6 py-3 rounded-full">
              <div className="icon-users text-lg"></div>
              <span className="font-semibold">10,000+ Indian Accounts Recovered</span>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Testimonials component error:', error);
    return null;
  }
}