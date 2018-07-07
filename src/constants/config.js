var devConfig = {
  apiKey: "AIzaSyA_HaUVpPcUumyV8xarOjXEF8Yw3fTCWCg",
  authDomain: "deepening-gloom.firebaseapp.com",
  databaseURL: "https://deepening-gloom.firebaseio.com",
  projectId: "deepening-gloom",
  storageBucket: "deepening-gloom.appspot.com",
  messagingSenderId: "924611394633"
}

var prodConfig = {
  apiKey: "AIzaSyA_HaUVpPcUumyV8xarOjXEF8Yw3fTCWCg",
  authDomain: "deepening-gloom.firebaseapp.com",
  databaseURL: "https://deepening-gloom.firebaseio.com",
  projectId: "deepening-gloom",
  storageBucket: "deepening-gloom.appspot.com",
  messagingSenderId: "924611394633"
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config