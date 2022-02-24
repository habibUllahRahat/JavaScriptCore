/*
Date is a special type object in JavaScript which provides a set of function to manupulate year,month,day,hours , minutes,seconds and miliseconds of clite machine.

a Date type object only one way to construct and that with constructor but we can also define a date by by sequance

var date=new Date();
var date=new Date(miliseconds);
var date=new Date("anydatestring");
var date=new Date(year, month, day, hours, minutes, seconds,miliseconds);// full sequence

*/

var date = new Date();
console.log(date);
var date = new Date(400000); //it will show the value from Thursday January 1 1970
console.log(date);
var date = new Date("2010-12-12"); //date string
console.log(date);
//var date=new Date(year, month, day, hours, minutes, seconds,miliseconds); full sequence
//if we only one perameter it will guess it as miliseconds perameter so if we want to access the full sequence we have give at least two value by folowwing sequence  

// minimum sequence
var date = new Date(2010, 1);
console.log(date);
//mximum sequence  
var date = new Date(2022, 0, 01, 00, 00, 00, 000);
console.log(date);

/* ISO time and date format
______________________________________________________________________________________
|   Decription  |               Format                   |         Example          
======================================================================================
| Year & Month  |              YYYY-MM                   |          2021-04          | 
======================================================================================
|  Only Year    |               YYYY                     |           2021            |
======================================================================================
|  Date & Time  |       YYYY-MM-DDTHH:MM:SSZ             |   2021-04-25T05:30:69Z    |
| time zone UTC |Here T is TIME separator and Z is ZONE  |                           |
======================================================================================
|  Date & Time  |    YYYY-MM-DDTHH:MM:SSZ+HH:MM          | 2021-04-25T05:30:69+06:00 |
|   time zone   |    YYYY-MM-DDTHH:MM:SSZ+HH:MM          | 2021-04-25T05:30:69-06:30 |
|               | to modify time zone we have to add or  |                           |
|               |subtract hour and minute relative to UTC|                           |
======================================================================================

*/
/*
this a function for fromating hours with am and pm
*/
function frmtHr(b) {
    var format12 = b % 12 || 12;
    var amOrPm = (b < 12) ? "am" : "pm";
    return format12 + amOrPm;
}


//Date() object Methods
//Get methods

/*
a = new Date();
b=a.getDate();this will return 1 to 31 acording to the month for defined if it is not defied then it will return date from the present date from the client machine
*/
var a = new Date();
var b = a.getDate();
console.log(b);

/*
a = new Date();
b=a.getMonth();// it willl return month 0-11 0=January to 11= December
*/
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
a = new Date();
b = a.getMonth();
console.log('Here Month return : ' + b + '\nBut actual months is : ' + months[b]);

/*
a = new Date();
b = a.getFullYear();// It will return the Year of client machine
*/
a = new Date();
b = a.getFullYear();
console.log(b);

/*
a = new Date();
b=a.getDay();//it will return day between 0-6 Here, 0= Sunday to 6=Monday;
*/
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ];
a = new Date();
b = a.getDay();
console.log('Here days return : ' + b + '\nBut actual day is : ' + days[b]);

/*
a = new Date();
b=a.getHours();// it will return hours between 0-23;
*/
a = new Date();
b = a.getHours();
c = frmtHr(b);
console.log('Here Hours return : ' + b + '\nBut actual Hour is : ' + c);

/*
a = new Date();
b=a.getMinutes();// it will return real time minutes from the client machine;
*/
a = new Date();
b = a.getMinutes();
console.log(b);

/*
a = new Date();
b=a.getSeconds();// it will return real time seconds from the client machine;
*/
a = new Date();
b = a.getSeconds();
console.log(b);

/*
a = new Date();
b=a.getMilliseconds();
*/
a = new Date();
b = a.getMilliseconds();
console.log(b);

/*
a = new Date();
b=a.getTime();// it will return a time from 1 January 1970 to at this present moment; also known as timestamp;
*/
a = new Date();
b = a.getTime();
console.log(b);

/*
a = new Date();
b=a.getTimezoneOffset();// this will return a value which is the diffrence betweeen UTC(Universal Time Coordinated) and client machine time in minuets 

*/
a = new Date();
b = a.getTimezoneOffset();
console.log(b);

//================================================================================================================================================

