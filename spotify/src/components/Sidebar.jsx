import React from 'react';
import './Sidebar.css';
import library from '../assets/library_icon.png';
import { FaPlus} from 'react-icons/fa';
import {FaDownload ,FaBell ,FaUser} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div id="library">
        <div id="inner" className='d-md-none d-block justify-content-center align-items-center gap-3'>
            <div className='mt-3 install pb-3'><img src={library} height="20px"/></div>
            <div className='d-flex install pb-3 ps-1'><FaDownload/></div>
            <div className='icon2 install pb-3 ' title='Notifications'><FaBell size={24}/></div>
            <div className='user install me-1'><FaUser/></div>
        </div>

        <div id="outer" className="d-none d-md-block m-auto z-5">
            <div className="d-flex justify-content-between align-items-baseline m-auto pt-1 pb-1 mb-3">
                
                <div id="lib_header" className="d-flex align-items-baseline m-auto">
                    <img src={library} alt="Library" style={{ height: '24px', marginRight: '8px' }} />
                    <p className="mb-0 text-white">Your Library</p>
                </div>

                <div className="d-flex align-items-baseline m-auto" id="lib_cont">
                <button className="btn btn-secondary d-flex align-items-baseline lib_button">
                    <FaPlus size={15} className="me-1" />
                    <span className="align-baseline">Create</span>
                </button>
                </div>
             </div>

            <div className=' mb-5 ' id="playlist">
                <div className='crew'>
                    <h6>Create your first Playlist</h6>
                    <p>It's easy we'll help you</p>
                    <button className='btn btn-light rounded-pill'>Create Playlist</button>
                </div>
                <div className='crew'>
                    <h6>Let's find some podecasts to follow</h6>
                    <p>We'll keep you updated on new episodes</p>
                    <button className='btn btn-light rounded-pill'>Browse podcasts</button>
                </div>
            </div>

            <div></div>
            <div></div>
        </div>

    </div>
  )
}

export default Sidebar;
