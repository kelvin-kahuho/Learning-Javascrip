//Data Types in Javascript- String, Number, Boolean, Null, Undefined and BigInt
//Arithmetic operators(+ , - , / , * , % )
//Assignment operator(=)
//Comparison Operators- (>, <, ==, !=)
//Logical Operators- (&& (and) - Checks for both conditions to be true, || (or) - Checks for at least one condition to be true, ! (not)- returns false if the result is true)




//functions

function greet(name) {
    console.log("Hello, " + name + "!")
}
const name = "John";

greet(name);

//Arrays
var list = [1, 2 , 3 , 4 , 5];

console.log(list);
console.log(list[3]);

var a = 12;
var b =18;

function isAdult(a) {
    if (a > 18) {
        console.log("He is an adult")
    }
    else {
        console.log("He is still a minor")
    };
}
isAdult(a);

function sum(a,b) {
    var sum = a +b ;
    console.log(a+b);
    console.log(sum);
}

sum(a,b);

//Function that checks if date is my birthday

var today = new Date();
var myBirthday = new Date('2023-06-18');

function checkBirthday(a,b) {
    if (today > myBirthday) {
        console.log('Your birthday is past!');
    }
    else if (today == myBirthday) {
        console.log('Today is your birthday!');
    }
    else {
        console.log('You will soon celebrate your birthday!');
    }    
}

checkBirthday(today,myBirthday);


//while loops
//program that executes till a certain condition is met
var a = 21;

while (a < 50) {
    console.log(a);
    a++;
}

//for loops
for (i = 100; i < 150; i++) {
    console.log(i);
}

//Switch statement
var place = 'first';

switch(place) {
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No medal');
}

//Nested loop
for (i=2023; i <= 2025; i++) {
    console.log(i);
    for (j = 6; j < 12; j++) {
        console.log('------', j);
    }

}

//Objects in js

var storeManager = {
    name : 'Kelvin',
    age : 24,
    maritalStatus : 'Single',
    educationLevel: 'Bachelors Degree'
}

console.log(storeManager.name);
console.log(storeManager.age);
console.log(storeManager.maritalStatus);
console.log(storeManager.educationLevel);

isAdult(storeManager.age);

console.log(storeManager);

//Math  object
//Generate random numbers
var randon = Math.random();
console.log(randon);

//Round off forward
var k = 0.98;
var l = 0.01;
console.log(Math.ceil(k));
console.log(Math.ceil(l));


//Iteration in js

var veggies = ['onion','carrot', 'cabbage', 'tomatoes'];

for (var i = 0; i < veggies.length; i++) {
    if (veggies[i][0]=='c') {
        console.log(veggies[i]);
    }
}

//error handling in js

try {
    console.log(l+m)
} catch(err) {
    console.log(err)
    console.log('The program will continue to execute')
    console.log('The error was saved in the error log')
}
console.log('My program does not stop even if an error occurs')

//Object oriented programming
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total price: ', calculation);
    }
}

purchase1.totalPrice();