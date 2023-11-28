/*there are three types conditional if-else 
1.if statement 
    if(condition){
      executeable_code;
    }

2.if else statement 
    if(condition){
      executeable_code;
    }else{
      executeable_code;
    }
  executeable_code;
3.else if ladder statement
    if(1st condition){
      executeable_code;
    }else if(2nd condition){
      executeable_code;
    }
    |
    |
    |
    }else if(nth condition){
      executeable_code;
    }
    else{
      executeable_code;
    }


    ternary operator
    (condition)? if condition is TRUE then this part will execute : (condition)? if condition is FALSE then this part will execute


    Switch statement

    switch(condition_expression){
      case condition 1:
        executable code;
        break;
      case condition 2:
        executable code;
        break;
      case condition 3:
        executable code;
        break;
      case condition 4:
        executable code;
        break;
      default:
        executable code;
    }
 */

//if statement
var a;

a = prompt("Do You Want a drink(Alcohol)..?");
if (a == 'yes' || a == 'Yes') {
    alert("Yes, show me your id card and tell me your age");
}

//if else statement
var a = 18;
var b = 0;

b = prompt("Please input your age..");

if (b < a) {
    console.warn("You're underage. So, you can't Drink Alcohol");
} else {
    alert("Congrats, You're allowed to drink Alcohol choose one please..");}
    // b = prompt("Choose a number please..\n1.Rum\n2.Whiskey\n3.Vodka\n4.Beer\n5.Cola");

    // if (b == 1) {
    //     document.write("<h2>There is your <strong>Rum</strong></h2>");
    // } else if (b == 2) {
    //     document.write("<h2>There is your <strong>Whiskey</strong></h2>");

    // } else if (b == 3) {
    //     document.write("<h2>There is your <strong>Vodka</strong></h2>");

    // } else if (b == 4) {
    //     document.write("<h2>There is your <strong>Beer</strong></h2>");

    // } else if (b == 5) {
    //     document.write("<h2>There is your <strong>Cola</strong></h2>");

    // } else {
    //     document.write("<h2>We are sorry sir</h2>");
    // }

}
//eslseIf ladder statement
b = prompt("Choose a number please..\n1.Rum\n2.Whiskey\n3.Vodka\n4.Beer\n5.Cola");

if (b == 1) {
    document.write("<h2>There is your <strong>Rum</strong></h2>");
} else if (b == 2) {
    document.write("<h2>There is your <strong>Whiskey</strong></h2>");

} else if (b == 3) {
    document.write("<h2>There is your <strong>Vodka</strong></h2>");

} else if (b == 4) {
    document.write("<h2>There is your <strong>Beer</strong></h2>");

} else if (b == 5) {
    document.write("<h2>There is your <strong>Cola</strong></h2>");

} else {
    document.write("<h2>We are sorry sir</h2>");
}

//ternary operator

b = prompt("Do you Want leave\n yes or no");

(b == 'yes' || b == 'Yes') ? document.write("<h2>Ok sir Bye</h2>"): document.write("<h2>Ok sir you can stay till 12:00 Clock</h2>");

var a = prompt("Choose a drink..\n1.Rum\n2.Whiskey\n3.Vodka\n4.Beer\n5.Cola")
switch (true) {
    case (a == 'rum' || a == 'Rum' || a == 1):
        document.write("<h2>There is your <strong>Rum</strong></h2>");

        break;
    case (a == 'whiskey' || a == 'Whiskey' || a == 2):
        document.write("<h2>There is your <strong>Whiskey</strong></h2>");

        break;
    case (a == 'vodka' || a == 'Vodka' || a == 3):
        document.write("<h2>There is your <strong>Vodka</strong></h2>");

        break;
    case (a == 'beer' || a == 'Beer' || a == 4):
        document.write("<h2>There is your <strong>Beer</strong></h2>");

        break;
    case (a == 'cola' || a == 'Cola' || a == 5):
        document.write("<h2>There is your <strong>Cola</strong></h2>");

        break;
    default:
        document.write("<h2>We are sorry sir</h2>");

}
