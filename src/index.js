function Counter() {
  this.count = 0;

  this.increment = () => {
    this.count++;
  };

  this.decrement = () => {
    this.count--;
  };
}

let singleton = (function () {
  let instance;

  return {
    getInstance() {
      if (!instance) {
        instance = new Counter();
      }

      return instance;
    }
  };
})();

let counter = singleton.getInstance();
let counter2 = singleton.getInstance();

console.log(counter === counter2);
