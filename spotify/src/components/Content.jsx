import React from 'react';
import './Content.css';
import musicoverlay from '../assets/play_musicbar.png'
const Content = () => {
  const cards1 = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTVNUKfI2I4y9DJNre1aEXfVQYvYu9E0eXg&s',
      text: 'The hottest tracks in India.cover:Ed...',
    },
    {
      image: 'https://via.placeholder.com/150',
      text: 'Catch the hottest punjabi tracks.Cover...',
    },
    {
      image: 'https://via.placeholder.com/150',
      text: 'This is card 3',
    },
    {
      image: 'https://via.placeholder.com/150',
      text: 'This is card 4',
    },
    {
      image: 'https://via.placeholder.com/150',
      text: 'This is card 5',
    },
    {
      image: 'https://via.placeholder.com/150',
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
          </div>
        </div>
  )
}

export default Content
