import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import styles from './index.module.css';
import general from './general.module.css';
import img from '../assets/profile.jpg';
import img2 from '../assets/skull.jpg';
import img3 from '../assets/monster.png';
import Carousel from 'react-multi-carousel';
import fetch from 'isomorphic-unfetch';

import { css } from '@emotion/core';
const override = css`
  display: block;
  margin: 0 auto;
`;
// First way to import
// Another way to import. This is recommended to reduce bundle size
import FadeLoader from 'react-spinners/FadeLoader';

import React, { useEffect, useState } from 'react';

function Index(props) {
  const [songs, setSongs] = useState(null);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    global.Headers = global.Headers || require('fetch-headers');

    async function getSongs() {
      const prueba = await fetch('/getTopSongs', {
        method: 'GET'
      });

      const dataPrueba = await prueba.json();

      setSongs(dataPrueba.songs);
    }

    getSongs();
  }, []);

  return (
    <Layout>
      <Header></Header>
      <div className={'content'}>
        <section className={`${styles.news} ${styles.section}`}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={10000}
            centerMode={false}
            className=''
            containerClass='container-with-dots'
            dotListClass=''
            draggable
            focusOnSelect={false}
            infinite
            itemClass=''
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 1,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 1,
                partialVisibilityGutter: 30
              }
            }}
            showDots={false}
            sliderClass=''
            slidesToSlide={1}
            swipeable
          >
            <div
              className={styles.news_element}
              style={{
                backgroundImage: `url(${img3}) ,linear-gradient(90deg,rgba(0,0,0,0.8029586834733894) 0%,rgba(249,0,0,1) 30%,rgba(229,0,0,1) 70%,rgba(0,0,0,0.80015756302521) 100%)`
              }}
            >
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
            </div>
            <div
              className={styles.news_element}
              style={{
                backgroundImage: `url(${img})`
              }}
            >
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
            </div>
            <div
              className={styles.news_element}
              style={{
                backgroundImage: `url(${img2})`,
                backgroundPosition: 'center'
              }}
            >
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
            </div>
          </Carousel>
        </section>
        <section className={`${styles.releases} ${styles.section}`}>
          <h2 className={general.section_title}>RELEASES</h2>
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
          <div className={styles.other_releases_grid}>
            {songs ? (
              songs.map(song => (
                <a
                  className={styles.other_releases_grid_anchor}
                  key={song.id}
                  href={song.external_urls.spotify}
                  target='_blank'
                >
                  <img
                    className={styles.other_releases_grid_img}
                    src={song.image}
                  ></img>
                </a>
              ))
            ) : (
              <FadeLoader
                css={override}
                size={150}
                //size={"150px"} this also works
                color={'#ff253a'}
                loading={true}
              />
            )}
            {}
          </div>
        </section>
      </div>
      <Footer></Footer>
    </Layout>
  );
}


export default Index;
