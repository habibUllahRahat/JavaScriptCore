/*
There are three types of loops in
1.while loop

syntax:

var i=0//iteration controler
while(i</<=/>/>=/!=condition){
  executeable code;
  i++
}

2.do while loop

syntax:

var i=0/ iteration controler

do{
i++
}while(i</<=/>/>=/!=condition)

NB:this type of loop will run atleast once doesen't matter it is fill up the condition or not

3.for loop

there are four types of for loop in JavaScript

i  . for loop :

            for(var i=0 ; i </<=/>/>=/!= condition ; i++ ){
              executeable code;
            }
ii . forEach loop :

            array_name.for(array_element_parameter){
              executeable code;
            }
iii. for..of loop :

            for(array_element of array){
              executeable code;
            }
iv . for..in loop(specially for object) :

            for(object_key in object){
              executeable code;
            }

in js indexes started from 0;
*/
//while loop

var i = 0 //iteration controler

while (i < 3) {
    document.write(`Hell Oh world...!!<br>i(iteration) value is here : ${i} <br>`);
    i++;
}

document.write(`<br><br>`);

//do while
var i = 0 //iteration controler

do {
    document.write(`This is DoWhile loop...!!<br>i(iteration) value is here : ${i} <br>`);
    i++;
} while (i < 3);

document.write(`<br><br>`);

//for loops

//i.for loop

let array = new Array('Array element no-1', 'Array element no-2', 'Array element no-3', 'Array element no-4', )
for (let i = 0; i < array.length; i++) {
    document.write(`${array[i]}<br>And it's index no is ${i}<br><br>`);

}
document.write(`<br><br>`);

//ii.forEach loop

i = 0;
array.forEach(element => {
    document.write(`${element}<br>And it's index no is ${i++}<br><br>`);
})
document.write(`<br><br>`);
//iii. for..in loop

let object = {
    Name: "Rahat",
    age: 23,
    study: function() {
        document.write(`${this.Name} and his age is ${this.age}`);
    }
}

for (const key in object) {
    if (key == "study") {
        object.study();

    }
    console.log(key);
}

// object.study();
document.write(`<br><br>`);
//iv.for..of loop
i = 0;

for (const iterator of array) {
    document.write(`${iterator}<br>And it's index no is ${i++}<br><br>`);

}

let object2 = {
    no1: {
        Name: "Rahat",
        age: 23,
        school: "Kpb High School"
    },
    no2: {
        Name: "Riad",
        age: 28,
        school: "Kpb High School"
    },
    no3: {
        Name: "Azharul",
        age: 26,
        school: "Kpb High School"
    }
}

document.write(`<br><br>`);

i = 0;
for (const rate in object2) {
    var j = 0;
    for (const key in object2[rate]) {
        document.write(`${object2[rate][key]}<br>And it's index no is ${j++}<br><br>`);
    }
}

function makeItems() {
    return {
        object2: {
            no1: {
                Name: "Rahat",
                age: 23,
                school: "Kpb High School"
            },
            no2: {
                Name: "Riad",
                age: 28,
                school: "Kpb High School"
            },
            no3: {
                Name: "Azharul",
                age: 26,
                school: "Kpb High School"
            }
        }

    }
}

let { object2: { no1, no2, no3 } } = makeItems();

console.log(no3);