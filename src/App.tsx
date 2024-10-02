import Home from './pages/Home'
import BackgroundOverlay from './components/BackgroundOverlay'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {

  return (
    <BrowserRouter>
      <BackgroundOverlay/>
      <Navbar/>
      <div className='mt-20'>
        <Routes>
          <Route index path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
