import { acceptHMRUpdate, defineStore } from 'pinia';

export const useCountStore = defineStore('count', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter += 1;
    },
    decrease() {
      this.counter -= 1;
    },
  },
});

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useCountStore, import.meta.hot));
