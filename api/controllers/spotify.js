import axios from 'axios';

import { SpotifyService } from '../services';

import { queryStr } from '../utils';

class SpotifyController {
  static attachSpotifyData(req, res, next) {
    const clientId = process.env.SP_CLIENT_ID;
    const clientSecret = process.env.SP_CLIENT_SECRET;
    const redirectUri = process.env.SP_REDIRECT_URI;
    const scope = 'user-read-private user-read-email';
    const auth = new Buffer(`${clientId}:${clientSecret}`).toString('base64');
    const basicAuth = {
      Authorization: `Basic ${auth}`,
    };

    req.spotify = {
      clientId,
      clientSecret,
      redirectUri,
      basicAuth,
      scope,
    };

    next();
  }

  static login(req, res, next) {
    const query = queryStr({
      response_type: 'code',
      client_id: req.spotify.clientId,
      redirect_uri: req.spotify.redirectUri,
      scope: req.spotify.scope,
    });

    res.redirect(`https://accounts.spotify.com/authorize?${query}`);
  }

  static async handleAuthCallback(req, res, next) {
    try {
      const response = await SpotifyService.handleAuthCallback(req);

      res.json(response);
    } catch (err) {
      console.log(err.response);

      res.json({ message: 'Error in SpotifyController.handleAuthCallback' });
    }
  }

  static async refresh(req, res, next) {
    try {
      const response = SpotifyService.refresh(req);

      res.json(response);
    } catch (err) {
      console.log(err.response);

      res.json({ message: 'Error in SpotifyController.refresh' });
    }
  }
}

export default SpotifyController;
