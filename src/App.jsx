import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BuyNow from './pages/BuyNow'
import ContactSection from './pages/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-now" element={<BuyNow />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </div>
  )
}

export default App