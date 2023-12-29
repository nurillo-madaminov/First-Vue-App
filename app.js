const app = Vue.createApp({
  data() {
    return {
      data: 0,
    };
  },
  methods: {
    increase() {
      this.data++;
    },
    decrease() {
      this.data--;
    },
  },
});

app.mount("#app");
