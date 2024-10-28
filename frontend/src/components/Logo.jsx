import React from 'react';
import { Link } from 'react-router-dom'; // Use this if you’re using react-router-dom for routing
import logo from '/ramoon.png'; // Correct the path and import the image directly

const Logo = () => {
  return (
    <div>
      <Link to="/"> {/* Use "to" for react-router-dom or "href" for regular HTML links */}
        <img 
          src={logo}
          alt="logo"
          width={150}
          height={110}
           // Optional: Styling example
        />
      </Link>
    </div>
  );
};

export default Logo;
