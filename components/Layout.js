// components/Layout.js
import img from '../assets/doom-eternal-bg.jpg';

function Layout(props) {
  return (
    <div className='page-layout'>
      {props.children}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

        body {
          background-image: url("${img}") , linear-gradient(90deg, rgba(0,0,0,0.8029586834733894) 0%, rgba(249,0,0,1) 30%, rgba(229,0,0,1) 70%, rgba(0,0,0,0.80015756302521) 100%);
          background-blend-mode: multiply;
          font-size: 1.125rem;
          margin: 0;
          padding: 0;
          font-weight: 400;
          line-height: 1.8;
          color: #333;
          font-family: 'Bebas Neue', cursive;
          color: #ffffff; 
        }
        h1 {
          font-weight: 700;
          font-size: 2rem;
          letter-spacing: 1px;
        }
        h2 {
          margin: 0;
          letter-spacing: 1px;
        }
        p {
          font-size: 0.825rem;
          font-family: 'Lato', sans-serif;
          margin: 0 0 1em 0;
        }

        img {
          max-width: 100%;
          max-height: 100%;
        }
        .content {
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
