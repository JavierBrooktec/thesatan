// components/Layout.js
import img from '../assets/doom-eternal-bg.jpg';

function Layout(props) {
  return (
    <div className='page-layout'>
      {props.children}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

        @font-face{font-family:"revicons";fallback:fallback;src:url("./revicons.woff") format('woff'),url("./revicons.ttf") format('ttf'),url("./revicons.eot") format('ttf')}.react-multi-carousel-list{display:flex;align-items:center;overflow:hidden;position:relative}.react-multi-carousel-track{list-style:none;padding:0;margin:0;display:flex;flex-direction:row;position:relative;transform-style:preserve-3d;backface-visibility:hidden;will-change:transform,transition}.react-multiple-carousel__arrow{position:absolute;outline:0;transition:all .5s;border-radius:35px;z-index:1000;border:0;background:rgba(0,0,0,0.5);min-width:43px;min-height:43px;opacity:1;cursor:pointer}.react-multiple-carousel__arrow:hover{background:rgba(0,0,0,0.8)}.react-multiple-carousel__arrow::before{font-size:20px;color:#fff;display:block;font-family:revicons;text-align:center;z-index:2;position:relative}.react-multiple-carousel__arrow--left{left:calc(4% + 1px)}.react-multiple-carousel__arrow--left::before{content:"<"}.react-multiple-carousel__arrow--right{right:calc(4% + 1px)}.react-multiple-carousel__arrow--right::before{content:">"}.react-multi-carousel-dot-list{position:absolute;bottom:0;display:flex;left:0;right:0;justify-content:center;margin:auto;padding:0;margin:0;list-style:none;text-align:center}.react-multi-carousel-dot button{display:inline-block;width:12px;height:12px;border-radius:50%;opacity:1;padding:5px 5px 5px 5px;box-shadow:none;transition:background .5s;border-width:2px;border-style:solid;border-color:grey;padding:0;margin:0;margin-right:6px;outline:0;cursor:pointer}.react-multi-carousel-dot button:hover:active{background:#080808}.react-multi-carousel-dot--active button{background:#080808}.react-multi-carousel-item{transform-style:preserve-3d;backface-visibility:hidden}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.react-multi-carousel-item{flex-shrink:0 !important}.react-multi-carousel-track{overflow:visible !important}}

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
