// make your own counter object
let counter = 0;
counter++;
counter--;

counter += 2;
counter += 2;
counter += 2;

counter -= 5;

const counter = {
  value: 0,
  step: 1,
  // build methods to change that counter value
  // inc(step) { this.value += step },
  inc(step) {
    if (step > 10) {
      step = 10;
    }
    this.value += step
  },
  // incByTwo() { this.value+=2 },
  // incByThree() { this.value+=3 },
  dec() { this.value-- },
  // count by 2s
};

counter.value; // 0
counter.inc(); // 1
counter.dec(); // 0
counter.step = 2;
counter.inc(); // 2??
counter.inc(100); // capped at 10
