import { defineStore } from 'pinia';
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  addDoc,
} from 'firebase/firestore';
import { useStoreAuth } from '@/store/auth';
import { db } from '@/js/firebase';

let notesCollectionRef;
let notesCollectionQuery;

export const useStoreNotes = defineStore('notes', {
  state: () => ({
    title: 'My Notes',
    notes: [],
    notesLoaded: false,
  }),
  actions: {
    init() {
      const storeAuth = useStoreAuth();
      const userId = storeAuth.user.id;
      console.log('User id', storeAuth.user.id);
      notesCollectionRef = collection(db, 'users', userId, 'notes');
      notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'));
      this.getNotes();
    },

    async getNotes() {
      this.notesLoaded = false;
      onSnapshot(notesCollectionQuery, (querySnapshot) => {
        const notes = [];
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date,
          };
          notes.push(note);
        });

        this.notes = notes;
        this.notesLoaded = true;
      });
    },
    clearNotes() {
      this.note = [];
    },
    updateNoteTitles(title) {
      this.title = title;
    },
    async updateNote(noteId, noteContent) {
      const noteToUpdateRef = doc(notesCollectionRef, noteId);
      await updateDoc(noteToUpdateRef, {
        content: noteContent,
      });
    },
    async addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        date = currentDate.toString();

      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date: date,
      });
    },

    async deleteNote(idToDelete) {
      await deleteDoc(doc(notesCollectionRef, idToDelete));
    },
  },
  getters: {
    totalItems: (state) => {
      return state.todoNumber + state.doneNumber + state.doingNumber;
    },
  },
});
