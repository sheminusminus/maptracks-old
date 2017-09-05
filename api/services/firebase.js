import * as admin from 'firebase-admin';

class FirebaseService {
  static getConfig(req, res, next) {
    const apiKey = process.env.FIREBASE_API_KEY || '';
    const authDomain = process.env.FIREBASE_AUTH_DOMAIN || '';
    const databaseUrl = process.env.FIREBASE_DB_URL || '';
    const projectId = process.env.FIREBASE_PROJECT_ID || '';
    const storageBucket = process.env.FIREBASE_STORAGE_BUCKET || '';
    const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID || '';

    return {
      apiKey,
      authDomain,
      databaseUrl,
      projectId,
      storageBucket,
      messagingSenderId,
    };
  }

  static async saveSpotifyTokens(uid, access, refresh) {
    const db = admin.database();
    const spotifyRef = db.ref(`/users/${uid}/spotify`);
    spotifyRef.set({
      accessToken: access,
      refreshToken: refresh,
    });
    return {};
  }
}

export default FirebaseService;
