require('dotenv').config();
const fetch = require('isomorphic-unfetch');
const fs = require('fs');
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
const path = require('path');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(
    bodyParser.urlencoded({
      extended: true
    })
  );

  server.use(bodyParser.json());

  server.get('/about', (req, res) => {
    return app.render(req, res, '/about', req.query);
  });

  server.post('/suscribe', (req, res) => {
    global.Headers = global.Headers || require('fetch-headers');

    const makeRequest = async () => {
      try {
        const postData = JSON.stringify(req.body);
        const resAuth = await fetch(
          'https://us4.api.mailchimp.com/3.0/lists/d3847abbab',
          {
            method: 'POST',
            headers: new Headers({
              Authorization: `auth ${process.env.AUTH_MAILCHIMP}`
            }),
            body: postData
          }
        );
        const dataAuth = await resAuth.json();
        if (res.statusCode === 200) {
          res.json({ state: 'succesfull' });
        } else {
          res.json({ state: 'fail' });
        }
      } catch (error) {
        console.log(e);
        res.json({ state: 'fail' });
      }
    };
    makeRequest();
  });

  server.get('/getTopSongs', (req, res) => {
    global.Headers = global.Headers || require('fetch-headers');

    async function getTopSongs() {
      const resAuth = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${process.env.AUTH_SPOTIFY}`
        }),
        body: 'grant_type=client_credentials'
      });

      const dataAuth = await resAuth.json();

      const res = await fetch(
        'https://api.spotify.com/v1/artists/4XCq6wVD10ui7rkXScdWvP/top-tracks?country=SE',
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Authorization: Bearer ${dataAuth.access_token}`
          })
        }
      );
      const data = await res.json();

      return {
        songs: data.tracks.map(entry => {
          return {
            name: entry.name,
            image: entry.album.images[0].url,
            id: entry.id,
            external_urls: entry.external_urls
          };
        })
      };
    }

    getTopSongs().then(e => res.json(e));
  });

  server.get('/b', (req, res) => {
    return app.render(req, res, '/b', req.query);
  });

  server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  if (!dev) {
    https
      .createServer(
        {
          key: fs.readFileSync(path.join(__dirname, 'server.key')),
          cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
        },
        server
      )
      .listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on https://localhost:${port}`);
      });
  } else {
    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  }
});
