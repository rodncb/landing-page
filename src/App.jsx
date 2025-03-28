import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Security from "./components/Security/Security";
import WhyUs from "./components/WhyUs/WhyUs";
import Footer from "./components/Footer/Footer";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Features />
      <Security />
      <WhyUs />
      <Footer />
      <Chat />
    </div>
  );
}

export default App;
