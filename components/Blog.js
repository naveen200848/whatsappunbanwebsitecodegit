function Blog() {
  try {
    const blogPosts = [
      {
        id: 1,
        title: "Why WhatsApp Accounts Get Banned: Common Reasons Explained",
        excerpt: "Understanding the main reasons behind WhatsApp account bans can help you avoid violations and protect your account.",
        date: "December 15, 2024",
        readTime: "5 min read"
      },
      {
        id: 2,
        title: "WhatsApp Account Recovery: Step-by-Step Guide",
        excerpt: "Learn the official methods to recover your banned WhatsApp account and when to seek professional help.",
        date: "December 10, 2024",
        readTime: "7 min read"
      },
      {
        id: 3,
        title: "Protecting Your WhatsApp Business Account",
        excerpt: "Essential tips for business users to maintain compliance and avoid account restrictions.",
        date: "December 5, 2024",
        readTime: "6 min read"
      }
    ];

    return (
      <section id="blog" className="py-20" style={{backgroundColor: '#004048'}} data-name="blog" data-file="components/Blog.js">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">WhatsApp Recovery Blog</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Expert insights, tips, and guides for WhatsApp account recovery and ban prevention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="mb-4">
                  <div className="flex items-center text-[var(--text-secondary)] text-sm mb-2">
                    <div className="icon-calendar text-lg mr-2"></div>
                    <span className="mr-4">{post.date}</span>
                    <div className="icon-clock text-lg mr-2"></div>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 hover:text-[var(--primary-color)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center text-[var(--primary-color)] font-medium">
                  <span className="mr-2">Read More</span>
                  <div className="icon-arrow-right text-lg"></div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-[var(--primary-color)] text-white px-6 py-3 rounded-full">
              <div className="icon-help-circle text-lg"></div>
              <span className="font-semibold">Need Immediate Help? Contact Our Experts</span>
            </div>
            <div className="mt-4">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Start Recovery Process
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Blog component error:', error);
    return null;
  }
}