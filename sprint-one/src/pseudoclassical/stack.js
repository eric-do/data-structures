var Stack = function() {
  this.storage = {};
  this.index = 0;
};

Stack.prototype.push = function(str) {
  this.storage[this.index] = str;
  this.index++;
};

Stack.prototype.pop = function() {
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
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
}
