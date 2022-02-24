/*
  Object orientend programing with object

  object:
  var object={
      name:"Rahat",
      age:23,
      adult: function(){
          console.log('Name : ' + this.name);
          if(age>=18){
              console.log{'Yes, he is an adult'};
          }else{
              console.log{'He is not an adult'};
          }
      },
      smoking:true
  };
  */

// object

//delearing an object
var object_name = {};

//intilaizing value into an object
object_name['key'] = 'value'; //alternative way: object_name.key = 'value'; we can't use alternative when KEY have White space
object_name.key1 = 'value_2'; //string value
object_name.key2 = true; //boolean value
object_name.key3 = () => { //method(function)
    console.log("Hello this is me object")
}
object_name.key4 = 45; //numeric value
object_name.key5 = { //object value
    Dname: "Rahat",
    age: 23
}

//calling(accessing)

console.log(object_name);
console.log(object_name.key1);
console.log(object_name.key2);
object_name.key3();
console.log(object_name.key4);
console.log(object_name.key5);
//object inside object value 
console.log(object_name.key5.Dname);
console.log(object_name.key5.age);

// deleting a key from an object
delete object_name.key; // for delete we have to use delete keyword
console.log(object_name);


var object = {
    name: "Rahat",
    age: 13,
    adult: function() { // inside an object function known as its method()
        console.log('Name : ' + this.name); // to access object same value we have to use "this" with dot operator we can't use it only when a object defined in same block"{}" and this point the parent object 
        if (this.age >= 18) {
            console.log('Yes, he is an adult');
        } else {
            console.log('He is not an adult');
        }
    },
    smoking: true,
    school: {
        name: "KPB High school",
        location: "Basabo",
        type: "Primary & High school"
    },
    "high school": true //Key name with white space should have qutetion
};
// calling object or accessing elements
document.write(object.name);
document.write('<br>' + object.age);
document.write('<br>' + object.smoking);
document.write('<br>' + object['high school']); //Key with white space access

object.adult();
console.log(object.school);




/*
Factory Function when a function return an object
*/

function human() {
    return {
        name: 'MC',
        school: {
            sname: "KPB High school",
            slocation: "Basaboo",
            type: "Primary & High school"
        }
    }
}

//calling(accessing)
var rahat = human();
console.log(rahat);



//factory function with perameter
function hunoman(name) {
    return {
        sname: name,
        school: {
            sname: "KPB High school",
            slocation: "Basaboo",
            type: "Primary & High school"
        }
    }
}
//calling(accessing)
var azhar = hunoman('Azharul');
console.log(azhar);




//object deconstuction
var newObject = () => {
        return {
            name: 'Rahat',
            school: {
                sname: "KPB High school",
                slocation: "Basaboo",
                type: "Primary & High school"
            }
        }
    }
    //calling(accessing)
var { school: { sname, slocation, type } } = newObject()
console.log(sname);
console.log(slocation);
console.log(type);






//Object constructor

var objConstructor = new Object();

objConstructor['Hello Bitches'] = 'Hello World this is object constructor';
objConstructor.key = 20;
objConstructor.key1 = false;
objConstructor.key2 = () => {
    console.log(objConstructor['Hello Bitches']);
}
objConstructor.key3 = {
    name: 'Habib',
    smoking: false
}

//calling(accessing)
console.log(objConstructor);
console.log(objConstructor['Hello Bitches']);
console.log(objConstructor.key1);
objConstructor.key2();

//object inside object value 
console.log(objConstructor.key3.name);
console.log(objConstructor.key3.smoking);

// another way to construct an object

function Mobile(mModel, mPrice) {
    this.show = function() {
        console.log('Phone Model : ' + this.mModel + "\nPrice of this Phone : " + this.mPrice + "$");
    }
}

//calling(accessing)
var faulPhone = new Mobile();
faulPhone.mModel = 'Faul Phone 2';
faulPhone.mPrice = 30;
console.log(faulPhone);
faulPhone.show();

var fPhone = new Mobile();
fPhone.mModel = 'F Phone 2';
fPhone.mPrice = 30;
console.log(fPhone);
fPhone.show();



//class
class mobile {
    constructor(model, battery, releaseYear) {
        this.model = model;
        this.battery = battery;
        this.releaseYear = releaseYear;

    }
    phoneAge() { // inside a class function also know as method() of this classs
        let date = new Date;
        let pdate = date.getFullYear();
        console.log(pdate - this.releaseYear + " years");
    }
}

var iPhone = new mobile;
iPhone.model = 'SE';
iPhone.battery = '1600mAh';
iPhone.releaseYear = 2016;

//calling(accessing)
console.log(iPhone);
console.log(iPhone.model);
console.log(iPhone.battery);
console.log(iPhone.releaseYear);
iPhone.phoneAge();

/*Checking Properties exist
1. using 'typeof' operator
syntax: if(typeof object_name.key != 'undefiend'){
    execute code;
}
2. "in" operator
syntax: if(key in object_name){
    execute code;
}

3. 'hasOwnProperty' function
syntax: if(object_name.hasOwnProperty(key)){
    execute code;
}
*/

//check with 'typeof' operator

if (typeof faulPhone.mModel != 'undefiend') {
    console.log('Available');
} else {
    console.log("Don't Exist");
}

//check with 'in' operator

if ('mModel' in faulPhone) {
    console.log('Available');
} else {
    console.log("Don't Exist");
}

//check with 'hasOwnProperty()' function

if (faulPhone.hasOwnProperty('Model')) {
    console.log('Available');
} else {
    console.log("Don't Exist");
}