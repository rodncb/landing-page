import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { ServicesGrid } from "./components/Services";
import LiaSection from "./components/LiaSection/LiaSection";
import Security from "./components/Security/Security";
import WhyUs from "./components/WhyUs/WhyUs";
import Footer from "./components/Footer/Footer";
import Waitlist from "./pages/Waitlist/Waitlist";
import Chat from "./components/Chat/Chat";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesGrid />
      <LiaSection />
      <Security />
      <WhyUs />
      <Footer />
      <Chat />
    </>
  );
}

function App() {
  // Use basename apenas em desenvolvimento (localhost)
  // Em produção (facilitaai.com.br) usa raiz "/"
  const basename = import.meta.env.DEV ? "/landing-page" : "/";

  return (
    <Router basename={basename}>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
