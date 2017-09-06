import * as admin from 'firebase-admin';

class FirebaseService {
  static getConfig(req, res, next) {
    const apiKey = process.env.FIREBASE_API_KEY || '';
    const authDomain = process.env.FIREBASE_AUTH_DOMAIN || '';
    const databaseURL = process.env.FIREBASE_DB_URL || '';
    const projectId = process.env.FIREBASE_PROJECT_ID || '';
    const storageBucket = process.env.FIREBASE_STORAGE_BUCKET || '';
    const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID || '';

    return {
      apiKey,
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId,
    };
  }

  static saveSpotifyTokens(uid, access, refresh) {
    const db = admin.database();
    const spotifyRef = db.ref(`/users/${uid}/spotify`);
    spotifyRef.update({
      accessToken: access,
      refreshToken: refresh,
    });
  }

  static saveRecentlyPlayed(uid, items) {
    const db = admin.database();
    const spotifyRef = db.ref(`/users/${uid}/spotify/recent`);
    spotifyRef.set(items);
  }
}

export default FirebaseService;
