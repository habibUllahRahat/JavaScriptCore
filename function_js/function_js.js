/*
    'function' is a set of code for perform a certain type task on call
declear function in JavaScript:
Declearing Rules:

1)Function name cant be with JavaScript keywords.
2)Function name cant start with number.

fuction can be assign in a variable in te end it need to add and semi colon';'. in this method we can deacleare a function without any name

sytanx:

Without parameter:
        
      function fuction_name(){
            executeable code;
      }

    calling function:
        
        function_name(); /we can call a function before function declear section or after deaclear section

With Parameters:
        
      function fuction_name(parameter_1, parameter_2,...,parameter_n){
            executeable code;
      }

    calling function:
        
      function_name(parameter_1, parameter_2,...parameter_n);/1.We can call a function before function declear section or after deaclear section
                                                             /2.If dont send an parameter into the function where it has been described more than perameter we sent other will show undefiend
                                                             /3.For ignore number two problem we can use arguments of object
*/

// Without parameter:

function nameCall() {
    document.write("<h3>Hell oh dear</h3>");
}

// calling function:

nameCall(); //we can call a function before function declear section or after deaclear section

// With Parameters:
// calling function:
var a = 100,
    b = 30,
    c = 40,
    d = 50;

sumOfTwoNumber(a, b); //1.We can call a function before function declear section or after deaclear section

function sumOfTwoNumber(value_1, value_2) {
    console.log('The sum is: ' + (value_1 + value_2));
}


//2.If dont send an parameter into the function where it has been described more than perameter we sent other will show undefiend
function print3Number(value_1, value_2, value_3) {
    // console.log('The sum is: ' + (value_1 + value_2 + value_3)); // this will return NaN(Not a Number) ex (20+undefiend=NaN)
    console.log('This is value 1: ' +
            value_1 + '\n' + 'This is value 2: ' +
            value_2 + '\n' + 'This is value 3: ' +
            value_3 + '\n') //here value_3 will show undefiend
}

print3Number(a, b); //in this case we can use default value
print3Number(a, b, c, d); // in this we can use arguments object


//3. For ignore number two problem we can use arguments of object or default value

//"arguments" object in function

function printNum_arguObj(value) {
    for (var i = 0; i < arguments.length; i++) {
        console.log(`This is value ${i+1}:` + arguments[i] + '\n')
    }
}

printNum_arguObj(a, b, c, d);

//default value parameter

function printNum_defaultValue(parameter_1, parameter_2, parameter_3 = 40) { // in parameters we have to add default from the right most to left otherwise it will show undefiened    
    console.log('This is value 1: ' +
        parameter_1 + '\n' + 'This is value 2: ' +
        parameter_2 + '\n' + 'This is value 3: ' +
        parameter_3 + '\n')
}

printNum_defaultValue(a, b);


/*
Rest Parameter ('...parameter_name') allows to represent an indefinite number of arguments as an array
and rest operator must be the last parameter in the function

rest array is real array but arguments is temp array for only for function and rest operator don't have separate name like arguments

we can apply sort, map forEach or pop directly on rest
*/


function showName(a, ...params) {
    for (let i = 0; i < params.length; i++) {
        document.write(a + params[i]);
    }
}

showName("Name: ", "Riad <br>", "Rahat <br>", "Fahad <br>", "Rafiq <br>", "Rani <br>", "Zakir <br>");

// anonyomus function

var add = function() {
    for (let i = 0; i < arguments.length; i++) {
        arguments[0] += arguments[i];
    }
    return arguments[0]
};
document.write(add(20, 30, 40, 70, '<br>')); // we can send an anonmymous function as an argument like an variable we retun it also

// arrow function or callback function

var a = () => {
    document.write("hello world <br>");
}

a(); // cant be call before define the function 

//IIFE funtion immediately invoked function expression (IIFE). it is a self calling function and it is anonymous funtion.  inside this function it doesnot meter 

(function(a = 30, b = 20) {
    document.write("<br> a = " + a + "<br> b = " + b + "<br> sum of both = " + (a + b))
})()