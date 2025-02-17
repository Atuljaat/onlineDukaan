import { Home } from "./pages"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import { Outlet } from "react-router"

function App() {

  return (
    <>    
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
