/*
String is collection of characters and also is a data type, object  and we can also use it as a value in JavaScript,
a string srounded with three types of qutetions those are
1. ""(Double Qutetion).// cann't use double qutetion between this 
2. ''(Single Qutetion).//cann't use Single qutetion between this
3. `` (Backtiks)[It normally found before 1 on a keyboard].// You can use numbers, variables & equations by ${number or variable or equation} we also can use single and double qutetion
;
there is some examples of string given below:

Basic structer of a String:

"Hello World"
'Hello world'
`Hello wrold`

using String as sn value by define inside a variable:

var variable = "Hello World";
var variable = 'Hello world';
var variable = `Hello wrold`;
var variable = new String(`Hello wrold`);//is a string object constructor

Accsessing thrugh a function:

function_name("Hello World");
function_name('Hello world');
function_name(`Hello wrold`);
function_name(variable);

Special usage of string :

"Hello 'My' World "
'Hello "My" World'
` "Hell" oh 'My' World`
var a = 10;
var b = 20;
console.log(`This is a number ${10}\n This is a Variable ${a} \n ${a+b}`);

*/

console.log("Hello World");
var variable = "Hello World";
console.log(variable);
var variable = 'Hello world';
console.log(variable);
var variable = `Hello wrold`;
console.log(variable);
var variable = new String(`Hello wrold`);
console.log(variable);


function Consolelog(params) {
    console.log(params);
}

Consolelog("Hello world");
Consolelog(variable)


var spVariable = "Hello 'My' World ";
console.log(spVariable);

var spVariable = 'Hello "My" World';
console.log(spVariable);

var spVariable = ` "Hell" oh 'My' World`;
console.log(spVariable);

var a = 10;
var b = 20;
console.log(`This is a number ${10}\n This is a Variable ${a} \n This is a sum ${a+b}`);

/*
Because string must be in-side quotes so thats JavaScript translator or decoder some time mis-understand some character like "\", quote [""], enter key input..etc so solve those problems there is a soluation those are known as "Special characters" or "Escape Characters" for accessing them you have to use Black Slash "\" those are give below.
_____________________________________
|Operator|      Operation           |
=====================================
|   \'   |      Single Quote        |
=====================================
|   \"   |      Double Quote        |
=====================================
|   \\   |      Back Slash          |
=====================================
|   \n   |      New Line            |
=====================================
|   \r   |      Carriage Return     |//its move carrage to the most left of a line 
=====================================
|   \f   |  Form Feed Or Page Break |
=====================================
|   \0   |      Null Character      |it cann't be shown but it present at last of every string
=====================================
//|   \b   |      Back-Space          |
//=====================================
//|   \v   |      Vartical Tab        |
=====================================
|   \t   |      Horizontal tab      |
=====================================
*/
console.log("Hello \"World\""); //Alternative to Double Quote between Double Quote
console.log('\'Hello\' World'); //Alternative to Single Quote between Single Quote
console.log('Hello \\ World'); // Because "\" Back Slash is a special character in JavaScript for access as character we need to use escape     
//character 
console.log("Hello \n World"); // in js for go to next line and move the crrage or blinking pip "|" we can use this \n newline other wise it 
//will show in same line'
console.log("Hello\f World"); // its have no effect 
document.write("Hello \f World");
console.log("Hello\t World");

//there are some function or methods modify String:
/*
var txt ="Hello world";
var strLength = txt.length;//it returns how many character in this string in other hand the length of a string 
*/
var txt = "Hello world";
var strLength = txt.length;
console.log(strLength);
/*
var txt ="Hello world";
var strFirstIndex = txt.indexOf("String_value", searching_start_index);//here "string value" is must given and                            
                                                                        searching_start_index is optional it return the index number where the "String value" is started
*/
var txt = "Hello world";
var strFirstIndex = txt.indexOf("o"); // will return the first "o"'s index number;
console.log(strFirstIndex);

var strFirstIndex = txt.indexOf("or"); // will return the first "or" index number;
console.log(strFirstIndex);

var strFirstIndex = txt.indexOf("w", 7); // it will return - 1 cause "w" is not present after at the position 7
console.log(strFirstIndex);

var strFirstIndex = txt.indexOf("w", -7); // it will return  6 cause "w" is present from the last index at the position 7 whenever we use negative js function start to count from the end as -1;
console.log(strFirstIndex);


/*
var txt ="Hello world";
var strlastIndex = txt.lastIndexOf("String_value", searching_start_index);//here "string value" is must given 
                                                                            and searching_start_index is optional it return the index number where the "String value" is ended
*/
var txt = "Hello world";
var strLastIndex = txt.lastIndexOf("o"); // will return the Last "o"'s index number;
console.log(strLastIndex);

var strLastIndex = txt.lastIndexOf("or"); // will return from the Last "or" index number;
console.log(strLastIndex);

var strLastIndex = txt.lastIndexOf("w", 7); // it will return  6 cause "w" is present from the last index at the position 7 lastIndexOf function start to count from the end as -1;
console.log(strLastIndex);

var strLastIndex = txt.lastIndexOf("w", -7); //it will return - 1 cause "w" is not present after at the position 7 from the last
console.log(strLastIndex);


