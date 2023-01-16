import React from 'react';

import { SubHeading } from '../../components';
import './Chef.css';
import { images } from '../../constants';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
       <img src={images.grains} alt="grains" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading  title="Owner's Word"/>
      <h1 className='headtext__cormorant'>What we Belive In</h1>
    
    <div className='app__owners-content'>
      <div className='app__owners-content_quoate'>
        <img src={images.quote} alt="quote" />
        <p className='p__opensans'>Credem ca putem schimba obiceiurile oamenilor prin schimbarea culturii acestora.</p>
      </div>
      <p className='p__opensans'>Prin intelegerea nevoii de schimbare, prin dorinta de a aduce o schimbare si prin perspectiva unei imagini mai curate in ceea ce priveste risipa si achizitia alimentelor, putem contura un viitor mai sustenabil, un viitor care ne va influenta pe toti.</p>
    </div>
    
    </div>
  </div>
);

export default Chef;
