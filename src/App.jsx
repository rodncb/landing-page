import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { ServicesGrid } from "./components/Services";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Security from "./components/Security/Security";
import WhyUs from "./components/WhyUs/WhyUs";
import Footer from "./components/Footer/Footer";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <ServicesGrid />
      {/* <About /> */}
      {/* <Features /> */}
      <Security />
      <WhyUs />
      <Footer />
      <Chat />
    </div>
  );
}

export default App;