/*
var txt ="Hello world";
var strSearch = txt.search("string" or regular_exp);//like indexOf search for a certain given "string" wherever 
                                                      it found it returns the index position of first index of that "string" it can also use regular expression for search a value.
*/
var txt = "Hello world";
var strSearch = txt.search("world"); //it return the number first index of matched this string
console.log(strSearch);
var strSearch = txt.search(/World/i); //it return the number first index of this matched rgex(reguler expression);
console.log(strSearch);


/*
var txt ="Hello world";
var strSubStr = txt.substr(start_position, character_count);// its take tke starting point and return the number of 
                                                            given to the character count section and can take negative value and negative value start count from the end of string;
*/
var txt = "Hello world";
var strSubStr = txt.substr(1, 7); // it means it starts fromd the no1 index and after that it will copy 7 chracters
console.log(strSubStr);

/*
var txt ="Hello world";
var strSlice = txt.slice(start_point, end_point); // it slice the from start_point and given point and return it to the variable.
                                                 slice can take  Negative value when it is negative it count last index as -1 and first index as -str.length
*/
var txt = "Hello world";
var strSlice = txt.slice(1, 5); //it will return an string of collection txt values index no 1 to index no 4 it wont return the last in this case it is index 5 
console.log(strSlice);
var strSlice = txt.slice(-8, -1); // slice() methode can take negative value this case it will start to count 8 character backward and start to copy untill the last index which from last 1st but it copy ebnd point  
console.log(strSlice);

//if want to copy with last character of a string we can use ".length"
var txt = "Hello world";
var strSlice = txt.slice(1, txt.length); //it will copy from the index no 1 to at the last of index+1 cause length count from the 1 and index from the 0
console.log(strSlice);


/*
var txt ="Hello world";
var strSubString = txt.substring(start_point, end_point);//substring is return the value as a 
                                                          string from the given starting popint and end point;
*/
var txt = "Hello world";
var strSubString = txt.substring(4, 7); //it will return an string of collection txt values index no 4 to index no 6 it wont return the last in this case it is index 7 
console.log(strSubString);
var strSubString = txt.substring(4, txt.length); // full string copy
console.log(strSubString);

/*
var txt ="Hello world";
var strReplace = txt.replace(subStringOrRegexp, newSubstringOrReplacer);//replace() method replace a sub string of a string by given keyword
                                                                        (sub String) or regular expression with the given replacer or new sub string.
*/
var txt = "Hello world";
var strReplace = txt.replace("Hello", "Hell Oh")
console.log(strReplace);
var strReplace = txt.replace(/world/g, "Bitchs")
console.log(strReplace);

/*
var txt ="Hello world";
var strConcat = txt.concat(item1,"go",item2,......itemn)//it will concat or add or join given value with the main string or string type 
                                                        variable.
*/
var txt = "Hello world";
var strConcat = txt.concat(" go")
console.log(strConcat);

// we can do it with concat operator
var strConcat = txt + " You Suck";
console.log(strConcat);



/*
var txt ="Hello world";
var strTrim = txt.trim()//This method will trim or delete white spaces before and after a string there is a trimEnd() method which do the     
                          same-thing just for after a string
*/
var txt = "    Hello world     ";
var strTrim = txt;
console.log(strTrim);
var strTrim = txt.trim()
console.log(strTrim);
var txt = "'    Hello world     ";
console.log(strTrim);
var strTrim = txt.trimEnd();
console.log(strTrim);

/*
var txt ="Hello world";
var strPadStart=txt.padStart(txt.length+counter, filler);//this method fill the string with a value or string at the starting of the string it will add   
                                              repeatedly as much counter given like if counter is 5 it will add filler value for five times there is a function same as it padEnd(counter, filler).
*/
var txt = "Hello world";
var strPadStart = txt.padStart(txt.length + 100, "fuck ");
console.log(strPadStart);

var strPadStart = txt.padEnd(txt.length + 100, " fuck");
console.log(strPadStart);
/*
var txt ="Hello world";                                              
var strUpperCase = txt.toUpperCase();// it will return full string values in uppercase;
*/
var txt = "Hello world";
var strUpperCase = txt.toUpperCase();
console.log(strUpperCase);

/*
var txt ="Hello world";
var strLowerCase = txt.toLowerCase();// it will return full string values in Lowercase;
*/
var txt = "HELLO WORLD";
var strLowerCase = txt.toLowerCase();
console.log(strLowerCase);

/*
var txt ="Hello world";
var strCharAt =txt.charAt(index_no);// it will return a character at which at the given index no;
*/
var txt = "Hello world";
var strCharAt = txt.charAt(6);
console.log(strCharAt);

/*
var txt ="Hello world";
var strCharCodeAt =txt.charCodeAt(index_no);// it will return a character's ANCI/UTF-16 code (an integer between 0 to 65535) 
                                              which at the given index no;
*/
var txt = "Hello world";
var strCharCodeAt = txt.charCodeAt(1);
console.log(strCharCodeAt);

/*
var txt ="Hello world";
var strSplit = txt.split(splitter, limit);// it returns an array whereever it found a splitter it make that as an index value;
*/
var txt = "Hello world";
var strSplit = txt.split("", 5);
console.log(strSplit);

// concat operator "+"

console.log("Hello" + " " + "World!!") // it will concat or add all from lef to write