//There are some function or Methods for manipulate UTC(Universal Time Coordinate)
/*
a = new Date();
b=a.getFullYear();//return you the actual or locale year only;

*/
a = new Date();
b = a.getUTCFullYear();
c = a.getFullYear();
console.log('Here UTC Year return : ' + b + "\nAnd Locale or client machine`s Year : " + c);
/*
a = new Date();
b=a.getUTCDate();// it will return date of the month acording to the UTC
*/
a = new Date();
b = a.getUTCDate();
c = a.getDate();
console.log('Here UTC Date return : ' + b + "\nAnd Locale or client machine`s date : " + c);
/*
a = new Date();
b=a.getUTCDay();// It will also return a number between 0-6 which indecate 0 = Sunday to 6= Saturday and that will as UTC 
*/
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ];
a = new Date();
b = a.getUTCDay();
c = a.getDay();
console.log('Here UTC Day return : ' + b + '\nBut actual UTC Day is : ' + days[b] + "\nAnd Locale or client machine`s Day : " + days[c]);
/*
a = new Date();
b=a.getMonth();// it willl return UTC month 0-11 0=January to 11= December
*/
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
a = new Date();
b = a.getUTCMonth()
c = a.getMonth();
console.log('Here UTC Month return : ' + b + '\nBut actual UTC months is : ' + months[b] + "\nand Locale or client machine month : " + months[c]);

/*
a = new Date();
b=a.getUTCHours();

*/
a = new Date();
b = a.getUTCHours();
b = frmtHr(b);
c = a.getHours();
c = frmtHr(c);
console.log('Here UTC Hours  return : ' + b + "\nand Locale or client machine Hours : " + c);

/*
a = new Date();
b=a.getUTCMinutes();// This will return minutes acroding to UTC time
*/
a = new Date();
b = a.getUTCMinutes();
console.log("Present UTC minuets : " + b);

/*
a = new Date();
b=a.getUTCSeconds();//This will return seconds acroding to UTC time
*/
a = new Date();
b = a.getUTCSeconds();
console.log("Present UTC Seconds : " + b);

/*
a = new Date();
b=a.getUTCMilliseconds()//This will return Miliseconds acroding to UTC time
*/
a = new Date();
b = a.getUTCMilliseconds()
console.log(b);
//##############################################################################################################################################################
//Set Methods
// every set method
// return a time stamp from the

/*
a = new Date();
b=a.setDate(date);this will set the date following given number if it's more than t1 to 31 acording to the month suppose given April month have 30 day if we set the date to the 32 it will autometically set the date to the May 2  
*/
var a = new Date("2021-04-30");
a.setDate(21);
console.log(a);
b = a.setDate(32); // it set the the date May 2
console.log(a);
console.log(b);

/*
a = new Date();
b=a.setMonth(month, dateOptional );// it willl set month 0-11 0=January to 11= December if we use 13 month which is exced the limit of month that time it will go to next year and it will set to the month current year + extra_months it returns a timestamp
*/
var a = new Date("2021-04-30");
a.setMonth(11, 30);
console.log(a);
b = a.setMonth(13);
console.log(a);
console.log(b);

/*
a = new Date();
b = a.setFullYear(year,month_optional,date_optional);// It will set the year as given and it will return a timstamp in miliseconds which equivalent to the 1970 to the that year 
*/
a = new Date();
b = a.setFullYear(2030);
console.log(a);
console.log(b);

/*
a = new Date();
b=a.setHours(hours, minutes_optional,seconds_optional,miliseconds_optional);//here we can set hours between 0-24 by given value if we give more than 24 or less then 0 it will change the day like if we give negative value it will go to the past day and give more than 24 it will move the day to the next day;
*/
a = new Date();
b = a.setHours(-3, 20, 34);
console.log('Here set Hours return : ' + a + '\nand returned timestamp is : ' + b);

/*
a = new Date();
b=a.setMinutes(minuets,seonds_optional,miliseconds_optional);//here we can set minutes between 00-59 by given value if we give more than 59 or less then 00 it will change the hours like if we give negative value it will go to the past hour and give more than 59 it will move the hours to the next hour;
*/
a = new Date();
b = a.setMinutes(60, 23);
console.log('Here set Minutes return : ' + a + '\nand returned timestamp is : ' + b);
/*
a = new Date();
b=a.setSeconds(seconds,miliseconds_optional);//here we can set seconds between 00-59 by given value if we give more than 59 or less then 00 it will change the minutes like if we give negative value it will go to the past minutes and give more than 59 it will move the minutes to the next minutes;
*/
a = new Date();
b = a.setSeconds(80);
console.log('Here set Seconds return : ' + a + '\nand returned timestamp is : ' + b);
/*
a = new Date();
b=a.setMilliseconds(miliseconds);here we can set miliseconds between 00-1000 by given value if we give more than 1000 or less then 000 it will change the minutes like if we give negative value it will go to the past seconds and give more than 1000 it will move the seconds to the next seconds;
*/
a = new Date();
b = a.setMilliseconds(2333);
console.log('Here set Miliseconds return : ' + a + '\nand returned timestamp is : ' + b);

