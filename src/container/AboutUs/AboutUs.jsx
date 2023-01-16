import React from 'react';

import './AboutUs.css';

import { images } from '../../constants';
const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="T letter" />
    </div>

    <div className='app__aboutus-content flex__center'>

      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <p className='p__opensans'>Incercam sa aducem o schimbare a curentului risipei alimentare, prin dezvoltarea unei culturi in randul utilizatorilor prin punerea la dispozitie a "frigiderului" lor personal in uzul celorlalti consumatori</p>
        <button type='button' className='custom__button'>Learn More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_fork" width={'600px'}/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <p className='p__opensans'>Din dorinta de a proteja planeta si a transmite conceptul generatilor viitoare, am fondat Food for Today, am inceput in anul 2022, insa speram sa extindem conceptul catre o sfera din ce in ce mai mare de utilizatori pana in 2024.</p>
        <button type='button' className='custom__button'>Learn More</button>
      </div>

  </div>
  </div>
);

export default AboutUs;
