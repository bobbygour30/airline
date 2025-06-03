import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BuyNow from './pages/BuyNow'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-now" element={<BuyNow />} />
      </Routes>
    </div>
  )
}

export default App