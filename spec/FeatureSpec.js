'use strict';

describe('Feature test', function() {
  var airport;
  var plane;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('plane can land at an airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('plane can takeoff from an airport', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

  it('plane can not take off when the weather is stormy', function(){
    plane.land(airport);
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function() {plane.takeoff()}).toThrowError('cannot takeoff due to storm');
    expect(airport.planes()).toContain(plane);
  });

  it('plane can not land when the weather is stormy', function(){
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function() {plane.land()}).toThrowError('cannot land due to storm');
    expect(airport.planes()).not.toContain(plane);
  });

});
