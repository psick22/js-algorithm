// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.data = new Stack();
    this.cache = new Stack();
  }

  add(record) {
    while (this.data.peek()) {
      this.cache.push(this.data.pop());
    }
    this.data.push(record);
    while (this.cache.peek()) {
      this.data.push(this.cache.pop());
    }
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data.peek();
  }
}

module.exports = Queue;
