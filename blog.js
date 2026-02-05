const blogGrid = document.querySelector('.blog-grid');

function loadMoreBlogs() {
  const blogHTML = `
    <!-- Blog 4 -->
    <div class="blog-card" data-aos="fade-up">
      <div class="blog-img">
        <img src="./Assets/bg3_11zon_11zon.webp" alt="Enterprise Conversion Optimization">
      </div>
      <div class="blog-content">
        <span class="blog-tag">CRO</span>
        <h3>Enterprise Conversion Optimization for Higher ROI</h3>
        <p>
          Learn how data-driven UX, testing frameworks, and analytics improve
          enterprise conversion performance.
        </p>
        <a href="./error.html" class="read-more">Read More →</a>
      </div>
    </div>

    <!-- Blog 5 -->
    <div class="blog-card" data-aos="fade-up" data-aos-delay="100">
      <div class="blog-img">
        <img src="./Assets/bg6_11zon_11zon.webp" alt="Enterprise Marketing Automation">
      </div>
      <div class="blog-content">
        <span class="blog-tag">Automation</span>
        <h3>Marketing Automation Strategies for Enterprises</h3>
        <p>
          Explore how enterprises use CRM integrations and automation to drive
          efficiency, retention, and revenue growth.
        </p>
        <a href="./error.html" class="read-more">Read More →</a>
      </div>
    </div>

    <!-- Blog 6 -->
    <div class="blog-card" data-aos="fade-up" data-aos-delay="200">
      <div class="blog-img">
        <img src="./Assets/bg5_11zon_11zon.webp" alt="Enterprise Analytics Strategy">
      </div>
      <div class="blog-content">
        <span class="blog-tag">Analytics</span>
        <h3>Using Enterprise Analytics to Drive Strategic Decisions</h3>
        <p>
          Understand how advanced analytics empowers leadership teams with
          actionable insights and measurable outcomes.
        </p>
        <a href="./error.html" class="read-more">Read More →</a>
      </div>
    </div>
  `;

  blogGrid.insertAdjacentHTML('beforeend', blogHTML);

  document.querySelector('.load-more-btn')?.remove();
}
