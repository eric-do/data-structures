class Queue {
  constructor() {
    debugger;
    this.index = 0;
    this.back = 0;
    this.storage = {};
  }

  queue(str) {
    this.storage[this.index] = str;
    this.index++;
  }

  enqueue() {
    try {
      if (this.size() === 0) {
        throw 'Can\'t dequeue an empty queue';
      } else {
        var temp = this.storage[this.back];
        delete this.storage[this.back];
        this.back++;
        return temp;
      }
    } catch (e) {
      console.log(e);
    }
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
