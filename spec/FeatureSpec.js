'use strict';

describe('Feature test', function() {
  var airport;
  var plane;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  describe('When weather is normal', function() {

    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0);
    });

    it('plane can land at an airport', function() {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('plane can takeoff from an airport', function() {
      plane.land(airport);
      plane.takeoff();
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe('When weather is stormy', function() {
    it('plane can not take off when the weather is stormy', function() {
      plane.land(airport);
      spyOn(Math, 'random').and.returnValue(0);
      expect(function() {plane.takeoff()}).toThrowError('cannot takeoff due to storm');
      expect(airport.planes()).toContain(plane);
    });

    it('plane can not land when the weather is stormy', function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(function() {plane.land(airport)}).toThrowError('cannot land due to storm');
      expect(airport.planes()).not.toContain(plane);
    });
  });
});
