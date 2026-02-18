import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Product from './Product'
import Cart from './Cart'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
