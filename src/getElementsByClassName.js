// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  // your code here
  var classElements = [];

  var recursiveClassName = function(obj) {

    if (obj.classList !== undefined && obj.classList.contains(className)) {
      classElements.push(obj);
    }

    // obj.childNodes.hasChildNodes();
    if (obj.hasChildNodes()) {

      for (var i = 0; i < obj.childNodes.length; i++) {
        var currChild = obj.childNodes[i];

        recursiveClassName(currChild);
      }

    }

  };

  recursiveClassName(document.body);

  return classElements;

};
