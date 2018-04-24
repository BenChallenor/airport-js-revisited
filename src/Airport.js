'use strict';

function Airport(weather){
  this.weather = typeof weather !== 'undefined' ? weather : new Weather();
  this.hangar = [];
}

Airport.prototype.planes = function(){
  return this.hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  if(this.weather.isStormy()) {
    throw new Error('cannot land due to storm');
  }
  this.hangar.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane) {
  if(this.weather.isStormy()) {
    throw new Error('cannot takeoff due to storm');
  }
  this.hangar.pop;
};
