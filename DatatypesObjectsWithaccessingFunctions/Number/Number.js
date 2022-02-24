/*
 Number is data type and and a value in JS and there is a object also in JS as for Number.
 and there is some  methods()or function for access number.
  
number is js:
  23 //integer
  34.23423 //float
  3e4 // scitific notation it means 3*10^4 or 30000
  NaN// Not a Number
  infinity // infinity or uncountable
  -infinity // similar to infinity but if the number negative than it will negative infinity
 
assigning number:
  using variable:
    var x =10;
    var x =10.69;
    var x =3e8;
    var x = NaN;
    var x = Infinity; or var x = 5/0; 
    var x = -Infinity; or var x = -5/0;
  using number object constructor "Number()"
    var x = new Number(20);

*/
var x = 10;
console.log(x);
var x = 10.69;
console.log(x);
var x = 3e4;
console.log(x);
var y = new Number(20);
console.log(y);
var x = NaN;
console.log(x);
var x = Infinity;
console.log(x);
var x = -Infinity;
console.log(x);
var x = 5 / 0;
console.log(x);
var x = -5 / 0;
console.log(x);

/*
Number and string:
1. In JavaScript "+" plus sign not only used for arithmetic operator but also for concat method or more specifically concat the one string with another one
  So if an execution block frist start with an expression like
    (10+20+"50"); // it will return 3050
  it perform the expression  cause the JS traslator will guess it is a expression of number then when it find an string it will concat or add the "50" in this case which is a string. Cause in JAVASCRIPT a line of code executed from left to right

  and if we do the reverse:
  ("50"+10+20)// it will return 501020;
  in this case it found first a string at the left most so it will guess this is a string and it will perform concat or string-add method for others

2. if we use an string which is not a numeric value and we perform arithmetic operation it will return NaN

*/
console.log(10 + 20 + "50");
console.log("50" + 10 + 20);
//Methods or function for number manupulation
/*
var a =40
var b= 5/0;
var x = isFinite(variable or number)	//Checks is that a value is a finite number and it will return boolean value if it is finite number it will return "true" and if it is not finite then it will return "false" 
*/
var a = 40;
var x = isFinite(a);
console.log(x);
var b = 5 / 0;
var x = isFinite(b);
console.log(x);

/*
var a =23
var b =2.65
var x = Number.isInteger(variable or value)//	Checks the value is it an integer or not so if it is an integer it will returns "true"and if it is not then it will return "false"
*/
var a = 23;
var x = Number.isInteger(a);
console.log(x);
var b = 2.65;
var x = Number.isInteger(b);
console.log(x);
//

/*
var a = "10"
var b =20;
var c=NaN;
var a = "you"
var x =isNaN(variable or number)// Checks is the value is NaN if it is itwill return "true" if it isn't it will return "false"
*/
var a = "10";
var x = isNaN(a);
console.log(x);
var b = 20;
var x = isNaN(b); //false
console.log(x);
var c = NaN;
var x = isNaN(c); //true
console.log(x);
var d = "you";
var x = isNaN(d); //true
console.log(x);
//

/*
var a =2 ** 53;
var b =(2 ** 53) - 1;
var c = 22.34;
var x =Number.isSafeInteger()//an safe integer range is (2^53 - 1) to -(2^53 - 1) and its a double precision integer if the variable or value and number and a integer which is between the range it this method will return a value "true" and if is not it will return "false" 
*/
var a = 2 ** 53;
var x = Number.isSafeInteger(a);
console.log(x); //false
var b = (2 ** 53) - 1;
var x = Number.isSafeInteger(b);
console.log(x); //true
var c = 22.34;
var x = Number.isSafeInteger(c);
console.log(x); //false

/*
var a =23423585848957;
var b =34.8549683408945289
var x = a.toExponential(precition_point)//Converts a number into an exponential notation and and precition point define how many number will show after the fractional point

*/
var a = 23423585848957;
var x = a.toExponential(10)
console.log(x);

var b = 34.8549683408945289
var x = a.toExponential(5)
console.log(x);
//

/*
var a =
var b =
var x =a.toFixed(precition_point)//Formats a number with precition_point numbers precision of digits after the decimal point
.//

*/
var a = 69.420420;
var x = a;
console.log(x);
//

/*
var a =473874836;
var x =toLocaleString()//	It returns a number into a string, based on the locale settings
.//

*/
var a = 473874836;
var x = a.toLocaleString();
console.log(x);
//

/*
var a =1234523456;
var b =34.8348999;
var x =a.toPrecision(precition_point)//	Formats the number to precition_point length and return as string
*/
var a = 1234523456;
var x = a.toPrecision(5);
console.log(x)
var b = 34.8348999;
var x = b.toPrecision(5);
console.log(x)
    //

/*
var a =232323;
var x =a.toString()//	Converts a number into a string and return it
.//

*/
var a = 232323;
var x = a.toString();
console.log(x);
//

/*
var a ="576"
var b =12.4e12
var x =valueOf("5940")	Returns the primitive value of a number
.//

*/
var a = "4334";
var x = b.valueOf(); // it will returns string
console.log(x);
var b = 12.4e1;
var x = b.valueOf();
console.log(x);

//some extra methods

var a = 34;
var x = a.MAX_VALUE;

console.log(x); //it will show undefirndvar a = 34;
var a = 12222;
var x = a.MIN_VALUE;
console.log(x); //it will alsoshow undefirnd