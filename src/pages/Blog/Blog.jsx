import { Link } from "react-router-dom";
import "./Blog.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { blogPosts } from "./blogData";

const Blog = () => {
    return (
        <>
            <Header />
            <div className="blog-page">
                <div className="blog-hero">
                    <h1>Blog <span className="highlight-text">Facilita AI</span></h1>
                    <p>Insights sobre tecnologia, inteligência artificial e estratégias para escalar seu negócio.</p>
                </div>

                <div className="blog-container">
                    <div className="blog-grid">
                        {blogPosts.map((post) => (
                            <article key={post.id} className="blog-card">
                                <div className="blog-card-content">
                                    <div className="blog-meta">
                                        <span className="blog-category">{post.category}</span>
                                        <span className="blog-date">{post.date}</span>
                                    </div>
                                    <h2 className="blog-title">
                                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h2>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    <Link to={`/blog/${post.slug}`} className="blog-read-more">
                                        Ler artigo completo →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blog;
