
describe("Array.prototype toString", function() {
  it("should return a string with null values omitted", function() {
    expect([1,2,3,4].toString()).to.equal([1,2,3,null,4].toString() );
  });
  it("should be able to deal with empty arrays", function() {
    expect([].toString()).to.equal([null,null, function() {return 1;}, null].toString() );
  });

});

describe("Array.prototype forEvery", function() {
  it("should apply a function to all elements of an array", function() {
    var array = [1,2,3,4];
    var array2 = array.forEvery(function(x) { return 2*x; });

    // console.log(array2);
    // console.log(array2.length);

    expect(array2.toString() ).to.equal([2,4,6,8].toString() );
  });
  // it("should be able to deal with empty arrays", function() {
  //   expect([].forEvery(function(x) { return 2*x; })).to.equal([] );
  // });

});

describe("String.prototype wtf", function() {
  it("should return wtf regardless", function() {
    expect("foo".wtf()).to.equal("wtf");
    expect("foo".wtf('bar')).to.equal("wtf");
  });
});

describe("String.prototype scramble", function() {
  it("should return strings of the same length", function() {
    expect("foo".scramble().length).to.equal("foo".length);

    var word = 'antidisesblishmentarianism';
    expect(word.scramble().length).to.equal(word.length);
  });
});

describe("String.prototype trim", function() {
  it("should return a trimmed string", function() {
    expect("    fo o      ".trim().length).to.equal(4);
  });

  it("should not crash on already trimmed strings", function() {
    expect("foo".trim()).to.equal("foo");    
  });
});

describe("Number.prototype double", function() {
  it("should double a number", function() {
    var number = 10;
    expect(number.double()).to.equal(number*2);
  });
});

describe("Number.prototype tripledouble", function() {
  it("should triple then double a number", function() {
    var number = 10;
    expect(number.tripledouble()).to.equal(number*3*2);
  });
});

describe("Number.prototype isDivisibleBy", function() {
  it("should return if a number is divisible", function() {
    var number = 60;
    expect(number.isDivisibleBy(12)).to.equal(true);
    expect(number.isDivisibleBy(6)).to.equal(true);
    expect(number.isDivisibleBy(3)).to.equal(true);
    expect(number.isDivisibleBy(7)).to.equal(false);
    expect(number.isDivisibleBy(120)).to.equal(false);
  });
});

describe("Number.prototype submultitractivide", function() {
  it("should do random operations", function() {
      var number = 1;
      expect(number.submultitractivide(1)).to.be.within(-10, 10);
    });  
});

//describe()