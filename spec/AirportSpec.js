'use strict';

describe('Airport', function(){
  var airport;

  beforeEach(function(){
    airport = new Airport();
  });

  it('initializes with no planes', function(){
    expect(airport.planes).toEqual([]);
  });

});
