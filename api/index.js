/* eslint-disable import/first */

// ===========
// libraries
// ===========
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

// ===========
// configurations
// ===========
import {
  configureExpress,
  configureLoggly,
  configureDotenv,
  configureFirebase,
} from './configs';

configureDotenv(); // need env vars first

const serviceAccount = require('../ghostfyi-d25cf-firebase-adminsdk-nr3zw-2f4672eb2a.json');

// ===========
// routers
// ===========
import {
  mapRouter,
  spotifyRouter,
} from './routers';

/* eslint-enable import/first */

// ===========
// constants
// ===========
const PORT = process.env.SERVE_PORT;
const SERVE_DIR = (process.env.NODE_ENV === 'production') ?
  path.resolve(__dirname, '../client') :
  path.resolve(__dirname, '../build/client');

// ===========
// firebase admin config
// ===========
const admin = configureFirebase(serviceAccount);

// ===========
// loggly config
// ===========
configureLoggly();

// ===========
// express app config
// ===========
const app = configureExpress(SERVE_DIR);

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
