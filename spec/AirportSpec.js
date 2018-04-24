'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });

  it('initializes with no planes', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('clears a plane for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('clears a plane for takeoff', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('checks if it is stormy', function(){
    expect(airport.isStormy()).toBeFalsy();
  });

  describe('Stormy conditions', function(){
    it('plane cannot take off', function(){
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function() {airport.clearForTakeoff()}).toThrowError('cannot take off due to storm');
    });
  });

});
