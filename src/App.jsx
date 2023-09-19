
import { Route, Routes } from "@solidjs/router"
import Home from "./pages/home"
import Destination from "./pages/destination"
import Crew from "./pages/crew"
import Technology from "./pages/technology"

function App() {
  
  return (

    <div >
    <Routes>
      <Route path={"/"} component={Home}/>
      <Route path={"/destination"} component={Destination}/>
      <Route path={"/crew"} component={Crew}/>
      <Route path={"/technology"} component={Technology}/>
    </Routes>
    
   
   </div>
  
  )
}

export default App
