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
  },
  getters: {
    totalItems: (state) => {
      return state.todoNumber + state.doneNumber + state.doingNumber;
    },
  },
});
