import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductAll from './page/ProductAll'
import Login from './page/Login'
import ProductDetail from './page/ProductDetail'
import Navbar from './component/Navbar'

// 1. All products page, Login page, Product detail page
// 1a. Navbar
// 2. All products page: Show all products
// 3a. When login button clicked, show login page
// 3b. When product detail page clicked but not logged in, show login page
// 4. When logged in, can see product detail page
// 5a. When logout button clicked, logout
// 5b. When logged out, can't see product detail page, show login page again
// 6. When logged in, logout button // when logged out, login button
// 7. Can search products

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
