import { db } from './firebase';

// User API

// export const doCreateUser = (id, username, email) =>
//   db.ref(`users/${id}`).set({
//     username,
//     email,
//     role : 'User',
//     data : {
//       level: 1,
//       xp: 0,
//       class: 'none'
//     }
//   });
export const doCreateUser = (id, username, email) =>
  db.collection('users').doc().set({
    username,
    email,
    role : 'Player',
    data : {
      level: 1,
      xp: 0,
      class: 'none'
    }
  });

// export const onceGetUsers = () =>
//   db.ref('users').once('value');
export const onceGetUsers = () =>
  db.collection('users').get();

// Other Entity APIs ...
