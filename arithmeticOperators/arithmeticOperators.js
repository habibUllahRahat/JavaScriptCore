/*
There are some Arithmetic Operators in js
those are
___________________________________________________________
|  Operator | Oparation(name) |   Example(var a, var b)   |
===========================================================
|    "+"     |   Addition     |   a=2,b=3; a+b = 5        |
===========================================================
|    "-"     |   Subtract     |   a=5,b=3; a-b = 2        |
===========================================================
|    "/"     |   Divide       |   a=10,b=2; a/b = 5       |
===========================================================
|    "*"     | Multiplication |   a=2,b=3; a*b = 6        |
===========================================================
|    "%"     |   Modulus      |   a=10,b=3; a%b = 1       |
============================================================================================
|    "++"    |   Increment    |  a=2, a++  in this line will be 2 but in next line(a===3)   |
============================================================================================
|    "++"    |   Increment    |  a=2, ++a  in this line will be 3         |
===========================================================================
|    "--"    |   Decrement    |  a=5, a-- === 5, --a = 4 same as increment|
===========================================================================
|    "**"    | Exponentation  |a=5,b=2 a**b = 25 same as a^b|
=============================================================

*/

var a, b, c;

//Addition
a = 2;
b = 3;
c = a + b;
document.write('Addition (a + b)= ' + c);
document.write('<br>');

//Subtract
a = 5;
b = 3;
c = a - b;
document.write('Subtract (a - b)= ' + c);
document.write('<br>');

//Divide
a = 10;
b = 2;
c = a / b;
document.write('Divide (a / b)= ' + c);
document.write('<br>');

//Multiplication
a = 2;
b = 3;
c = a * b;
document.write('Multiplication (a * b)= ' + c);
document.write('<br>');

//Modulus
a = 10;
b = 3;
c = a % b;
document.write('Modulus (a % b) = ' + c);
document.write('<br>');

//Increment
a = 2;
document.write('Increment (a++) operator added at this line = ' + a++);
document.write('<br>');
document.write('Increment (a++) in after one line = ' + a);
document.write('<br>');

a = 2;
document.write('Increment (++a) = ' + ++a);
document.write('<br>');

//Decrement
a = 2;
document.write('Increment (a--) operator added at this line = ' + a--);
document.write('<br>');
document.write('Increment (a--) in after one line = ' + a);
document.write('<br>');

a = 2;
document.write('Increment (a--) = ' + --a);
document.write('<br>');

//Exponentation
a = 5;
b = 2;
c = a ** b;
document.write('Exponentation (a ** b) = ' + c);