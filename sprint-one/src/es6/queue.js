class Queue {
  constructor() {
    this.index = 0;
    this.back = 0;
    this.storage = {};
  }

  enqueue(str) {
    this.storage[this.index] = str;
    this.index++;
  }

  dequeue() {
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
