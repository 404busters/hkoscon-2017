// @flow
import firebase from './firebase';
import { loadAgenda, pushAddAgenda, pushRemoveAgenda } from './action';
import store from './store';

const database = firebase.database();

let uid = '';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    uid = user.uid;
    const dbRef = database.ref(`/agenda/${uid}`);
    dbRef.once('value')
      .then(snapshot => store.dispatch(loadAgenda(snapshot.val())));
    dbRef.on('child_added', (data) => {
      try {
        store.dispatch(pushAddAgenda(data.key, data.val()));
      } catch (e) {
        console.error(e);
      }
    });
    dbRef.on('child_removed', (data) => {
      try {
        store.dispatch(pushRemoveAgenda(data.key));
      } catch (e) {
        console.error(e);
      }
    });
  } else {
    if (uid) {
      database.ref(`/agenda/${uid}`).off();
    }
    uid = '';
  }
});

export function addAgenda(topic: string) {
  const ref = database.ref(`/agenda/${uid}`);
  const agendaRef = ref.push();
  agendaRef.set(topic);
  return agendaRef.key;
}

export function removeAgenda(key: string) {
  return database.ref(`/agenda/${uid}/${key}`).remove();
}
