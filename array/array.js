/*
array is a collection of data;
Array in js can be decleared by 2 method; but in js array is a type of object;

the two method is:

1.Array letarel "[]";
{
    var a = []; decleration
        Or
    var a = [30]; we can't be define array size inside the brackets;


    a[0]='value1'; array indexes start from [0]
    a[1]='value2';
    a[2]='value3';
    a[3]='value4';
    a[23]='value23'; we can choose any index at any time in js; but its not a good practice

}
    0r
{
    var a = ["value1","value2","value3","value4"]; both methods are give you same result;
}

2. Array constructor "Array()", in js array is already defiend as an super class object so we can assign it as an constructor;

{
    var a= new Array(); by using new keyword and Array();
        or
    var a= new Array(25); // we define the length here 
    a[0]='value1'; array indexes start from [0]
    a[1]='value2';
    a[2]='value3';
    a[3]='value4';
    a[23]='value23'; 
}
        Or
{
    var a= new Array("value1","value2","value3","value4");
}

Accessing array:

var a=[];
a[0] = 20;
a[1] = 30;

a[2]=a[0]+a[1];

console.log(a[2]);
*/

// example

// Array litarel;

var a = [];

a[0] = 'value1';
a[1] = 'value2';
a[2] = 'value3';
a[3] = 'value4';
a[23] = 'value23';

console.log(a); // will show 19 empty 

//Array constructor

var b = new Array();

b[0] = 'value1';
b[1] = 'value2';
b[2] = 'value3';
b[3] = 'value4';
b[23] = 'value23';

console.log(b);

// accessing Array value

var c = [];

c[0] = 20;
c[1] = 30;

c[2] = c[0] + c[1];

console.log(c[2]);

// modyfing array elements

console.log("Before modify " + c[0]);

c[0] = 30;
console.log("After modify " + c[0]);

//removing an array by using "delete" keyword

delete a[23];

console.log(a) // it will remove the data from the array but the index will remain

//array "length" it will return the size of array 

console.log(c.length);

//accessing array using "for" loop iteratiioin value

var d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'The end'] // if want access lots of value from an we can use loop 

var i = 0;

for (i; i <= 10; i++) {
    console.log('Index no : ' + d[i]); // "i" will control the iteration and represent index number the inside "d[i]";
    //here in this code log into console will d value till 10 cause we give the condition  till 10
}

//we can use length properties to control the iteration condition for access full array in short hand

for (i = 0; i < d.length; i++) {
    console.log('with length property Index no : ' + d[i]); // "i" will control the iteration and represent index number the inside "d[i]";
}

/*we can use two bulit in loop for array to access 

1."forEach" loop

syntax:
array.forEach(element => {
    
});

2. "forOf" loop

syntax:
for (const iterator of object) {
};

*/

d.forEach(i => {
    console.log('This is ForEach loop and value of this index : ' + i); // here i represent the vslue of each element 
});

//forOf

for (var j of d) {
    console.log('This is ForOf loop and value of this index : ' + j);
}

// we can take input value into array like length 

//// let siz = prompt('input the size of array');

let arr = [] // or "let arr =new Array(siz);" defining both is correct

//taking input as value

// for (let i = 0; i < siz; i++) {
// arr[i] = prompt(`Input youre value no ${(i+1)}`);
// }

function printArr(a) {
    a.forEach(i => {
        console.log(i);
    })
}

printArr(arr);

//multi-dimensional array: in JS there in no multi dimentional theorey but we can archive it by  declearing another array as element inside an array

//declearing multi-dimenssional array

var arrArr = [
    [1, 2, 3],
    ['A', 'B', 'C'],
    ["i", "ii", "iii"]
];

for (let i = 0; i < arrArr.length; i++) {
    console.log('This is i =' + (i + 1));
    for (let j = 0; j < arrArr[i].length; j++) {
        console.log(arrArr[i][j]);

    }

}
console.log(arrArr);

var sizee = 10;

function arr2D(j, i) {
    var arr = new Array();
    for (let i = 0; i < j; i++) {
        arr[i] = [];
    }
    return arr;
}

