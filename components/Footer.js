import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookSquare,
  faSpotify,
  faSoundcloud,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className={styles.footer_up}>
      <footer className={`${styles.footer} content`}>
        <p className={styles.privacy}>
          The Satan 2020 - All rights reserved | <a href='#'>Privacy</a> |{' '}
          <a href='#'>Cookies</a>{' '}
        </p>
        <div className={styles.social}>
          <a target='_blank' href='https://www.instagram.com/the___satan/'>
            <FontAwesomeIcon
              className={styles.social_icon}
              icon={faInstagram}
            />
          </a>
          <a target='_blank' href='https://www.facebook.com/Satan666core/'>
            <FontAwesomeIcon
              className={styles.social_icon}
              icon={faFacebookSquare}
            />
          </a>
          <a target='_blank' href='#'>
            <FontAwesomeIcon className={styles.social_icon} icon={faTwitter} />
          </a>
          <a
            target='_blank'
            href='https://open.spotify.com/artist/4XCq6wVD10ui7rkXScdWvP?si=ue4fBH-5QhGl3tL7B5_0Kg'
          >
            <FontAwesomeIcon className={styles.social_icon} icon={faSpotify} />
          </a>
          <a target='_blank' href='https://soundcloud.com/satan666'>
            <FontAwesomeIcon
              className={styles.social_icon}
              icon={faSoundcloud}
            />
          </a>
          <a target='_blank' href='#'>
            <FontAwesomeIcon className={styles.social_icon} icon={faYoutube} />
          </a>
        </div>
      </footer>
    </div>
  );
}
