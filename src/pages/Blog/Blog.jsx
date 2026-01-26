import { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chat from "../../components/Chat/Chat";
import { blogPosts } from "./blogData";

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "AI & Automation", "CRM", "Business Intelligence", "Productivity", "LIA"];

  const filteredPosts = activeFilter === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <>
      <Header />
      <main className="blog-page">
        {/* Hero Section */}
        <section className="blog-hero">
          <div className="blog-hero-container">
            <h1 className="blog-hero-title">
              Insights on Automation,{" "}
              <span className="text-gradient-purple">Intelligence</span>, and Growth
            </h1>
            <p className="blog-hero-subtitle">
              Practical strategies for building systems that save time, cut costs, and drive better decisions.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="blog-filters">
          <div className="blog-filters-container">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-button ${activeFilter === category ? "filter-button--active" : ""}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Grid */}
        <section className="blog-content">
          <div className="blog-container">
            <div className="blog-grid">
              {filteredPosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-card-image">
                    <div className="blog-image-placeholder">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-meta">
                      <span className="blog-category">{post.category}</span>
                      <span className="blog-date">{post.date} | {post.readTime}</span>
                    </div>
                    <h2 className="blog-title">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-author">
                      <div className="author-avatar">FA</div>
                      <span className="author-name">Facilita AI Team</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chat />
    </>
  );
};

export default Blog;
