String.prototype.wtf = function() {
  return "wtf";
}

var HALFSIES = 0.5;

String.prototype.scramble = function() {
  var string_array = this.split("");

  // calling sort with a random comparison function.  this makes it swap
  // half of the time.
  string_array.sort(function() {return (Math.random() > HALFSIES) } );
  return string_array.join("");
}

String.prototype.trim = function() {
  var result = this;

  while (result.charAt(0) === ' ') {
    result = result.substr(1);
  }

  while (result.substr(-1) === ' ') {
    result = result.substr(0, result.length - 1);
  }

  return result.toString();
}
