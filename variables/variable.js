/*There are 3 types of variable JavaScript
1. var  (global variable)
2. let  (block'{}' type variable)
3. const (constant)

There are some ruels to declearing an variable name
Wrong ways:
        1. first name(variable name cannot contain any space)
        2. 420name(it's cannot start with number)
        3. (its cannot be a function name or JavaScript keyword)
*/

/*"var" types variable charactersticts
1. Global variable.
2. Accessable from anywhere in code.
3. Reuse able(Can declear same variable it as much we want).
4. Multiple time vlue assignable but last value will stay inside the variable. 
5. syntax:
  var variable_name = value;
*/

var variable = "Hello World"; //initialization --> Declearing and value assigning at same time
document.write(variable);

variable = 420; //re assining value
document.write('<br>'); //this will print a new line in html
document.write(variable);

var variable = 23; // again declearing same variable
document.write('<br>');
document.write(variable);



/*"let" types variable charactersticts
1. Block type variable.
2. Accessable from only in same block in code.
3. It's not reuse able.(So, we can't declear again)
4. Multiple time vlue assignable but last value will stay inside the variable. 
5. syntax:
   let variable_name = value;
*/

let letVariable = "Hi This is let variable from JavaScript";
document.write('<br>');
document.write(letVariable);

//let letVariable = 570;--> wrong way cause let types variables not reuseable

letVariable = 570; // re assigning value
document.write('<br>');
document.write(letVariable);

{
    let letVariable = 70; //we can declear it again here cause its in another block '{}' but it wont effect other block.
    document.write('<br>');
    document.write(letVariable);
}

/*"const"(constant) types variable charactersticts
1. Block type variable.
2. Call able from any where in code but if we want same name variable in another block we can do it.
3. It's not reuse able.(So, we can't declear again)
4. Only once value assignable. 
5. syntax:
   const variable_name = value;
*/

const pi = 3.1416;
document.write('<br>');
document.write(pi);

// const pi=420;--> wrong way cause const types variables not reuseable
//pi=31416--> only once assignable
{
    const pi = 420; //we can declear it again here cause its in another block '{}' but it wont effect other block.
    document.write('<br>');
    document.write(pi);
}