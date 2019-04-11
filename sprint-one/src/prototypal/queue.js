var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.back =  0;
  obj.index = 0;
  obj.storage = {};

  return obj;
};

var queueMethods = {};

queueMethods.queue = function(str) {  
  this.storage[this.index] = str;
  this.index++;
};

queueMethods.dequeue = function() {
  try {
    if (this.size() === 0) {
      throw 'Can\'t dequeue an empty queue';
    } else {
      var temp = this.storage[this.back];
      delete this.storage[this.back];
      this.back++
      return temp;
    }
  } catch (e) {
    console.log(e);
  }
};

queueMethods.size = function() {
  //debugger;
  return Object.keys(this.storage).length;
};

