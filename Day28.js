// Math.cbrt() method is used to find the cube rooth of a number

console.log(Math.cbrt(Math.PI));
console.log(Math.cbrt(Math.E));
console.log(Math.cbrt(Infinity));



/**************************ceil,js*************************/

// Math.ceil() method is used to attain the higher value of the number, if it has some significant decimal number.

console.log(Math.ceil(5.978)); // Output is 6

console.log(Math.ceil(1.002)); // Output is 2

console.log(Math.ceil(0.002)); // Output is 1

console.log(Math.ceil(1.00)); // Output is 1 because .00 are not significant figures

console.log(Math.ceil(-9.876)); // Output is -9


/**********************floor*********************/

// Math.floor() method is just opposite to the Math.ceil() method, means it attain the lower value

console.log(Math.floor(9.999)); // Output is 9

console.log(Math.floor(5.000000009)); // Output is 5

console.log(Math.floor(0.000000009)); // Output is 0

console.log(Math.floor(-0.000000009)); // Output is -1