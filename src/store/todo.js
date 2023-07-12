import { defineStore } from 'pinia';

export const useTodo = defineStore('todo', {
  state: () => ({
    todoNumber: 0,
    doingNumber: 0,
    doneNumber: 0,
    title: 'My Todo Kaban',
  }),
  actions: {
    updateTodoNumber() {
      this.todoNumber = 1;
    },
    updateDoingNumber() {
      this.doingNumber = 2;
    },
    updateDoneNumber() {
      this.done = 2;
    },
  },
  getters: {
    totalItems: (state) => {
      return state.todoNumber + state.doneNumber + state.doingNumber;
    },
  },
});
