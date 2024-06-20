// components/MobileNavbar.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/MobileNavbar.module.css';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.mobileNavbar}>
      <div className={styles.logo}>DAI TRIP</div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isOpen ? 'X' : '☰'}
      </div>
      {isOpen && (
        <div className={styles.navLinks}>
          <a href="https://www.daitripmedia.com/">HOME</a>
          <a href="https://www.daitripmedia.com/merch">MERCH</a>
          <a href="https://www.daitripmedia.store/browse/">PRINTS</a>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
