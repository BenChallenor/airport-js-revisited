'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
  });

  it('initializes with no planes', function() {
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal weather', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(false);
    });

    it('clears a plane for landing', function() {
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it('clears a plane for takeoff', function() {
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });


  describe('Stormy conditions', function() {

    beforeEach(function() {
      weather.isStormy.and.returnValue(true);
    });

    it('plane cannot takeoff', function() {
      expect(function() {
        airport.clearForTakeoff(plane);
      }).toThrowError('cannot takeoff due to storm');
    });

    it('plane cannot land', function() {
      expect(function() {
        airport.clearForLanding(plane);
      }).toThrowError('cannot land due to storm');
    });
  });

});
