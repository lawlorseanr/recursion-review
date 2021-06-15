// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var stringOutput = '';

  // primitives
  if (typeof obj === 'string') {
    stringOutput += '"' + obj + '"';
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

  // array
  if (Array.isArray(obj)) {

    stringOutput += '[';
    for (var i = 0; i < obj.length; i++) {

      var stringifyOutput = stringifyJSON(obj[i]);
      stringOutput += stringifyOutput;

      if (i !== obj.length - 1) {
        stringOutput += ',';
      }

    }
    stringOutput += ']';

  }

  // object
  if (!Array.isArray(obj) && obj instanceof Object) {

    stringOutput += '{';
    for (var key in obj) {

      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        stringOutput += '"' + key + '"';
        stringOutput += ':';

        var stringifyOutput = stringifyJSON(obj[key]);
        stringOutput += stringifyOutput;
        stringOutput += ',';
      }

    }

    if (stringOutput.length > 2) {
      stringOutput = stringOutput.substr(0, stringOutput.length - 1);
    }
    stringOutput += '}';

  }

  return stringOutput;

};
