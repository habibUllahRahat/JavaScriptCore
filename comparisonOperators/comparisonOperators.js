/*
There are some Comparison Operators in js
those are
____________________________________________________________________________________________________________________________________
|  Operator |          Oparation(name)           |                              Example(var a, var b)                              |
====================================================================================================================================
|    ">"    |  Greater than                      | a=2,b=3,c=3; a>b = false / b>a = true / b>c=false                               |
====================================================================================================================================
|    "<"    |  Less than                         | a=3,b=5,c=5; b<a = false / a<b = true / c<a = false                             |
====================================================================================================================================
|    ">="   |  Greater than or equal to          | a=4,b=10,c=10; a>=b = false / b>=a = true/ b>=c=true                            |
====================================================================================================================================
|    "<="   |  Less than or equal to             | a=4,b=10,c=10; b<=a = false / a<=b = true/ b<=c=true                            |
====================================================================================================================================
|    "=="   |  Equal to (value only)             | a=10,b="10",c=10,d=23,e=3; a==e =false/ a==d =false/a==b =true/ a==c =true      |
====================================================================================================================================
|    "==="  |  Equal value and equal type        | a=10,b="10",c=10,d=23,e=3; a===e =false/ a===d =false/a===b =false/a===c =true  |
====================================================================================================================================
|    "!="   |  Not equal to (value only)         | a=10,b="10",c=10,d=23,e=3; a!=b =false/ a!=c =false/a!=d =true/ a!=e =true      |
====================================================================================================================================
|    "!=="  | Not equal value and not equal type | a=10,b="10",c=10,d='A',e=12; a!==e =true/ a!==d =true/a!==b =false/a!==c =true  |
====================================================================================================================================

*/
var a, b, c;

//Greater than operator
a = 2;
b = 3;
c = 3;
if (a > b) {
    console.log('(a > b) is true');
} else if (b > a) {
    console.log('(b > a) is true');
} else if (b > c) {
    console.log('(b > c) is true');
} else {
    console.warn('none is true');
}

//Less than operator
a = 3;
b = 5;
c = 5;
if (b < a) {
    console.log('(b < a) is true');
} else if (a < b) {
    console.log('(a < b) is true');
} else if (b < c) {
    console.log('(b < c) is true');
} else {
    console.warn('none is true');
}

//Greater than or equal to operator
a = 5;
b = 10;
c = 10;
if (b >= a) {
    console.log('(b >= a) is true');
} else if (a >= b) {
    console.log('(a >= b) is true');
} else {
    console.warn('none is true');
}

if (c >= b) {
    console.log('(c >= b) is true');
} else if (b >= c) {
    console.log('(b >= c) is true');
} else {
    console.warn('none is true');
}

//Less than or equal to operator
a = 5;
b = 10;
c = 10;
if (b <= a) {
    console.log('(b <= a) is true');
} else if (a <= b) {
    console.log('(a <= b) is true');
} else {
    console.warn('none is true');
}

if (c <= b) {
    console.log('(c <= b) is true');
} else if (b <= c) {
    console.log('(b <= c) is true');
} else {
    console.warn('none is true');
}

//Equal to operator
a = 10;
b = "10";
c = 10;
d = 23;
e = 3;

if (a == b) {
    console.log('(a == b) is true');
} else {
    console.warn('(a == b) is False..!!');
}

if (a == c) {
    console.log('(a == c) is true');
} else {
    console.warn('(a == c) is False..!!');
}

if (a == d) {
    console.log('(a == d) is true');
} else {
    console.warn('(a == d) is False..!!');
}

if (a == e) {
    console.log('(a == e) is true');
} else {
    console.warn('(a == e) is False..!!');
}

//Equal value and equal type operator
a = 10;
b = "10";
c = 10;
d = 23;
e = 3;

if (a === b) {
    console.log('(a === b) is true');
} else {
    console.warn('(a === b) is False..!!');
}

if (a == c) {
    console.log('(a === c) is true');
} else {
    console.warn('(a === c) is False..!!');
}

if (a == d) {
    console.log('(a === d) is true');
} else {
    console.warn('(a === d) is False..!!');
}

if (a == e) {
    console.log('(a === e) is true');
} else {
    console.warn('(a === e) is False..!!');
}


//Not equal to operator
a = 10;
b = "10";
c = 10;
d = 23;
e = 3;

if (a != b) {
    console.log('(a != b) is true');
} else {
    console.warn('(a != b) is False..!!');
}

if (a != c) {
    console.log('(a != c) is true');
} else {
    console.warn('(a != c) is False..!!');
}

if (a != d) {
    console.log('(a != d) is true');
} else {
    console.warn('(a != d) is False..!!');
}

if (a != e) {
    console.log('(a != e) is true');
} else {
    console.warn('(a != e) is False..!!');
}

//Not equal value and not equal type operator
a = 10;
b = "10";
c = 10;
d = 'A';
e = 12;

if (a !== b) {
    console.log('(a !== b) is true');
} else {
    console.warn('(a !== b) is False..!!');
}

if (a !== c) {
    console.log('(a !== c) is true');
} else {
    console.warn('(a !== c) is False..!!');
}

if (a !== d) {
    console.log('(a !== d) is true');
} else {
    console.warn('(a !== d) is False..!!');
}

if (a !== e) {
    console.log('(a !== e) is true');
} else {
    console.warn('(a !== e) is False..!!');
}