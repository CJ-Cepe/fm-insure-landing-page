import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Cta from "./sections/Cta";
import Footer from "./sections/Footer";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default App;
