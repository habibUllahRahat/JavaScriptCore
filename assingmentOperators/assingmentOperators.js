/*
There are some Assingment Operators Operators in js
those are
___________________________________________________________
|  Operator   | Example(var a, var b)|     Same as       | 
===========================================================
|    "="      |   a=2,b=3; a = b     |      a = b        |
===========================================================
|    "+="     |   a=2,b=3; a += b    |   a = a + b       |
===========================================================
|    "-="     |   a=5,b=3; a -= b    |   a = a - b       |
===========================================================
|    "*="     |   a=5,b=3; a *= b    |   a = a * b       |
===========================================================
|    "/="     |   a=10,b=2; a /= b   |   a = a / b       |
===========================================================
|    "%="     |   a=10,b=3; a %= b   |   a = a % b       |
===========================================================
|    "**="    |   a=5,b=2; a **= b   |   a = a ** b      |
===========================================================

*/

var a, b, c;

a = 2;
b = 3;
a += b;
document.write('a += b <br> a = ' + a);
document.write('<br> <br>');

a = 5;
b = 3;
a -= b;
document.write('a -= b <br> a = ' + a);
document.write('<br> <br>');

a = 5;
b = 3;
a *= b;
document.write('a *= b <br> a = ' + a);
document.write('<br> <br>');

a = 10;
b = 2;
a /= b;
document.write('a /= b <br> a = ' + a);
document.write('<br> <br>');

a = 10;
b = 3;
a %= b;
document.write('a %= b <br> a = ' + a);
document.write('<br> <br>');

a = 5;
b = 2;
a **= b;
document.write('a **= b <br> a = ' + a);
document.write('<br> <br>');