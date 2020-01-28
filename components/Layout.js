// components/Layout.js
function Layout(props) {
    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');

          body {
            margin: 0;
            padding: 0;
            font-size: 18px;
            font-weight: 400;
            line-height: 1.8;
            color: #333;
            font-family: 'Bebas Neue', cursive;
          }
          h1 {
            font-weight: 700;
          }
          p {
            margin-bottom: 10px;
          }

          .content {
            padding: 0 0.75em;
          }
        `}</style>
      </div>
    )
  }
  
  export default Layout
  