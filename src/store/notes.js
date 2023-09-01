import { defineStore } from 'pinia';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/js/firebase';

export const useStoreNotes = defineStore('notes', {
  state: () => ({
    title: 'My Notes',
    notes: [],
  }),
  actions: {
    async getNotes() {
      const querySnapshot = await getDocs(collection(db, 'notes'));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
        let note = {
          id: doc.id,
          content: doc.data().content,
        };
        this.notes.push(note);
      });
    },
    updateNoteTitles(title) {
      this.title = title;
    },
    updateNote(noteId, noteContent) {
      let noteIndex = this.notes.findIndex((note) => note.id === noteId);
      this.notes[noteIndex].content = noteContent;
    },
    addNote(newNoteContent) {
      console.log('newNoteContent', newNoteContent);
      let currentDate = new Date().getTime(),
        id = currentDate.toString();

      let note = {
        id,
        content: newNoteContent,
      };
      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
  },
  getters: {
    totalItems: (state) => {
      return state.todoNumber + state.doneNumber + state.doingNumber;
    },
  },
});
