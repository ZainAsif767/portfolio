import React from 'react';
import { NavigationDots, SocialMedia } from '../components';
import { FaCopyright } from 'react-icons/fa';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text"><FaCopyright /> 2024 Zain Asif</p>
          <p className="p-text">All rights reserved</p>

        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;