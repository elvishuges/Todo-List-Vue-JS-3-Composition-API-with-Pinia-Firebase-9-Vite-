import { defineStore } from 'pinia';

export const useStoreNotes = defineStore('notes', {
  state: () => ({
    title: 'My Notes',
    notes: [],
  }),
  actions: {
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
