Number.prototype.double = function() {
  return this*2;
}

Number.prototype.tripledouble = function() {
  return this*3*2;
}

Number.prototype.isDivisibleBy = function(modulo) {
  return (this % modulo) === 0;
}

Number.prototype.submultitractivide = function(number) {
  var i, result = this;

  for(i=0; i < 2; i++) {
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        result = result + number;
        break;
      case 1:
        result = result - number;
        break;
      case 2:
        result = result * number;
        break;
      case 3:
        result = result / number;
    }
  }
  return result;
}