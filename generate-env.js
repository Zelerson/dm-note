const fs = require('fs');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const environment = {
  firebaseConfig,
};

const envConfigFile = `
  export const environment = ${JSON.stringify(environment, null, 2)};
`;

fs.writeFile('./src/environments/environment.ts', envConfigFile, (err) => {
  if (err) {
    console.error('Error writing environment.ts file', err);
    process.exit(1);
  }
});