/*
a = new Date();
b=a.setTime(miliseconds);//If we give an number in timestamp which is conuted from January 1 1970;
*/
a = new Date();
b = a.setTime(1619551402333);
console.log('Here set Time returned date : ' + a + '\nand returned timestamp is : ' + b);

//================================================================================================================================================

/*
a = new Date();
b=a.setDate(date);this will set the date following given number if it's more than t1 to 31 acording to the month suppose given April month have 30 day if we set the date to the 32 it will autometically set the date to the May 2 acording to that moment UTC(Universal Time Coordinate)
*/
var a = new Date("2021-04-30");
a.setUTCDate(21);
console.log(a);
b = a.setUTCDate(32); // it set the the date May 2
console.log(a);
console.log(b);

/*
a = new Date();
b=a.setMonth(month, dateOptional );// it willl set month 0-11 0=January to 11= December if we use 13 month which is exced the limit of month that time it will go to next year and it will set to the month current year + extra_months it returns a timestamp acording to that moment UTC(Universal Time Coordinate)
*/
var a = new Date("2021-04-30");
a.setUTCMonth(11, 30);
console.log(a);
b = a.setUTCMonth(13);
console.log(a);
console.log(b);

/*
a = new Date();
b = a.setFullYear(year,month_optional,date_optional);// It will set the year as given and it will return a timstamp in miliseconds which equivalent to the 1970 to the that year acording to that moment UTC(Universal Time Coordinate)
*/
a = new Date();
b = a.setUTCFullYear(2030);
console.log(a);
console.log(b);

/*
a = new Date();
b=a.setHours(hours, minutes_optional,seconds_optional,miliseconds_optional);//here we can set hours between 0-24 by given value if we give more than 24 or less then 0 it will change the day like if we give negative value it will go to the past day and give more than 24 it will move the day to the next day acording to that moment UTC(Universal Time Coordinate);
*/
a = new Date();
b = a.setUTCHours(-3, 20, 34);
console.log('Here set Hours return : ' + a + '\nand returned timestamp is : ' + b);

/*
a = new Date();
b=a.setMinutes(minuets,seonds_optional,miliseconds_optional);//here we can set minutes between 00-59 by given value if we give more than 59 or less then 00 it will change the hours like if we give negative value it will go to the past hour and give more than 59 it will move the hours to the next hour acording to that moment UTC(Universal Time Coordinate);
*/
a = new Date();
b = a.setUTCMinutes(60, 23);
console.log('Here set Minutes return : ' + a + '\nand returned timestamp is : ' + b);
/*
a = new Date();
b=a.setSeconds(seconds,miliseconds_optional);//here we can set seconds between 00-59 by given value if we give more than 59 or less then 00 it will change the minutes like if we give negative value it will go to the past minutes and give more than 59 it will move the minutes to the next minutes acording to that moment UTC(Universal Time Coordinate);
*/
a = new Date();
b = a.setUTCSeconds(80);
console.log('Here set Seconds return : ' + a + '\nand returned timestamp is : ' + b);
/*
a = new Date();
b=a.setMilliseconds(miliseconds);here we can set miliseconds between 00-1000 by given value if we give more than 1000 or less then 000 it will change the minutes like if we give negative value it will go to the past seconds and give more than 1000 it will move the seconds to the next seconds acording to that moment UTC(Universal Time Coordinate);
*/
a = new Date();
b = a.setUTCMilliseconds(2333);
console.log('Here set Miliseconds return : ' + a + '\nand returned timestamp is : ' + b);
//##########################################################################################################################################################################

//Date to string methods

a = new Date();

b = a.toString(); //This will return full date and time in a string
console.log(b);

b = a.toISOString(); //This will return full date and time in a string with ISO 8601 fromat
console.log(b);

b = a.toUTCString(); //This will return full date and time in a string with UTC format which by default only
console.log(b);

b = a.toGMTString(); //This will return full date and time in a string with GMT format
console.log(b);

b = a.toDateString(); //This will return only date in a string with month and day
console.log(b);

b = a.toTimeString(); //This will return only time in a string with the time zone
console.log(b);

b = a.toLocaleString(); //This will return full date and time in string in locale format
console.log(b);

b = a.toLocaleDateString(); //This will return only date in string in locale format
console.log(b);

b = a.toLocaleTimeString(); //This will return only date in string in locale format
console.log(b);

// b = Date.UTC(year, month, date, hours, minutes number, seconds, ms)// it will return a timestamp from the january 1 1970 to that day
b = Date.UTC(2021, 3, 14)
console.log(b);
/*
a = new Date.now();//this will return a miliseconds scince 1970/01/01
*/
a = Date.now();
console.log(a);

/*
a = new Date.parse("April 27,2021");//this will return a miliseconds to the given date since  1970/01/01
*/
a = Date.parse("April 27,2021"); //this format is must for the parse this date into 
console.log(a);