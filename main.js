// _blank: open new tab
// _top: open current tab
var vueInstance = new Vue({
  el: '#app',
  data: {
    title: 'Samsung smartphone',
    url: 'https://google.com',
    target: '_blank' // _top
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