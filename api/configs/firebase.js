import * as admin from 'firebase-admin';

const configureFirebase = (serviceAccount) => {
  const dbUrl = process.env.FIREBASE_DB_URL;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: dbUrl,
    databaseAuthVariableOverride: {
      uid: 'poltergeist',
    },
  });

  return admin;
};

export default configureFirebase;
