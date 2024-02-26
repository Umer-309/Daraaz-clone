import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout"
import LandingPage from "./pages/LandingPage"
import ProductDetails from "./pages/ProductDetails"

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<LandingPage/>}/>
          <Route path="/:id" element={<ProductDetails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App