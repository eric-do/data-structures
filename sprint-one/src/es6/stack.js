class Stack {
  constructor() {
    this.index = 0;
    this.storage = {};
  }

  push(str) {
    this.storage[this.index] = str;
    this.index++;
  }

  pop() {
    try {
      if (this.size() === 0) {
        throw 'Can\'t pop an empty stack';
      } else {
        var temp = this.storage[this.index - 1];
        delete this.storage[this.index - 1]
        this.index--;
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