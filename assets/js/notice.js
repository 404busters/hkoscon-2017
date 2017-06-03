import firebase from './firebase';

/* globals navigator, fetch */

const headers = {
  Authorization: `key=${process.env.FIREBASE_MESSAGE_SERVER_KEY}`,
  'Content-Type': 'application/json',
};

function subscribeChannel(token, topic) {
  const url = `https://iid.googleapis.com/iid/v1/${token}/rel/topics/${topic}`;
  return fetch(url, {
    headers,
    method: 'POST',
  })
    .then((response) => {
      if (response.status === 200) {
        return true;
      }
      throw new Error(response);
    });
}

function messageCallback(payload) {
  navigator.serviceWorker.getRegistration()
    .then((registration) => {
      const { notification } = payload;
      return registration.showNotification(notification.title, {
        icon: 'https://hkoscon.org/logo.png',
        body: payload.notifications.body,
        vibrate: [500, 100, 500],
      });
    });
}

const messaging = firebase.messaging();

messaging.requestPermission()
  .then(() => navigator.serviceWorker.getRegistration())
  .then((registration) => {
    messaging.useServiceWorker(registration);
    return messaging.getToken();
  })
  .then(token => subscribeChannel(token, 'broadcast'))
  .then(() => messaging.onMessage(messageCallback))
  .catch((err) => {
    console.error('Unable to get permission to notify.', err);
  });
