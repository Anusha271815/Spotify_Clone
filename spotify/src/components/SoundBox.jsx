import React from 'react';
import play1 from "../assets/player_icon1.png";
import play2 from "../assets/player_icon2.png";
import play3 from "../assets/player_icon3.png";
import play4 from "../assets/player_icon4.png";
import play5 from "../assets/player_icon5.png";
import "./SoundBox.css";

const SoundBox = () => {
  return (
    <div className="text-secondary d-flex align-items-center " id="foot">
      <div id="play" className='d-flex  flex-column align-items-center'>
        <div className="d-flex gap-4 align-items-center" id="playbutton">
          <img src={play1} alt="" /><img src={play2} alt="" /><img src={play3} alt="" style={{height:"30px"}}/><img src={play4} alt="" /><img src={play5} alt="" />
        </div>
        <div className='d-flex fs-0.2 align-items-baseline justify-content-start gap-2 text-secondary'>-:--<div id="soundplay"></div>--:-</div>
      </div>
      <div></div>
    </div>
  )
}

export default SoundBox
