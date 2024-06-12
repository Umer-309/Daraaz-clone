import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout"
import LandingPage from "./pages/LandingPage"
import ProductDetails from "./pages/ProductDetails"
import { Cart } from "./pages/cart"
import Checkout from "./pages/checkout/Checkout"

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<LandingPage/>}/>
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App