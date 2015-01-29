Number.prototype.toRandom = function(lowerBound, upperBound) {
  var range = upperBound - lowerBound;
  return Math.floor(lowerBound + Math.random() * (1+range)) ;
};

String.prototype.toSillyTitle = function() {
  var name = this;
  var choice = Number.prototype.toRandom(0,1);
  var origString = this.toString();

  switch (choice) {
    case 0:
      return "Infernal Spawn of " + origString;
    case 1:
      return origString + " of Annihilation";
  }

};