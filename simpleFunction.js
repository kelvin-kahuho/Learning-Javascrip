function greet(name) {
    console.log("Hello, " + name + "!")
}
const name = "John";

greet(name);

var list = [1, 2 , 3 , 4 , 5];

console.log(list);
console.log(list[3]);

var a = 12;
var b =18;

if (a > b) {
    console.log("He is an adult")
}
else {
    console.log("He is still a minor")
};

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