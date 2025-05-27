import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.scss';
import { FiLogOut, FiBookmark, FiDownload } from 'react-icons/fi';
import SaloonDoors from './SaloonDoors'; 

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDoors, setShowDoors] = useState(false);
  const [nextRoute, setNextRoute] = useState('');

  const path = location.pathname.toLowerCase();

  let activeMenu = '';
  if (path === '/home') activeMenu = 'home';
  else if (path.includes('westernmovies')) activeMenu = 'westernmovies';
  else if (path.includes('category')) activeMenu = 'category';
  else if (path.includes('subscription')) activeMenu = 'subscription';
  else if (path.includes('profile')) activeMenu = 'profile';

  const triggerRouteChange = (route) => {
    if (route !== location.pathname) {
      setShowDoors(true);
      setNextRoute(route);
    }
  };

  const handleAnimationEnd = () => {
    setShowDoors(false);
    navigate(nextRoute);
  };

  const handleIconClick = (icon) => {
    if (icon === 'logout') triggerRouteChange('/signin');
    else if (icon === 'save') triggerRouteChange('/savelater');
    else if (icon === 'download') triggerRouteChange('/downloads');
  };

  return (
    <>
      {showDoors && <SaloonDoors onAnimationEnd={handleAnimationEnd} />}
      <header>
        <nav>
          <ul className="one">
            <img src="./pictures/img1.png" alt="Logo" />
          </ul>

          <ul className="two">
            <li
              className={activeMenu === 'home' ? 'active' : ''}
              onClick={() => triggerRouteChange('/home')}
            >
              HOME
            </li>
            <li
              className={activeMenu === 'westernmovies' ? 'active' : ''}
              onClick={() => triggerRouteChange('/westernmovies')}
            >
              Western-Movies
            </li>
            <li
              className={activeMenu === 'category' ? 'active' : ''}
              onClick={() => triggerRouteChange('/category')}
            >
              Genre
            </li>
            <li
              className={activeMenu === 'subscription' ? 'active' : ''}
              onClick={() => triggerRouteChange('/subscription')}
            >
              Subscription
            </li>
            <li
              className={activeMenu === 'profile' ? 'active' : ''}
              onClick={() => triggerRouteChange('/profile')}
            >
              Profile
            </li>
          </ul>

          <ul className="three">
            <li
              className={location.pathname === '/savelater' ? 'active' : ''}
              onClick={() => handleIconClick('save')}
            >
              <FiBookmark className="icon" />
            </li>
            <li
              className={location.pathname === '/downloads' ? 'active' : ''}
              onClick={() => handleIconClick('download')}
            >
              <FiDownload className="icon" />
            </li>
            <li
              className={location.pathname === '/signin' ? 'active' : ''}
              onClick={() => handleIconClick('logout')}
            >
              <FiLogOut className="icon" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
