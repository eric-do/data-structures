var Queue = function() {
  var obj = {};
  obj.storage = {};
  obj.back = 0;
  obj.index = 0;

  extend(obj, queueMethods);

  return obj;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(str) {
  this.storage[this.index] = str;
  this.index++;
}

queueMethods.dequeue = function() {
  try {
    if (this.size() === 0) {
      throw "Can't dequeue an empty queue";
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

queueMethods.size = function() {
  return Object.keys(this.storage).length;
}


