import ActiveLink from '../components/ActiveLink';
import styles from './Header.module.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [listActive, setListActive] = useState(true);

  const handleHamburgueClick = e => {
    setListActive(!listActive);
  };

  return (
    <header className={`${styles.header} content`}>
      <div className={styles.header_container}>
        <h1 className={styles.header_title}>THE SATAN - LORD OF HELL</h1>
        {listActive ? (
          <FontAwesomeIcon
            className={styles.burguericon}
            icon={faTimes}
            onClick={handleHamburgueClick}
          />
        ) : (
          <FontAwesomeIcon
            className={styles.burguericon}
            icon={faBars}
            onClick={handleHamburgueClick}
          />
        )}
      </div>
      <nav
        className={styles.header_nav}
        style={{ display: listActive ? 'block' : 'none' }}
      >
        <ul className={styles.header_list}>
          <li>
            <ActiveLink href='/'>
              <a>Home</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href='/about'>
              <a>About</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href='/galery'>
              <a>Galery</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href='/tourDates'>
              <a>Tour dates</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href='/newsletter'>
              <a>Newsletter</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href='/shop'>
              <a>shop</a>
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
