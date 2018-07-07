import * as firebase from 'firebase';
import Config from '../../constants/config'

if (!firebase.apps.length) {
    firebase.initializeApp(Config);
}

//const db = firebase.database();
const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

const auth = firebase.auth();

export {
  db,
  auth,
};
