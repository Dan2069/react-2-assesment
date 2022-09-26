const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("Unravels a 5x5", function (){
    const square2 = [
      [1,2,3,4,5],
      [6,7,8,9,10],
      [11,12,13,14,15],
      [16,17,18,19,20],
      [21,22,23,24,25]
    ]

    square2_solved = [
      [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,28,17,12,13]
    ]
    expect(square2).toBe(square2_solved);
  });

});
