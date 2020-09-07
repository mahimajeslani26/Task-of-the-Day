import firebase from 'firebase';

const firebaseApp = {
  apiKey: 'AIzaSyAzuwaXQ--TaZYixHEKvO8zGle65bJfCsI',
  authDomain: 'task-of-the-day-1be02.firebaseapp.com',
  databaseURL: 'https://task-of-the-day-1be02.firebaseio.com',
  projectId: 'task-of-the-day-1be02',
  storageBucket: 'task-of-the-day-1be02.appspot.com',
  messagingSenderId: '799903031744',
  appId: '1:799903031744:web:852080631fcdc04ceda825',
  measurementId: 'G-X02B6T8WEH',
};

const db = firebaseApp.firestore();

export { db };
