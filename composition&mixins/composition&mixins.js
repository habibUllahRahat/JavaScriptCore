/*
we can assign extra or more function to the super object and then it will work as object function

syntax:
var extra_function=function (){
    return console.log("this is extra function");
}

var objectName=function(){

}
Object.assign(objectName.prototype,extra_function());

var newObject=new objectName();

alternative:

var newObject = Object.assign({},extra_function());
*/

function conn(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
};


function fv_food(foodName) {
    this.foodName = foodName;
    this.foodShow = function() {
        return (`My favourite food is ${this.foodName}`);
    }
};

function Hobby(hoby) {
    this.hoby = hoby;
    this.hobyShow = function() {
        return (`My favourite Hobby is ${this.hoby}`);
    }
};

function Job(title) {
    this.title = title;
    this.jobShow = function() {
        return (`My favourite job is ${this.title}`)
    }
}


function Hunoman(name, birthDay, foodName, hoby, title) {
    fv_food.call(this, foodName);
    Hobby.call(this, hoby);
    Job.call(this, title);

    this.name = name;
    this.birthDay = birthDay;
    this.age = function() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var date = date.getDate();

        var b = this.birthDay.split('/');

        if (b[0] > date) {
            var ageDay = (b[0] - date);
        } else {
            var ageDay = (date - b[0]);
        }
        var ageMonth = (12 - b[1]) + month;
        if (ageMonth < 12) {
            var ageYear = (year - 1) - b[2];
        } else {
            var ageYear = year - b[2];
            var exmonth = ageMonth % 12;
            ageMonth = exmonth;

        }

        return (`Hi ${this.name} Your age is ${ageYear} years ${ageMonth} months ${ageDay} days`);
    }
}

Object.assign(Hunoman.prototype, Job, Hobby, fv_food);
var rahat = new Hunoman();

rahat.name = prompt("Please input your Name here");
rahat.birthDay = prompt('Input your birthday', 'DD/MM/YYYY');
rahat.foodName = prompt('Input your Favourite Food name');
rahat.hoby = prompt('Input your Hobby');
rahat.title = prompt('Input your Job title');

console.log(rahat);
// rahat.name = 'rahat'
// rahat.birthDay = '17/07/1997'
// rahat.foodName = 'Vhaat'
// rahat.hoby = 'Coding'
// rahat.title = 'Student'

document.write(rahat.age() + "<br>");
document.write(rahat.foodShow() + "<br>");
document.write(rahat.hobyShow() + "<br>");
document.write(rahat.jobShow() + "<br>");

// var a = prompt('Input your birthday', 'DD/MM/YYYY');