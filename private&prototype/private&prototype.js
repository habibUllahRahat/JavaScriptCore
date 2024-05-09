/*
if we use let var or const it will be private 
using return we can use private property
*/

var mobile = function(model, price) {
    this.model = model;
    this.color = 'white';
    var buyingPrice = price; //private variable
    this.show = () => {
        buyingPrice += ((buyingPrice / 100) * 50);
        sellingPrice = buyingPrice;
        return sellingPrice;
    }
}
var shame = new mobile('Thanks2', 10000);

console.log(shame);
console.log(shame.model);
console.log(shame.buyingPrice); //it will show here undefiend
console.log(shame.show());

/*
Prototype
object_name.prototype.prototype_Prototype='value'
*/
var Mobile = function(model, price) {
    //instance member
    this.model = model;
    this.price = price;
}

var samsung = new Mobile('Galaxy', 30000);
var nokia = new Mobile('1100', 2300);
var iPhone = new Mobile('SE', 44000);

console.log(samsung);
console.log(nokia);
console.log(iPhone);

Mobile.prototype.color = 'Red' //prototype is a superclass// generally protype used for methods(object function)
Mobile.prototype.age = function(releaseYear) {
    var date = new Date();
    console.log('This Mobile released has been ' + (date.getFullYear() - releaseYear) + " Year's");
}
samsung.age(2013);

console.log(Object.keys(samsung)); //checking keys

for (const key in samsung) {
    console.log(key + " : " + samsung[key]); // if we use for in loop we can see also prototype member and intance member of object
    if (key == 'age') {
        samsung.age(2014);
    }
}

//In JavaScript every object is associated with another Object JavaScript if any object isn't assciated with another object its will be part of Object.prototype Properties and Object.portoype is part of Null
//Array is special kind of object in JavaScript and associated with Array.prototype Properties associated with Object like this string,number with their own prototype

console.log(Object.prototype); // it will return all methode of Object

var a = {};
var a1 = new Object();
console.log(Object.getPrototypeOf(a));
console.log(Object.getPrototypeOf(a1));


var b = [];
var b1 = new Array();

console.log(Object.getPrototypeOf(b));
console.log(Object.getPrototypeOf(b1));
console.log(Array.prototype); //same as b & b1 prototype

console.log(Object.getPrototypeOf(Array.prototype)); //and array prototype associated with Object.prototype which associated with Null;

var s = 'Hello world';
var s1 = 'Hell oh World';
console.log(Object.getPrototypeOf(s));
console.log(Object.getPrototypeOf(s1));
console.log(String.prototype); //same as s & s1 prototype

console.log(Object.getPrototypeOf(String.prototype)); //and string prototype associated with Object.prototype which associated with Null;

/*
if any function or method defined it create two object those are 
1. function object
      in side there is a prototype property which is point this function's prototype object(2)
      ex
        var lg = new Mobile();
        in this case JavaScript engine create an new object and inside this it create a property which is "__proto__" and it point the object of Mobile function
        if we call an key Js engine search that object inside lg then it will search it to prototype object of Mobile function
        if call:
        Mobile.prototype.a="value";
          it will create an 'a' property inside Mobile prototype object in this property it will insert 'value' as value of that property and when it  "lg.a" called it will search in the object again and it will not find then '__proto__' point to the Mobile.prototype object 
2.Prototype object
    and object have a properties '__proto__' which is point Object.prototype
*/

/*
Prototype inheritence

by now we know that every object is dirctly or indirectly connected with Object.prototype so because of that we make inheritence of prototype
so make inhertance we need call parent object inside child object like that so we can use parent object properties inside child object (but object property cant be used inside parent object):

function parent(){
  a=20;
}

function child(){
  parent.call(this, args)
  b=30;
}

*/
var Parent = function() {
    this.a = 20;
}
Parent.prototype.z = 40;

var parentsObj=new Parent()
console.log(parentsObj)
console.log(parentsObj.a)
console.log(parentsObj.z)

var Child = function() {
    Parent.call(this); //this line will link Parent object but no Parent.prototype object
    this.b = 30;
}
Child.prototype = Object.create(Parent.prototype); // must be connect before declear any object of childm,
// Child.prototype.constructor = Child;//reset the constructor

var child1 = new Child();
console.log(child1.a);
console.log(child1.b);
console.log(child1.z); //this will be inherited from Parent Object 

//practicesone super object two sub object



function Car(model, releasedYear) {
    this.year = releasedYear;
    this.model = model;
}

Car.prototype.getAge = function() {
    let pyear = new Date();
    pyear = pyear.getFullYear();
    document.write(this.model + ' Model Car is released at ' + this.year + ' and it has been ' + (pyear - this.year) + " in service<br>")
}


function Toyota(model, releasedYear) {
    Car.call(this, model, releasedYear);
    this.company = 'Toyota';
    this.type = 'Hybrid';
}

function Tesla(model, releasedYear) {
    Car.call(this, model, releasedYear);
    this.company = 'Tesla';
    this.type = 'Electronic';
    this.getAge = function() {
        document.write("<br>Fuck Your System<br><br>")
    }
}

function Ferrari(model, releasedYear) {
    Car.call(this, model, releasedYear);
    this.company = 'Ferrari';
    this.type = 'Hyper Racing (Jet Fuel)';
}

function connectTowObjectProto(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

connectTowObjectProto(Toyota, Car);
connectTowObjectProto(Tesla, Car);
connectTowObjectProto(Ferrari, Car);

var prado = new Toyota('Prado (TXD)', 2016);
var sModel = new Tesla('S-Model 3(Basic)', 2020);
var f1 = new Ferrari('F1 (first addition)', 1998);

console.log(prado);
console.log(prado.model);
console.log(prado.year);
console.log(prado.company);
console.log(prado.type);
prado.getAge();

console.log(sModel);
console.log(sModel.model);
console.log(sModel.year);
console.log(sModel.company);
console.log(sModel.type);
sModel.getAge(); //method overriding

console.log(f1);
console.log(f1.model);
console.log(f1.year);
console.log(f1.company);
console.log(f1.type);
f1.getAge();
