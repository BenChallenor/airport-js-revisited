'use strict';

function Airport(){
  this.hanger = [];
};

Airport.prototype.planes = function(){
  return this.hanger;
};

Airport.prototype.clearForLanding = function(plane){
  this.hanger.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane){
  this.hanger.pop();
};
