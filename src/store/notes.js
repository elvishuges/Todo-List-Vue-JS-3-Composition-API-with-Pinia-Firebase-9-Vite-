import { defineStore } from 'pinia';
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '@/js/firebase';

const notesCollectionRef = collection(db, 'notes');

export const useStoreNotes = defineStore('notes', {
  state: () => ({
    title: 'My Notes',
    notes: [],
  }),
  actions: {
    async getNotes() {
      onSnapshot(notesCollectionRef, (querySnapshot) => {
        const notes = [];
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
          };
          notes.push(note);
        });
        this.notes = notes;
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
        id = currentDate.toString();

      await setDoc(doc(notesCollectionRef, id), { content: newNoteContent });
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
