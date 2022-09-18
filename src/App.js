import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./Routes/Home/Home";
import Destination from './Routes/Destination/Destination.jsx'
import Navigation from "./Routes/Navigation/Navigation";
import Moon from "./Routes/Destination/Mars";
import Crew from './Routes/Crew/Crew.jsx'
import Titan from "./Routes/Destination/Titan";
import Europe from "./Routes/Destination/Europe";
import Mars from "./Routes/Destination/Earth";
import Technology from './Routes/Technology/Technology.jsx'

function App() {
  return <Routes>

    <Route path="/" element={<Navigation />} >
      <Route path='/' element={<Navigate to="/home" />} />
      <Route path='/home' element={<Home />} />
      <Route path='/destination' element={<Destination />} >
        <Route path='/destination' element={<Navigate to="/destination/moon" />} />
        <Route path="/destination/moon" element={<Moon />} />
        <Route path="/destination/earth" element={<Mars />} />
        <Route path="/destination/titan" element={<Titan />} />
        <Route path="/destination/europe" element={<Europe />} />
      </Route>
      <Route path='/crew' element={<Crew />} />
      <Route path='/technology' element={<Technology />} />
    </Route>

  </Routes>;
}

export default App;
