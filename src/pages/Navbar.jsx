import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.scss';
import { FiLogOut, FiBookmark, FiDownload } from 'react-icons/fi';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname.toLowerCase();

  let activeMenu = '';
  if (path === '/home') activeMenu = 'home';
  else if (path.includes('westernmovies')) activeMenu = 'westernmovies';
  else if (path.includes('subscription')) activeMenu = 'subscription';
  else if (path.includes('profile')) activeMenu = 'profile';

  const handleIconClick = (icon) => {
    if (icon === 'logout') navigate('/signin');
    else if (icon === 'save') navigate('/savelater');
    else if (icon === 'download') navigate('/downloads');
  };

  return (
    <header>
      <nav>
        <ul className="one">
          <img src="./pictures/img1.png" alt="Logo" />
        </ul>

        <ul className="two">
          <li
            className={activeMenu === 'home' ? 'active' : ''}
            onClick={() => navigate('/home')}
          >
            HOME
          </li>
          <li
            className={activeMenu === 'westernmovies' ? 'active' : ''}
            onClick={() => navigate('/westernmovies')}
          >
            Western-Movies
          </li>
          <li
            className={activeMenu === 'subscription' ? 'active' : ''}
            onClick={() => navigate('/subscription')}
          >
            Subscription
          </li>
          <li
            className={activeMenu === 'profile' ? 'active' : ''}
            onClick={() => navigate('/profile')}
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
  );
};

export default Navbar;
