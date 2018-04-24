'use strict';

function Airport() {
  this.hanger = [];
};

Airport.prototype.planes = function() {
  return this.hanger;
};

Airport.prototype.clearForLanding = function(plane) {
  this.hanger.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane) {
  if(this.isStormy()) {
    throw new Error('cannot takeoff due to storm');
  }
  this.hanger.pop();
};

Airport.prototype.isStormy = function() {
  return false;
};
