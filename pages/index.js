import Header from '../components/Header';
import Layout from '../components/Layout';
import styles from './index.module.css';
import Parallax from 'parallax-js';
import React, { useEffect, useRef } from 'react';

function Index() {
  const scene = useRef(null);
  let parallax;

  useEffect(() => {
    parallax = new Parallax(scene.current, {
      // relativeInput: true,
      clipRelativeInput: true
    });
    return () => {
      parallax.disable();
    };
  }, []);

  return (
    <Layout>
      <Header></Header>
      <div className={'content'}>
        <section className={`${styles.news} ${styles.section}`}>
          <h2 className={styles.section_title}>NEWS</h2>

          <ul ref={scene}>
            <li className='layer' data-depth='1.00'>
              <img
                className={styles.news_img}
                src={require('../assets/profile.jpg')}
              ></img>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                leo tellus, condimentum nec pharetra in, iaculis ut sapien.
                Proin vitae. Integer a vestibulum orci, quis dapibus leo. Duis
                ut aliquam lectus, a gravida nisl. Praesent ut semper dolor, non
                placerat massa. Mauris cursus gravida quam, vel pellentesque
                ipsum pharetra et. Aliquam et suscipit sapien. Nam sit amet
                efficitur ante. Vivamus bibendum tempus lectus. Sed ut tellus
                velit. Pellentesque sem purus, pretium vel magna a, sollicitudin
                bibendum turpis. Sed viverra, ipsum at accumsan
              </p>
            </li>
          </ul>

          <div style={{ clear: 'both' }}></div>
        </section>
        <section className={`${styles.releases} ${styles.section}`}>
          <h2 className={styles.section_title}>RELEASES</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo
            tellus, condimentum nec pharetra in, iaculis ut sapien. Proin vitae
            sapien eros.
          </p>
          <div style={{ margin: '1em 0 .75em 0' }}>
            <iframe
              src='https://open.spotify.com/embed/track/774EtJyM2EvI4LlF6OEwOO'
              width='100%'
              height='300'
              frameBorder='0'
              allowtransparency='true'
              allow='encrypted-media'
            ></iframe>
          </div>
          <p>
            Integer a vestibulum orci, quis dapibus leo. Duis ut aliquam lectus,
            a gravida nisl. Praesent ut semper dolor, non placerat massa. Mauris
            cursus gravida quam, vel pellentesque ipsum pharetra et. Aliquam et
            suscipit sapien. Nam sit amet efficitur ante. Vivamus bibendum
            tempus lectus. Sed ut tellus velit. Pellentesque sem purus,
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default Index;
