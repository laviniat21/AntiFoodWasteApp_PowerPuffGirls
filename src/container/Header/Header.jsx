import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the change' />
      <h1 className='app__header-h1'>Today's Solution for Tomorrow</h1>
      <p className='p__opensans' style={{ margin: '0.5rem 0' }}>Wasted food isn't just a social or humanitarian concern—it's an environmental one. When we waste food, we also waste all the energy and water it takes to grow, harvest, transport, and package it. And if food goes to the landfill and rots, it produces methane—a greenhouse gas even more potent than carbon dioxide. Through Food for Today we want to bring a change in this system.</p>
      <button type='button' className='custom__button'>Explore Products</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
