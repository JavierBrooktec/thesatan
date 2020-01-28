import ActiveLink from '../components/ActiveLink';
import styles from './Header.module.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [listActive, setListActive] = useState(false);

  const handleHamburgueClick = e => {
    setListActive(!listActive);
  };

  return (
    <header className={`${styles.header} content`}>
      <div className={styles.header_title}>THE SATAN - LORD OF HELL</div>
      <nav className={styles.header_nav}>
        {listActive ? (
          <FontAwesomeIcon className={styles.burguericon} icon={faTimes} onClick={handleHamburgueClick} />
        ) : (
          <ul
            className={styles.header_hamburguer}
            onClick={handleHamburgueClick}
          >
            <li></li>
            <li></li>
            <li></li>
          </ul>
        )}
      </nav>
      <ul className={styles.header_list}>
        <li>
          <ActiveLink href='/'>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href='/about'>
            <a>About</a>
          </ActiveLink>
          <ActiveLink href='/about'>
            <a>Galery</a>
          </ActiveLink>
          <ActiveLink href='/about'>
            <a>Tour dates</a>
          </ActiveLink>
          <ActiveLink href='/about'>
            <a>Newsletter</a>
          </ActiveLink>
          <ActiveLink href='/about'>
            <a>shop</a>
          </ActiveLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
