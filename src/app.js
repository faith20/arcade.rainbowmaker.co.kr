import App from './svelte/App.svelte';

let app;

document.addEventListener('DOMContentLoaded', function () {
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
    const firebaseApp = firebase.app();
    const features = ['auth', 'database', 'messaging', 'storage'].filter(
      (feature) => typeof firebaseApp[feature] === 'function'
    );
    console.log(`Firebase SDK loaded with ${features.join(', ')}`);
  } catch (e) {
    console.error(e);
    console.log('Error loading the Firebase SDK, check the console.');
  }

  app = new App({
    target: document.body
  });
});

export default app;
