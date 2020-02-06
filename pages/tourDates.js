import Header from '../components/Header';
// import DatesComponent from '../components/DatesComponent';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import styles from './tourDates.module.css';
import React, { useEffect, useState } from 'react';
import general from './general.module.css';
import Head from 'next/head';

export default function TourDates() {
  useEffect(() => {
    const linkInterval = setInterval(function() {
      const link = document.querySelector('.bit-top-track-button');
      if (link) {
        link.setAttribute('target', '_blank');
        window.clearInterval(linkInterval);
      }
    }, 300);

    return () => {
      window.clearInterval(linkInterval);
    };
  }, []);

  return (
    <div>
      <Head>
        <script
          charSet='utf-8'
          src='https://widget.bandsintown.com/main.min.js'
        ></script>
      </Head>
      <Layout>
        <Header></Header>
        <div className={`content`}>
          <h2 className={`${general.section_title} ${styles.tourDates_title}`}>
            THE SATAN TOUR DATES
          </h2>
          <a
            target='_blank'
            className='bit-widget-initializer'
            data-artist-name='THE SATAN'
            data-display-local-dates='false'
            data-display-past-dates='true'
            data-auto-style='false'
            data-text-color='#FFFFFF'
            data-link-color='#ff253a'
            data-background-color='rgba(0,0,0,0)'
            data-display-limit='50'
            data-display-start-time='false'
            data-link-text-color='#ffffff'
            data-display-lineup='false'
            data-display-play-my-city='true'
            data-separator-color='rgba(124,124,124,0.25)'
          ></a>
        </div>
        <Footer></Footer>
      </Layout>
    </div>
  );
}
