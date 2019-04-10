var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.index = 0;
  obj.storage = {};

  return obj;
};

var stackMethods = {};

stackMethods.push = function(str) {
  this.storage[this.index] = str;
  this.index++;
}

stackMethods.pop = function() {
  try {
    if (this.size() === 0) {
      throw 'Can\'t pop an empty stack';
    } else {
      var temp = this.storage[this.index - 1];
      delete this.storage[this.index - 1];
      this.index--;
      return temp;
    }
  } catch (e) {
    console.log(e);
  }
}

stackMethods.size = function() {
  return Object.keys(this.storage).length;
}