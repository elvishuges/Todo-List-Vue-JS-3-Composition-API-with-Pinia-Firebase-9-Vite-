import { defineStore } from 'pinia';

export const useNote = defineStore('notes', {
  state: () => ({
    title: 'My Notes',
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
