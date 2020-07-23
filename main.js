var vueInstance = new Vue({
  el: '#app',
  data: {
    title: 'Samsung smartphone'
  },
  methods: {
    say: function (text) {
      return 'Hello ' + text;
    }
  }
});

console.log(vueInstance);

setTimeout(() => {
  vueInstance.title = 'Oppo smartphone';
}, 3000);