function arr3D(j, t) {
    var arr = new Array();
    for (let i = 0; i < j; i++) {
        arr[i] = [];
        for (let k = 0; k < t; k++) {
            arr[i][k] = [];
        }
    }
    // arr.join(",")
    return arr;
}

var arrArr2 = arr2D(sizee);
console.log(arrArr2)

for (let i = 0; i < arrArr2.length; i++) {
    document.write('Mutiplication of ' + (i + 1) + '<br>');
    for (let j = 0; j < sizee; j++) {
        arrArr2[i][j] = (i + 1) * (j + 1);
        document.write(`${i+1} X ${j+1} = ${arrArr2[i][j]}<br>`);
    }
    document.write('<br>')

}
console.log(arrArr2);




//"join()" method used for change the sperator in an anrray default separator is Comma (",") its a return type function

var sepRep = ["Zakir", "Rani", "Riad", "Rahat", "Fahad", "Rafiq", "<br>"];
document.write(sepRep);
var chnge = sepRep.join("/");
document.write(chnge);
document.write(typeof(chnge));

//"concat()" method used with dot operator with an array to add or concat value or array with a value or an array its a return type function
var ex = ["The ", "Brown Quick", "Fox ", "Jump Over ", "The Lazy Dog"]
var e = ex.concat("So Fuck Of");
console.log(e);
// or can concat an full array
var f = d.concat(e);
console.log(f)

//"reverse()" method reverse the value of a string or an array its not a return type function it change the actual value of the array
e.reverse();
console.log(e);

//"slice()" method for extract a part of an array ;
// syntax : 
// arrayname.slice(start_index, end_index);

//var slic = sepRep.slice(undefined, sepRep.length); it will return the full array
var slic = sepRep.slice(1, -1); //it can take "-" negative value when the value is -1 it will be the position (array.length - 1) 
console.log(slic);
sepRep.slice(1, -1);
console.log(sepRep); // slice() is return type method so it dont change main array or string data

//"toString()" it return a full array as a string

var res = sepRep.toString();
console.log(res);

//"Array.isArray(value)" it return boolean if the given value or an array variable is an array;

var result = Array.isArray(sepRep);
var result1 = Array.isArray(res);

console.log(result); //true;
console.log(result1); //flase;

/*
"splice(start,deletecount,replace data1...)" its not a return type method it change the actual value of Array

"array_name.splice(start,deletecount,replace data1...)"
1."start" starting point  where to start delete or replace the data;
2. "delete count"  how many have to delete from the start point;
3. "replace-data" means what will be deleted to replace those value or adding new data from tahe "start" point
*/

var ex = ["The ", "Brown Quick", "Fox ", "Jump Over ", "The Lazy Dog"];
ex.splice(1, 1, " Quick Brown ");
console.log(ex);

/*"indexOf()" return the index number if  its available in array if its not available in array it will return -1;
Array.indexOf(searchElement, fromIndex)
*/

var result = ex.indexOf("The Lazy Dog", undefined);
console.log(result);

/*
"fill()" will fill an array with an static value from given strating index to given end point it change the 

array.fill(target, start_index_no, end_index_no);
*/
var fillArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(fillArray);

fillArray.fill("fuck", 0, 3);
console.log(fillArray);

/*
"unshift(value)" add the new values at the biginning return the length of new array;
syntax:

var arl=array_name.unshift("value1","value2"...."valueN");
*/
var uArr = ["A", "B", "C", "D"]
console.log(uArr); //array before updated

var len = uArr.unshift("value1", "value2");

console.log(len); // it will be the new array length
console.log(uArr); //array updated

/*
"shift()" it remove the first elements of an array and returns it;

syntax: 
var arl = uArr.shift();// here it remove the first element only and returns that element

*/
var dilit = uArr.shift();

console.log(dilit); // it will be the removed value
console.log(uArr); //array that updated

/*
"push()" inserting from the end of array and returns new array length
syntax:

array_name.push(value1,value2,value3....valueN)

*/
var len = uArr.push("push1", "push2", "push3")
console.log(len);
console.log(uArr);

/*
"pop()" method remove element from the end of array
syntax:

var arl =array_name.pop();//and returns removed one
*/
var dilit = uArr.pop(); //and returns it


console.log(dilit); // it will be the removed value
console.log(uArr); //array that updated