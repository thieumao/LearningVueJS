// _blank: open new tab
// _top: open current tab
var vueInstance = new Vue({
  el: '#app',
  data: {
    title: 'Samsung smartphone',
    url: 'https://google.com',
    target: '_blank', // _top
    check: true,
    price: 10000,
    counter: 1
  },
  methods: {
    say(text) {
      return 'Hello ' + text;
    },
    formatPrice() {
      console.log(this.price);
      return this.price;
    },
    handleClick(e) {
      console.log(e.target);
      this.counter = this.counter + 1;
    },
    add(number) {
      console.log(number);
    },
    addAndHandle(e, number) {
      console.log(e.target);
      console.log(number);
    },
    handleMouseMove(e) {
      console.log(e.target);
    }
  }
});

console.log(vueInstance);

setTimeout(() => {
  vueInstance.title = 'Oppo smartphone';
}, 3000);