import { defineStore } from 'pinia';
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '@/js/firebase';

import { useStoreNotes } from '@/store/notes';

export const useStoreAuth = defineStore('storeAuth', {
  state: () => ({
    user: {},
  }),
  actions: {
    init() {
      //const storeNotes = useStoreNotes();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          //storeNotes.init();
          this.router.push('/');
          // storeNotes.init();
        } else {
          // User is signed out
          console.log('logout', user);
          // ...
          this.user = {};
          this.router.replace('/auth');
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
