import axios from 'axios';

import { queryStr } from '../utils';

class SpotifyService {
  static async handleAuthCallback(req) {
    const code = req.query.code || '';

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

      return {
        access_token,
        refresh_token,
      };
    } catch (err) {
      console.log(err.response);

      return { message: 'Error in SpotifyService.handleAuthCallback' };
    }
  }

  static async getUserRecentlyPlayed(accessToken) {
    const options = {
      method: 'GET',
      url: 'https://api.spotify.com/v1/me/player/recently-played',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      json: true,
    };

    try {
      const response = await axios(options);

      console.log(response.data.items);

      return response.data.items;
    } catch (err) {
      console.log(err, err.response);
      return {};
    }
  }

  static async refresh(req) {
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

      const {
        access_token,
      } = response.data;

      return {
        access_token,
      };
    } catch (err) {
      console.log(err.response);

      return { message: 'Error in SpotifyService.refresh' };
    }
  }
}

export default SpotifyService;
