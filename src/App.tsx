import Home from './pages/Home';
import BackgroundOverlay from './components/BackgroundOverlay';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <>
      <BackgroundOverlay />
      <Navbar />
      <div className='mt-20'>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route index path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </AnimatePresence>
      </div>
    </>

  );
}

export default App;
