import Home from './pages/Home'
import BackgroundOverlay from './components/BackgroundOverlay'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <BackgroundOverlay/>
      <Navbar/>
      <div className='mt-20'>
        <Routes>
          <Route index path="/" element={<Home/>}></Route>
          <Route path="/about" element={<Home/>}></Route>
          <Route path="/portfolio" element={<Home/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
