import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import {
  firebaseRouter,
  mapRouter,
  spotifyRouter,
} from '../routers';

const configureExpress = (serveDir) => {
  const app = express();

  // Disallow OPTIONS calls
  app.all('*', (req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.status(409).end();
    } else {
      next();
    }
  });

  app.use(cookieParser());

  // such easy params
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  app.use('/api/maps', mapRouter);

  app.use('/api/spotify', spotifyRouter);
  app.use('/spotify', spotifyRouter);

  app.use('/api/firebase', firebaseRouter);

  // serve static files (html, js, css, images, etc)
  app.use(express.static(serveDir, {
    index: 'index.html',
    redirect: false,
  }));

  // serve the index.html over all unmatched Routes.js
  app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(serveDir, 'index.html'));
  });

  return app;
};

export default configureExpress;
