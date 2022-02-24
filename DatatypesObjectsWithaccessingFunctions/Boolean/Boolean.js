/*
Boolean is a datatypes where it is can carry value "true" or "false"
there is some rules in Boolean where it will return "false" by default

1.Everthing without "Real" it will return false.
2. If the condition is not matched or not vaild it will return false;
3. If the number is 0/-0/NaN(Not a Number)/null/undefiend/[""](empty string) and if the value is false it will returns false
4. If we only use empty constructor "Boolean()" it will returns 
we deaclear an boolean by using two methods

1. by initialize value "true" or "false".
syntax:

var variable =true;
var variable = false;
var variable = (10>2)// it will returns true
var variable = (10<8)// it will returns false

2. by using constructor "Boolean()"

var avariable = Boolean()// it will returns false
var avariable = Boolean(10>2)// it will returns true
var avariable = Boolean(10<8)// it will returns false
var avariable = Boolean (null)// fasle
var avariable = Boolean (10/"h")// fasle cause its NaN or not an number
var avariable = Boolean ("")// fasle
var avariable = Boolean (0)// fasle
var avariable = Boolean (-0)// fasle
var avariable = Boolean (undefined)// fasle


So, We can use it as a function also for trigger an conditional
*/
var variable = true;
console.log(variable);
var variable = false;
console.log(variable);
var variable = (10 > 2);
console.log(variable); // it will returns true
var variable = (10 < 8);
console.log(variable); // it will returns false

var avariable = Boolean()
console.log('This is empty constructor "Boolean()": ' + avariable); // it will returns false
var avariable = Boolean(10 > 2)
console.log('This is a condition(10>2): ' + avariable); // it will returns true
var avariable = Boolean(10 < 8)
console.log('This is a condition(10<8): ' + avariable); // it will returns false
var avariable = Boolean(null)
console.log('This is null : ' + avariable); // fasle
var avariable = Boolean(10 / "h")
console.log('This is a NaN return condition (10/"h"): ' + avariable); // fasle cause its NaN or not an number
var avariable = Boolean("")
console.log('This is empty string |""| : ' + avariable); // fasle
var avariable = Boolean(0)
console.log('This is 0 : ' + avariable); // fasle
var avariable = Boolean(-0)
console.log('This is -0 : ' + avariable); // fasle
var avariable = Boolean(undefined)
console.log('This is undefiend : ' + avariable); // fasle