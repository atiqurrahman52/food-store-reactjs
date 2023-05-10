
// import './App.css'
import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Checkout from "./pages/Checkout"



function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/shop"  element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />}/>
      <Route path="/cart"  element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />

      </Route>
    </Routes>
  )
}

export default App
