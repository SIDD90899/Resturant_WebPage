import Hero from "./Components/Hero/Hero"
import { Route, 
  Routes 
} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Mainmenu from "./Components/Mainmenu/Mainmenu"
import Ourposthome from "./Components/Ourpost/Ourposthome"
import Loginpage from "./Components/Loginpage/Loginpage"
import Postpage1 from "./Components/Post/Postpage1"
// import Onepage from "./Components/Page2/Onepage"
// import Two from "./Components/Page3/Two"



function App() {

  return (
    <>
  
     {/* <Navbar /> */}
     {/* <Hero /> */}
     {/* <Onepage /> */}
     {/* <Two /> */}
     {/* <Menuhome /> */}
<header>
  <Navbar />
</header>

     <Routes>
      <Route path="/"  element={<Hero/>} />
       <Route path="/menu" element={<Mainmenu/>} />
      <Route path="/ourstory" element={<Ourposthome />} />
      <Route path="/posts" element={<Postpage1 />} />
      <Route path="/reservation" element={<Loginpage/>} />
     </Routes>
    </>
  )
}

export default App
