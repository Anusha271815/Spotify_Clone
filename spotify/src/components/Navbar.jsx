import React from 'react';
import './Navbar.css';
import { FaSearch, FaSpotify,FaHome,FaDownload ,FaBell ,FaUser} from 'react-icons/fa';
import friends from '../assets/friends.png';


const Navbar = () => {
  return (
    <nav>
      <div id="nav">
        <div id="left">
            <div className='icons'><FaSpotify/></div>
            <div  className='icons home'><FaHome /></div>
            <div className='rounded-pill search'>
                <span><FaSearch/></span>
                <input type='text' placeholder='What do you want to play?'></input>
                <span className='icons' title='Browse'></span>
            </div>

        </div>
        <div id="right">
          <div className='d-none d-xl-block btn btn-light text-dark rounded-pill explore'>Explore Premium</div>
          <div className='d-flex install'><span className='icon2'><FaDownload/></span>Install App</div>
          <div className='icon2 install' title='Notifications'><FaBell/></div>
          <div id="friends"><img src={friends} alt="" /></div>
          <div><FaUser/></div>
            

        </div>
      </div> 
    </nav>
  );
}

export default Navbar;
