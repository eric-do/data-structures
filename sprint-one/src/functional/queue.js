var Queue = function() {
  var someInstance = {};
  var index = 0;
  var back = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    try {
      if (someInstance.size() === 0) {
        throw "Cannot dequeue an empty queue";
      } else {
        var temp = storage[back];
        delete storage[back];
        back++; 
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
