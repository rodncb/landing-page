import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import "./Blog.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { blogPosts } from "./blogData";

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);

    // Scroll to top when post loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <>
                <Header />
                <div className="blog-page error-page">
                    <div className="blog-container">
                        <h1>Artigo não encontrado</h1>
                        <Link to="/blog" className="back-link">← Voltar para o Blog</Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="blog-post-page">
                <div className="blog-post-container">
                    <Link to="/blog" className="back-link">← Voltar para o Blog</Link>

                    <header className="post-header">
                        <div className="post-meta">
                            <span className="blog-category">{post.category}</span>
                            <span className="post-separator">•</span>
                            <span className="blog-date">{post.date}</span>
                            <span className="post-separator">•</span>
                            <span className="read-time">{post.readTime}</span>
                        </div>
                        <h1 className="post-title">{post.title}</h1>
                    </header>

                    <div
                        className="post-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="post-footer">
                        <div className="share-text">Gostou deste artigo? Compartilhe!</div>
                        <Link to="/contato" className="post-cta-button">
                            Falar com um especialista
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BlogPost;
