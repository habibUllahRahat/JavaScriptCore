/* Class is special keyword in JavaScript which help to create class in Javascript
  JavaScript class is deffert then other laguage

syntax:
class className{

  constructor(){
    
    =>instance member

    this.variable="value";
  }
  
  =>Prototype member

  method(){// this method will store in this class prototype

  }
}
*/
class Class {
    constructor() {
        this.variable = "value"
    }
    method() {
        console.log(this.variable);
    }
}

var subClass = new Class();

console.log(subClass);
console.log(subClass.variable);
subClass.method();

//We can create class without "constructor()" function cause there is an default constructor it wont show any error

class noConstructor {
    firstHalf = "Hello ";
    secondHalf = "World";
    display() {
        console.log(this.firstHalf + this.secondHalf);
    }

}

var A = new noConstructor();

console.log(A);
console.log(A.firstHalf);
console.log(A.secondHalf);

A.display();

//perameterized class

class className {
    constructor(instanceMember, instanceMember1) {
        this.sum = () => {
            return (Number(this.instanceMember) + Number(this.instanceMember1));
        }
    }
    result() {
        document.write(this.sum());
    }
}

var demo = new className();

// demo.instanceMember = prompt('Input a number : ');
// demo.instanceMember1 = prompt('Input a number : ');

console.log(demo.sum());
demo.result();
console.log(demo);
console.log(typeof(className));

//Inheritance in class

class superClass {
    constructor() {
        this.variable = 20;
    }
    print() {
        console.log('This variable from super class ' + this.variable + '\n');
    }
}

//for inheritance we need to use extends keyword 
//ex: class subClass extends superClass={...}

class subClassEx extends superClass {
    constructor() {
        super(); // for accessing any variable we need call the super function
        this.value = 300;
    }
    sum() {
        console.log(`This is value from superClass : ${this.value} & this is from super class ${this.variable} and sum of both is ${this.value+this.variable}`);
    }
}

var a = new subClassEx;

a.sum();
a.print();
console.log(a.variable);
console.log(a.value);

//using super() function
// "super()" function used for accessing or passing value to superClass variable from 

class newSuperClass {
    constructor(value) {
        this.value = value;
    }
    valueShow() {
        console.log("This is value from newSuperClass : " + this.value);
    }
}

class newSubclass extends newSuperClass {
    constructor(value, values) {
        super(value);
        this.values = values;
    }
    subSum() {
        return this.value + this.values;
    }
}

var b = new newSubclass;

b.value = 20;
b.values = 50;

b.valueShow();
console.log(b.subSum());

//method overriding

class SupClass {
    show() {
        console.log("This is a Super Class");
    }
}

class SubClass extends SupClass {
    show() { // for overriding an method we need to define another method with same name 
        console.log("This is a method from Sub Class");
    }
}

var a = new SubClass;
a.show(); // before overriding
//alternative way

a.show = () => {
    console.log("Hell oh Im tired");
};

a.show()
    //static method is a method which can be only accessed by only super class 

class Squre {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    static check(width, height) {
        if (width === height) {
            console.log("Its a square");
        } else {
            console.log("Its not a square");
        }
    }
    totalDimestion() {
        console.log(this.width * this.height);
    }
}

var s = new Squre;

s.width = 750;
s.height = 750;

Squre.check(s.height, s.width); //static function

// s.check(30, 40); this will show unknown function
//but we can use prototype or intance function

s.totalDimestion();