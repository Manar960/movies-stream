import React from 'react';
import squad from '../../assets/Rectangle 7.png';
import dune from '../../assets/Rectangle 8.png';
import Movies2 from './Movies2';
import f3 from '../../assets/Rectangle 13.png';

const Movies = () => {
  return (
    <div className="pt-5">
      <div className="d-flex">
        <div className="film1 position-relative ">
          <span className="title1 position-absolute px-2">#1 in series 🔥</span>
          <img src={squad} width={'100%'} />
          <span className="title2 position-absolute">Squid Game</span>
          <span className="title3 position-absolute">2021</span>
        </div>
        <div className="film2 position-relative">
          <span className="title4 position-absolute">⭐ 4.2</span>
          <img src={dune} width={'100%'} />
          <span className="title2 position-absolute">Dune</span>
          <span className="title3 position-absolute">2021</span>
        </div>
      </div>
      <section className='d-flex'>
        <Movies2 />
        <img src={f3} alt="Movie 3" className='ms-auto mb-3 mt-5 ps-4' />
      </section>
    </div>
  );
};

export default Movies;
