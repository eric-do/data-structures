var Queue = function() {
  this.index = 0;
  this.storage = {};
  this.back = 0;
};

Queue.prototype.enqueue = function(str) {  
  this.storage[this.index] = str;
  this.index++;
};

Queue.prototype.dequeue = function() {
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
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

