import Date from './../src/date.js';

describe('Date', function() {

  it('the constructor, to succesfully create a new instance of a date', function() {
    var newDate = new Date(25, "Earth", "male");
    expect(newDate.age).toEqual(25);
    expect(newDate.planet).toEqual("Earth");
    expect(newDate.gender).toEqual("male");
  });

  it('calculates correct age when user enters a planet', function() {
    var newDate1 = new Date(25, "Mercury", "male");
    expect(newDate1.ageCalc()).toEqual(104.17);
    // expect(newDate.planet).toEqual("Earth");
    // expect(newDate.gender).toEqual("male");
  });
});