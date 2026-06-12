import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/CartPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">

       
        <Navbar />

        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>

        
        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App