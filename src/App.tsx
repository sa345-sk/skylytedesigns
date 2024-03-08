import { useRef } from 'react';
import './App.css';
import Sidebar, { SidebarRef } from './Sidebar';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Slides from './Slides';
import Sketch from './Sketch';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
const App = () => {
  // const gets = async () => {
  //    try {
  //     const reponse= fetch('http://localhost:4000/si');
  //     console.log((await reponse).json)
  //    } catch (error) {
  //     console.log(error)
  //    }
  // }
  //Fullscreen is on pass a ref to the doc
  // const doc = useRef<null | HTMLDivElement>(null);
  // const ref = useRef<null | HTMLDivElement>(null);
  // ref.current?.addEventListener('click', () => {
  //   if (doc) {
  //     if(document.fullscreenEnabled) {
  //       ref.current?.requestFullscreen()
  //     }
  //   }
  // })
  const sidebarRef = useRef<SidebarRef>(null);
  return (
    <Router>
      <div className='app'>
        <div className="navbar">
          <div className='icon' onClick={() => sidebarRef.current?.sidebarControl()}></div>
          <Link to='/'><h1>Skylyte Design</h1></Link>
        </div>
        
        <Sidebar ref={sidebarRef}/>
        <section id="contents">
          <Routes>
            <Route path='/' element={<Home />}/>
             <Route path='/slides' element={<Slides userName="Ibrahim"/>}/>
             <Route path='/sketch' element={<Sketch />}/>  
             <Route path='/login' element={<Login />}/>
             <Route path='/signup' element={<Signup />}/>
          </ Routes>
        </section>
      </div>
    </Router> 
  )
}

export default App
