import axios from 'axios';

import { SpotifyService, FirebaseService } from '../services';

import { queryStr } from '../utils';

class SpotifyController {
  static attachSpotifyData(req, res, next) {
    const clientId = process.env.SP_CLIENT_ID;
    const clientSecret = process.env.SP_CLIENT_SECRET;
    const redirectUri = process.env.SP_REDIRECT_URI;
    const scope = 'user-read-playback-state user-read-currently-playing user-read-recently-played';
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
    const uid = req.params.uid || '';
    const stateKey = 'state_uid';

    const query = queryStr({
      response_type: 'code',
      client_id: req.spotify.clientId,
      redirect_uri: req.spotify.redirectUri,
      scope: req.spotify.scope,
      state: uid,
    });

    res.cookie(stateKey, uid);

    res.redirect(`https://accounts.spotify.com/authorize?${query}`);
  }

  static async handleAuthCallback(req, res, next) {
    const stateKey = 'state_uid';
    const state = req.query.state || null;
    const storedState = req.cookies ? req.cookies[stateKey] : null;

    if (storedState !== state || storedState === null) {
      res.redirect('/');
    }

    try {
      const response = await SpotifyService.handleAuthCallback(req);

      const {
        access_token,
        refresh_token,
      } = response;

      const dbResponse = FirebaseService.saveSpotifyTokens(
        storedState,
        access_token,
        refresh_token,
      );

      const items = await SpotifyService.getUserRecentlyPlayed(access_token);
      FirebaseService.saveRecentlyPlayed(storedState, items);

      res.redirect('/spotify?success=true');
    } catch (err) {
      console.log(err.response);

      res.redirect('/spotify?success=false');
    }
  }

  static async getCallbackData(req, res, next) {
    next();
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
