// components/Layout.js
import img from '../assets/doom-eternal-bg.jpg';
import logo from '../assets/logo.jpg';
import Head from 'next/head';

function Layout(props) {
  return (
    <div
      className='page-layout'
      style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Head>
        <title>THE SATAN</title>
        {/* <link rel="shortcut icon" type="image/png" href={logo}></link> */}
      </Head>
      {props.children}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

        .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range {
          border-radius: 0.3rem;
          background-color: #ff253a;
          color: #fff;
      }
      
        body {
          background-image: url("${img}") , linear-gradient(90deg, rgba(0,0,0,0.8029586834733894) 0%, rgba(249,0,0,1) 30%, rgba(229,0,0,1) 70%, rgba(0,0,0,0.80015756302521) 100%);
          background-blend-mode: multiply;
          font-size: 1.125rem;
          margin: 0;
          padding: 0;
          font-weight: 400;
          line-height: 1.8;
          color: #333;
          font-family: 'Lato', sans-serif;
          color: #ffffff; 
        }
        h1 {
          font-weight: 700;
          font-size: 2rem;
          letter-spacing:2px;
          font-family: 'Bebas Neue', cursive
        }
        h2 {
          margin: 0;
          letter-spacing: 2px;
          font-family: 'Bebas Neue', cursive;
        }
        p {
          font-size: 0.825rem;
          margin: 0 0 1em 0;
        }

        img {
          max-width: 100%;
          max-height: 100%;
        }
        .content {
          width: 95%;
          padding: 0 0.5em;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media only screen and (min-width: 400px) {
          .content {
            padding: 0 0.75em;
          }
        }
        @media only screen and (min-width: 768px) {
          body {
            font-size: 1.5rem;
          }

          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Layout;
