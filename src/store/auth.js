import { defineStore } from 'pinia';
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '@/js/firebase';

export const useStoreAuth = defineStore('storeAuth', {
  state: () => ({
    user: {},
  }),
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log('login');
          this.user.id = user.uid;
          this.user.email = user.email;
        } else {
          // User is signed out
          console.log('logout', user);
          // ...
          this.user = {};
        }
      });
    },
    async registerUser(credentials) {
      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          console.log('error', error.message);
        });
    },
    async loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log('user', user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    },
    async logoutUser() {
      signOut(auth)
        .then(() => {
          console.log('signOut');
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
  getters: {},
});
