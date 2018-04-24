'use strict';

function Airport(){
  this.hanger = [];
};

Airport.prototype.planes = function(){
  return this.hanger;
};
