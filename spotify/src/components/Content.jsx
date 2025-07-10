import React from 'react';
import './Content.css';
import musicoverlay from '../assets/play_musicbar.png';
import card1 from '../assets/card1img.jpeg';
import card2 from '../assets/punjabi.png';
import card3 from '../assets/Hot.png';
import card4 from '../assets/Friday.png';
import card5 from '../assets/Hits.png';
import card6 from '../assets/Top50.png';
import card7 from '../assets/hindi.png';
import card8 from '../assets/telugu.png';
import card9 from '../assets/telugu2.png';
import card10 from '../assets/tamil.png';

const Content = () => {
  
  const cards1 = [
    {
      image: card3,
      text: 'The hottest tracks in India.cover:Ed...',
    },
    {
      image: card2,
      text: 'Catch the hottest punjabi tracks.Cover...',
    },
    {
      image: card4,
      text: 'New Music from Prem Dhillion, Parmish...',
    },
    {
      image: card5,
      text: 'Tune into the Hottest track of Kollywood!...',
    },
    {
      image: card6,
      text: 'Your daily update of the most played...',
    },
    {
      image: card7,
      text: 'Hottest hindi music that India is listening...',
    },
    {
      image: card8,
      text: 'Tune into the Hottest track of Tollywood!...',
    },
    {
      image: card9,
      text: 'New music fron Telugu! cover: Junior..',
    },
    {
      image: card10,
      text: 'New music fron Kollywood.Cover:..',
    },
    {
      image: card1,
      text: 'Your daily update for the most played...',
    },
  ];
  const cards2 = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTVNUKfI2I4y9DJNre1aEXfVQYvYu9E0eXg&s',
      text: 'The hottest tracks in India.cover:Ed...',
    },
    {
      image: card4,
      text: 'Catch the hottest punjabi tracks.Cover...',
    },
    {
      image: card5,
      text: 'This is card 3',
    },
    {
      image: card9,
      text: 'This is card 4',
    },
    {
      image: card10,
      text: 'This is card 5',
    },
    {
      image:card1,
      text: 'This is card 6',
    },
    {
      image: 'https://via.placeholder.com/150',
      text: 'This is card 7',
    },
    {
      image: 'https://via.placeholder.com/150',
      text: 'This is card 8',
    },
    {
      image: 'https://via.placeholder.com/150',
      text: 'This is card 9',
    },
    {
      image: 'https://via.placeholder.com/150',
      text: 'This is card 10',
    },
  ];
  
  return (
    <div className='p-3' id="Content">
      <div id="container">
        <div className='d-flex gap-2' id="bit">
          <button className='btn btn-light rounded-pill'>All</button>
          <button className='btn btn-light rounded-pill'>Music</button>
          <button className='btn btn-light rounded-pill'>Podcasts</button>
        </div> 
        <div id="charts">
          <div className='d-flex justify-content-between align-items-baseline me-4'>
            <h3 className='mb-3'>Charts</h3>
            <a href="#show" className='text-decoration-none text-light'>Show all</a>
          </div>
          <div className="d-flex scroll-container">
            {cards1.map((card, index) => (
              <div key={index} className="card-item d-flex flex-column gap-2 position-relative">
                <img src={card.image} alt={`Card ${index + 1}`} />
                <p>{card.text}</p>
                <div className='position-absolute overlay'>
                    <img src={musicoverlay}></img>
                </div>
              </div>
    
            ))}
          </div>

            </div>

            <div id="charts" className='mt-4'>
          <div className='d-flex justify-content-between align-items-baseline me-4'>
            <h3 className='mb-3'>Editor's Pick</h3>
            <a href="#show" className='text-decoration-none text-light'>Show all</a>
          </div>
          <div className="d-flex scroll-container">
            {cards2.map((card, index) => (
              <div key={index} className="card-item d-flex flex-column gap-2 position-relative">
                <img src={card.image} alt={`Card ${index + 1}`} />
                <p>{card.text}</p>
                <div className='position-absolute overlay'>
                    <img src={musicoverlay}></img>
              </div>
              </div>
    
            ))}
          </div>

            </div>
          </div>
        </div>
  )
}

export default Content
