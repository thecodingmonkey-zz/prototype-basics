Array.prototype.toString = function() {
  var i, result = '';
  for(i=0; i < this.length; i++) {
    if (this[i] == null || typeof(this[i]) == 'function') {
      continue;
    }
    result += this[i].toString() + ", ";
  }  

  if (result.length > 0)
  result = result.substr(0, result.length - 2);

  return result;
}

Array.prototype.forEvery = function(x) {
  var i, result = [];
  for(i=0; i < this.length; i++) {
    result.push( x(this[i]) );
  }
  return result;
}

// console.log(
//   [1,2,4,8].forEvery( function(x) {
//     return x*2;
//   })
// );



//console.log([12, "43", null, 44].toString() );

