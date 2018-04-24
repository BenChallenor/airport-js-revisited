'use strict';

describe('Feature test', function() {
  var airport;
  var Plane;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('plane can land at an airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

});
