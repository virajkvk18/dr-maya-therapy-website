import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TherapyDetail from './components/TherapyDetail'; // Check this spelling!
import About from './components/About';
import Services from './components/Services';
import Office from './components/Office';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <TherapyDetail />
      <Services />
      <Office />
      <FAQ />
      <Footer />
      <footer className="bg-primary text-white py-10 text-center text-sm uppercase tracking-widest">
        © 2026 Dr. Maya Reynolds, PsyD | Santa Monica, CA
      </footer>
    </div>
  )
}

export default App;