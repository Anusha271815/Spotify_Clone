import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Content from './components/Content.jsx';


function App() {

  return (
    <>
       <Navbar/>
       <div id="main">
          <div id="sidebar"><Sidebar/></div>
          <div id="content"><Content/></div>
       </div>
    </>
  )
}

export default App
