import firebase from 'firebase/app';
import 'firebase/messaging';

/* globals self */

firebase.initializeApp({
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => self.registration.showNotification(payload.notification.title, {
  icon: 'https://hkoscon.org/logo.png',
  body: payload.notifications.body,
  vibrate: [500, 100, 500],
}));

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(self.clients.matchAll({
    type: 'window',
  }).then((clients) => {
    for (const client of clients) {
      if ('focus' in client) {
        return client.focus();
      }
    }
    return self.clients.openWindow('/2017/');
  }));
});
