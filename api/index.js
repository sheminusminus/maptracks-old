/* eslint-disable */
import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';
import 'winston-loggly-bulk';

import { mapRouter, spotifyRouter } from './routers';
/* eslint-enable */

const PORT = 3005;

// get serving directory for dev/prod
const serveDir = (process.env.NODE_ENV === 'production') ? '../client' : '../build/client';

// add logging to loggly
winston.add(winston.transports.Loggly, {
  token: process.env.LOGGLY_TOKEN,
  subdomain: process.env.LOGGLY_SUBDOMAIN,
  tags: [
    'Winston-NodeJS',
  ],
  json: true,
});

winston.log('info', 'Hello World from Ghostlist nodejs!');

// ===========
// express
// ===========
const app = express();

// Disallow OPTIONS calls
app.all('*', (req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.status(409).end();
  } else {
    next();
  }
});

// such easy params
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/api/maps', mapRouter);

app.use('/api/spotify', spotifyRouter);

// serve static files (html, js, css, images, etc)
app.use(express.static(path.join(__dirname, serveDir), {
  index: 'index.html',
  redirect: false,
}));

// serve the index.html over all unmatched Routes.js
app.get('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, `${serveDir}/index.html`));
});

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
