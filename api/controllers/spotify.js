import axios from 'axios';

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
    const code = req.query.code || null;

    const authOptions = {
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      params: {
        code,
        redirect_uri: req.spotify.redirectUri,
        grant_type: 'authorization_code',
      },
      headers: req.spotify.basicAuth,
      json: true,
    };

    try {
      const response = await axios(authOptions);

      const {
        access_token,
        refresh_token,
      } = response.data;

      res.json({
        access_token,
        refresh_token,
      });
    } catch (err) {
      console.log(err.response);

      res.json({ message: 'Error' });
    }
  }

  static async refresh(req, res, next) {
    const {
      refresh_token,
    } = req.query;

    const postOptions = {
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      headers: req.spotifyData.basicAuth,
      form: {
        grant_type: 'refresh_token',
        refresh_token,
      },
      json: true,
    };

    try {
      const response = axios(postOptions);

      const { access_token } = response.data;
      res.json({ access_token });
    } catch (err) {
      console.log(err.response);

      res.json({ message: 'Error' });
    }
  }
}

export default SpotifyController;
