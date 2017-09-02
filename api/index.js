import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import mapRouter from './maps';

const PORT = 3005;

const serveDir = (process.env.NODE_ENV === 'production') ? '../client' : '../build/client';

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
