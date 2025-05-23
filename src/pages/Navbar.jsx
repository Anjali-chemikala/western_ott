import React from 'react';

import './Navbar.scss'; // adjust path as needed
 
const Header = () => {

  return (
<header>
<nav>
<ul className="one">
<img src="./pictures/img1.png" alt="" />

</ul>
<ul className="two">
<li>HOME</li>
<li>HOME</li>
<li>HOME</li>
<li>Subscription</li>
<li>Profile</li>
<li>Profile</li>
</ul>
<ul className="three">
<input type="text" placeholder="Search" />
</ul>
</nav>
</header>

  );

};
 
export default Header;

 