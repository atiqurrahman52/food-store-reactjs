
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
import BlogDetail from "./pages/BlogDetail"
import Privacy from "./pages/Privacy"
import ProductDetail from "./pages/ProductDetail"
import Swp from "./components/productDetail/Swp"
import NotFound from "./components/notFound/NotFound"



function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-detail/:id" element={<BlogDetail />}/>
      {/* <Route path="/blog-detail" element={<BlogDetail />}/> */}
      <Route path="/shop"  element={<Shop />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />}/>
      <Route path="/cart"  element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/privacy"  element={<Privacy />} />
      <Route path="/swp"  element={<Swp />} />
      <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  )
}

export default App
