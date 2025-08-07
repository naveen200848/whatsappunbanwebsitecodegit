
function renderBlogPosts() {
  try {
    const blogPosts = BlogContent();
    const container = document.getElementById('blog-posts');
    if (!container) return;

    blogPosts.forEach(post => {
      const postElement = document.createElement('article');
      postElement.className = 'blog-post';

      const title = document.createElement('h2');
      title.textContent = post.title;
      title.className = 'text-2xl font-bold mb-4';
      postElement.appendChild(title);

      post.sections.forEach(section => {
        const sectionTitle = document.createElement('h3');
        sectionTitle.textContent = section.heading;
        sectionTitle.className = 'text-xl font-semibold mt-4 mb-2';
        postElement.appendChild(sectionTitle);

        const sectionContent = document.createElement('p');
        sectionContent.textContent = section.content;
        sectionContent.className = 'text-base text-gray-700 mb-4';
        postElement.appendChild(sectionContent);
      });

      if (post.faqs && post.faqs.length > 0) {
        const faqTitle = document.createElement('h3');
        faqTitle.textContent = 'FAQs';
        faqTitle.className = 'text-xl font-semibold mt-6 mb-2';
        postElement.appendChild(faqTitle);

        post.faqs.forEach(faq => {
          const question = document.createElement('p');
          question.textContent = 'Q: ' + faq.question;
          question.className = 'font-semibold text-gray-800';
          postElement.appendChild(question);

          const answer = document.createElement('p');
          answer.textContent = 'A: ' + faq.answer;
          answer.className = 'text-gray-700 mb-3';
          postElement.appendChild(answer);
        });
      }

      container.appendChild(postElement);
    });
  } catch (error) {
    console.error('Error rendering blog posts:', error);
  }
}

document.addEventListener('DOMContentLoaded', renderBlogPosts);
