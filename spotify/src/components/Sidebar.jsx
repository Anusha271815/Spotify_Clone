import React from 'react';
import './Sidebar.css';
import library from '../assets/library_icon.png';
import { FaPlus} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div id="library">
        <div id="inner">

        </div>

        <div id="outer" className="d-none d-md-block m-auto">
            <div className="d-flex justify-content-between align-items-baseline m-auto pt-1 pb-1 mb-3">
                
                <div id="lib_header" className="d-flex align-items-baseline m-auto">
                <img src={library} alt="Library" style={{ height: '24px', marginRight: '8px' }} />
                <p className="mb-0 text-white">Your Library</p>
                </div>

                <div className="d-flex align-items-baseline m-auto" id="lib_cont">
                <button className="btn btn-secondary d-flex align-items-baseline">
                    <FaPlus size={15} className="me-1" />
                    <span className="align-baseline">Create</span>
                </button>
                </div>
             </div>

            <div className='d-flex mb-3 gap-2'>
                <button className="btn btn-secondary d-flex align-items-baseline">
                    <span className="align-baseline">Playlist</span>
                </button>
                <button className="btn btn-secondary d-flex align-items-baseline">
                    <span className="align-baseline">Artist</span>
                </button>
            </div>

            <div></div>
            <div></div>
        </div>

    </div>
  )
}

export default Sidebar;
