import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  const handleDocumentClick = (e) => {
    if (navRef.current && !navRef.current.contains(e.target) && toggleRef.current !== e.target) {
      setMobileNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  const handleMobileNavToggle = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="app">
      <header>
        <div className="logo">
          <img
            src="https://storage.123fakturere.no/public/icons/diamond.png"
            alt="Description of the image"
            className="image-class"
          />
        </div>
        <nav ref={navRef} className={`nav ${isMobileNavOpen ? 'open' : ''}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Price</li>
            <li>Carrier</li>
            <li>Features</li>
          </ul>
        </nav>
        <div
          ref={toggleRef}
          className="mobile-nav-toggle"
          onClick={handleMobileNavToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      {/* Rest of your app */}
    </div>
  );
}

export default Navbar;
