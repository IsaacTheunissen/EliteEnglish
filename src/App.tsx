import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Rates from './components/Rates';
import About from './components/About';
import MeetTheTeam from './components/MeetTheTeam';
import Schedule from './components/Schedule';
import TermsAndConditions from './components/TermsAndConditions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Rates />
        <About />
        <MeetTheTeam />
        <Schedule />
        <TermsAndConditions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
