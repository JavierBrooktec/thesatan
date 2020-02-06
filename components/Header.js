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

  const handleSectionClick = e => {
    setListActive(false);
  };

  return (
    <div className={styles.header_up}>
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
          className={`${styles.header_nav} ${styles.header_nav_small} ${
            listActive ? styles.header_nav_open : styles.header_nav_closed
          }`}
          // style={{
          //   display: listActive ? 'block' : 'none'
          // }}
        >
          <ul className={styles.header_list}>
            <li>
              <ActiveLink href='/'>
                <a onClick={handleSectionClick}>Home</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href='/about'>
                <a onClick={handleSectionClick}>About</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href='/galery'>
                <a onClick={handleSectionClick}>Galery</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href='/tourDates'>
                <a onClick={handleSectionClick}>Tour dates</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href='/newsletter'>
                <a onClick={handleSectionClick}>Newsletter</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href='/shop'>
                <a onClick={handleSectionClick}>shop</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
        <nav
          className={`${styles.header_nav} ${styles.header_nav_big} ${styles.header_nav_open}`}
          // style={{
          //   display: listActive ? 'block' : 'none'
          // }}
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
              <a
                target='_blank'
                href='https://www.prspct.nl/category/merch/?filter_artist=satan'
              >
                shop
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
