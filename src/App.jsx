import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import { ServicesGrid } from "./components/Services";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import Process from "./components/Process/Process";
import Testimonials from "./components/Testimonials/Testimonials";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";
import Chat from "./components/Chat/Chat";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/Blog/BlogPost";
import Contact from "./pages/Contact/Contact";
import Waitlist from "./pages/Waitlist/Waitlist";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <ServicesGrid />
      <CaseStudies />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <Chat />
    </>
  );
}

function App() {
  const basename = "/";

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
