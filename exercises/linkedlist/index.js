// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data = null) {
    this.insertAt(data, 0);
  }

  size() {
    let node = this.head;
    let count = 0;
    while (node) {
      node = node.next;
      count++;
    }
    return count;
  }

  getFirst() {
    return this.getAt(0);
  }
  getLast() {
    // if (!this.head) {
    //   return null;
    // }
    // let node = this.head;
    // while (node) {
    //   if (!node.next) {
    //     node = node;
    //     break;
    //   } else {
    //     node = node.next;
    //   }
    // }
    // return node;
    return this.getAt(this.size() - 1);
  }
  clear() {
    this.head = null;
  }

  removeFirst() {
    // if (!this.head) {
    //   return null;
    // }
    // this.head = this.head.next;
    this.removeAt(0);
  }

  removeLast() {
    // if (!this.head) {
    //   return;
    // }
    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // }
    // let prev = this.head;
    // let node = this.head.next;
    // while (node.next) {
    //   prev = node;
    //   node = node.next;
    // }
    // prev.next = null;
    this.removeAt(this.size() - 1);
  }

  insertLast(data) {
    // const last = this.getLast();
    // if (last) {
    //   last.next = new Node(data);
    // } else {
    //   this.head = new Node(data);
    // }
    this.insertAt(data, this.size());
  }

  getAt(index) {
    let node = this.head;
    let count = 0;
    while (node) {
      if (count === index) {
        return node;
      }
      node = node.next;
      count++;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const prev = this.getAt(index - 1);
    if (!prev || !prev.next) {
      return;
    }
    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const prev = this.getAt(index - 1) || this.getLast();

    const node = new Node(data, prev.next);
    prev.next = node;
  }

  forEach(fn) {
    if (!this.head) {
      return;
    }
    for (let i = 0; i < this.size(); i++) {
      let node = this.getAt(i);
      node = fn(node);
    }
  }
}

module.exports = { Node, LinkedList };
