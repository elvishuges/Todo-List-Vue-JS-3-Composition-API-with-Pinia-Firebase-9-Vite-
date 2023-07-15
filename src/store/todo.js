import { defineStore } from 'pinia';

export const useTodo = defineStore('todo', {
  state: () => ({
    todoNumber: 0,
    doingNumber: 0,
    doneNumber: 0,
    title: 'My Todo Kaban',
  }),
  actions: {
    updateTodoNumber(payload) {
      this.todoNumber = payload;
    },
    updateDoingNumber(payload) {
      this.doingNumber = payload;
    },
    updateDoneNumber(payload) {
      this.doneNumber = payload;
    },
  },
  getters: {
    totalItems: (state) => {
      return state.todoNumber + state.doneNumber + state.doingNumber;
    },
  },
});
