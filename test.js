/* Copyright (c) 2014 Your Name. See the file LICENSE for copying permission. */
/*
Quick description of my module...
*/

var C = {
   TEST : "HAHAHAHAAH" //Testconstante
};

function test(pin1,pin2) {
  this.pin1 = pin1;
  this.pin2 = pin2;
}

/** 'public' constants here */
test.prototype.C = {
  TEST : "HAHAHAHAAH" //Testconstante
};

/** Put most of my comments outside the functions... */
test.prototype.foo = function() {
  // you can use C.PRIVATE
  // or this.C.PUBLIC
};

/** Put most of my comments outside the functions... */
test.prototype.bar = function() {
};

/** This is 'exported' so it can be used with `require('MOD123.js').connect(pin1,pin2)` */
exports.connect = function (pin1, pin2) {
  return new test(pin1, pin2);
};
