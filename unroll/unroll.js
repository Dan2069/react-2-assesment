function unroll(squareArray) {

    // console.log(squareArray);
    // Needs to start at R1:C1 all the way RIGHT to R1:C4     i (rows) stays the same
    // Then R1:C4 all the way DOWN to R4: C4        j (column) stays the same
    // Then R4:C4 all the way LEFT to R4: C1    i(rows) stays the same
    // Then R4:C1 all the way UP UNTIL R2:C1    j(column) stays the same
    // Then R2:C1 all the way RIGHT UNTIL R2:C3   i (rows) stays the same
    // Then R2:C3 all the way DOWN UNTIL R3:C3  j(column) stays the same
    // Then R3:C3 all the way LEFT UNTIL R3:C2  i (rows) stays the same
    // FINISHED

    // Each Array within the Square Array can be represented as ROWS
    // Ex. Row 1 = [1,2,3,4] Row 2 = [5,6,7,8] Row 3 = [9,10,11,12] Row 4 = [13,14,15,16]
    
    // Each index of the Rows can be represented as the COLUMNS
    // Ex. Row 1 = [Column 1, Column 2, Column 3, Column 4]
if(squareArray.length === 0) return;

// Top:     Returns the first row of the Array which is the first Element of the squareArray. The shift returns the first element
console.log(...squareArray.shift());

// Right:   Returns the last element of each row in squareArray. The pop returns the last element
console.log(...squareArray.map(last => last.pop()));

// Bottom:  Returns the bottom part of the square by using Pop. Then reversed the order to list from right to left.
console.log(...squareArray.pop().reverse());

// Left: Returns the Left Part of the square by using .map and .shift and then reversing it to order from down to up.
console.log(...squareArray.map(first => first.shift()).reverse());


unroll(squareArray)

}

const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ]
  
  const square2 = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
]


// console.log(unroll(square));
console.log(unroll(square2));
module.exports = unroll;
