import { defineStore } from 'pinia';
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  addDoc,
} from 'firebase/firestore';
import { db } from '@/js/firebase';

const notesCollectionRef = collection(db, 'notes');
const notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'));

export const useStoreNotes = defineStore('notes', {
  state: () => ({
    title: 'My Notes',
    notes: [],
    notesLoaded: false,
  }),
  actions: {
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
