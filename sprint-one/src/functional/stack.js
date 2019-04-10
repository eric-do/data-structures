var Stack = function() {
  var someInstance = {};
  var index = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.pop = function() {
    try {
      if (someInstance.size() === 0 || someInstance.size() === undefined) {
        throw 'Cannot pop an empty stack';
      } else {
        var temp = storage[index - 1];
        delete storage[index - 1];
        index--;
        return temp;
      }
    } catch (e) {
      console.log(e);
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
