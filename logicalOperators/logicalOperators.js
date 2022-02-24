/*
There are three Logical operators in JavaScript
_____________________________________________________________________________
|Syntax|Operation|       Example        |             Details               |
=============================================================================
| "||" |    Or   |a=4,b=5; if(a<b||b<a) | If one or both statement is true  |
|      |         |                      | then this condition will true.    |
=============================================================================
| "&&" |   And   |a=4,b=5; if(a<b&&b<=a)| If only both statement is true    |
|      |         |                      | then this condition will true.    |
=============================================================================
|      |         |                      | If condition true then it'll      |
|  "!" |   Not   |  a=4,b=5; if!(a<b)   | return false if condition is      |
|      |         |                      | false it will return true         |
=============================================================================

*/
//Logical Or ("||")
var a = 4;
var b = 5;

if (a < b || b < a) {
    console.log("Between a<b or b<a one is correct");
}

//Logical And ("&&")

var a = 5;
var b = 6;
var c = 11;

if (a < b && (b + a) === c) {
    console.log("Between a<b and (b+a)===c boths are correct");
}

//Logical Not ("!")

var a = true;

if (!(a) == false) {
    console.log((!(a) == false));
}