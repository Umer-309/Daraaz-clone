import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/layout"
import LandingPage from "./pages/LandingPage"

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<LandingPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App