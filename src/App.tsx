import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Admissions from '@/components/Admissions';
import Achievements from '@/components/Achievements';
import Sports from '@/components/Sports';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Admissions />
        <Achievements />
        <Sports />
      </main>
      <Footer />
    </div>
  );
}

export default App;
