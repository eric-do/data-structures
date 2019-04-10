var Stack = function() {
  var obj = {
    index: 0,
    storage: {}
  };

  extend(obj, stackMethods);

  return obj;
};

var stackMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

stackMethods.push = function(str) {
  this.storage[this.index] = str;
  this.index++;
};

stackMethods.pop = function() {
  try {
    if (this.size() === 0) {
      throw 'Cannot pop an empty stack';
    } else {
      var temp = this.storage[this.index - 1];
      delete this.storage[this.index - 1];
      this.index--;
      return temp;
    }
  } catch (e) {
    console.log(e);
  }
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};