// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var stringOutput = '';

  // primitives
  if (typeof obj === 'string') {
    stringOutput += obj;
  }

  if (typeof obj === 'number') {
    stringOutput += obj.toString();
  }

  if (typeof obj === 'boolean') {
    stringOutput += obj.toString();
  }

  if (obj === null) {
    stringOutput += 'null';
  }

  if (obj === undefined || typeof obj === 'function') {

  }

  // array
  if (Array.isArray(obj)) {
    stringOutput += '[';
    for (var i = 0; i < obj.length; i++) {
      stringOutput += obj[i] + ',';
    }
    stringOutput += ']';
  }

  // object
  if (typeof obj === 'object') {

  }

  return stringOutput;

};
