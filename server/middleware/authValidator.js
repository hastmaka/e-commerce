const admin = require("firebase-admin");

const serviceAccount = require("../config/react-63e14-firebase-adminsdk-gv0q2-17cceb433e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-63e14-default-rtdb.firebaseio.com"
});

module.exports.getUserByToken = (token) => {
  return new Promise((resolve, reject) => {
    /* check if the token exist and was created with firebase */
    admin.auth().verifyIdToken(token).then(decodedIdToken => {
      console.log('ID Token correctly decoded', decodedIdToken);
      return resolve(decodedIdToken);
    }).catch(error => {
      console.error('Error while verifying Firebase ID token:', error);
      return reject({code: 403, error: 'Unauthorized'});
    });
  })
}