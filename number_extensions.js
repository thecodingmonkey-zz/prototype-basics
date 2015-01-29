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
//  console.log(this, number);

  for(i=0; i < 2; i++) {
    switch (Math.floor(Math.random() * 4)) {
      case 0:
//        console.log('add');
        result = result + number;
        break;
      case 1:
 //       console.log('sub');
        result = result - number;
        break;
      case 2:
//        console.log('mult');
        result = result * number;
        break;
      case 3:
//        console.log('div');
        result = result / number;
    }
  }
  return result;
}

// var number = 5;

// console.log( number.submultitractivide(8) );