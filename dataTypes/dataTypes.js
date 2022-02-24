/*
There are some data types in js
those are
___________________________________________________________
|   Declear   |                            |     Data     |
|   Variable  =      Value                 |    Types     |
===========================================================
| var string = "Hell oh word"              |  String      |
===========================================================
| var number = 420                         |  Number      |
===========================================================
| var boolean = true                       |  Boolean     |
===========================================================
| var array = new Array['html','css','js'] | Object(array)|
===========================================================
| var object = {                           |              |
|    name:"Rahat",                         |  Object      |
|    age:23                                |              |
| }                                        |              |
===========================================================
| var Null = null                          |   Null       |
===========================================================
| var undefined = undefined                |  Undefined   |
===========================================================
*/

//String data
var string = "Hell oh word";
document.write(string);
document.write('---------Data type: ' + typeof(string)); //"typeof" is a function to know type of data in the variable 
document.write('<br>');

//Number data
var number = 420;
document.write(number);
document.write('---------Data type: ' + typeof(number));
document.write('<br>');

//Boolean data
var boolean = true;
document.write(boolean);
document.write('---------Data type: ' + typeof(boolean));
document.write('<br>');

//Object(array) data
var array = new Array('html', 'css', 'js');
document.write(array[0]);
document.write('<br>');
document.write(array[1]);
document.write('<br>');
document.write(array[2]);
document.write('---------Data type: ' + typeof(array));
document.write('<br>');

//Object data
var object = {
    name: "Rahat",
    age: 23
}
document.write(object.name + ',');
document.write(object.age);
document.write('---------Data type: ' + typeof(object));
document.write('<br>');

//Null data
var Null = null;
document.write(Null);
document.write('---------Data type: ' + typeof(Null));
document.write('<br>');

//undifiend data
var Undefined = undefined;
document.write(Undefined);
document.write('---------Data type: ' + typeof(Undefined));
document.write('<br>');

var u; //if don't assign any value its will be undefiend
document.write(u);
document.write('---------Data type: ' + typeof(u));