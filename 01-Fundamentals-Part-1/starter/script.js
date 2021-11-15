/*
let js = "amazing";
if (js === "amazing") alert("JavaScript is Fun!");
let x = 40 + 1 + 2 + 3 - 1;
console.log(x);

console.log("Ashim!");

let firstName = "Ashim";
let lastName = "Mahara";

console.log("firstName is", firstName, "lastName is", lastName);

// Variable names cannot start with Number; eg. 2First
// Variable names with Capital letters are conventionally used in OOP Practices;
// ALL CAPITAL VARIABLE NAMES ARE USED FOR CONSTANTS; PI = 3.1415

let PI = 3.1415;
*/

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof (javaScriptIsFun));

// let someVar;
// console.log(someVar);
// console.log(typeof someVar);

// someVar = 1991;

// console.log(someVar);
// console.log(typeof someVar);

// //This is a bug in JavaScript;
// console.log(typeof null);

// const a = 1;

// // a = 2; cannot reassign values to const variable
// // const a; need value while initializing

// var b = 2; //old way of declaring variables before es6

// console.log(10 / 2);

// const thisYear = 2021;
// const ageAshim = thisYear - 1996;
// console.log(ageAshim);

// console.log(ageAshim * 5, 2 ** 3);
// // 2 to the power of 3

// let firstName = "Ashim";
// let lastName = "Mahara";

// fullName = firstName + " " + lastName;
// console.log(fullName)

// let x = 10 + 5;
// console.log(x)

// // x = x + 10
// x += 10
// console.log(x)

// let ageSoma = 15;

// console.log(ageAshim > ageSoma);

// console.log(ageAshim >= 18);

// if (ageAshim > 18) {
//     console.log("Ashim has a Driver's License.")
// }

// if (ageSoma > 18) {
//     console.log("Soma can have a Driver's License.")
// } else {
//     console.log(`Soma is too young. Tell them to try again in ${18 - ageSoma} years.`)
// }

// const inputYear = "1996";

// console.log(inputYear + 18);

// console.log(Number(inputYear) + 18);

// console.log(typeof (String(18)));

//Type Coercion is language automagically assuming type for the input.

// console.log("Starting Comparisions");
// console.log("73" > "69");
// console.log(73 > "69");

// let n = '1' + 1;
// n = n - 1; //during the minus operation, the variable n get converted to a number.
// console.log(n)

//Truthy and Falsy values

// console.log("Starting Truthy and Falsy Values")
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean("Ashim")); // Any string that is not an empty string is a truthy value , i.e. true
// console.log(Boolean({}));

// const money = 01;

// if (money) {
//     console.log("Don't spend it all!");
// } else {
//     console.log("You should get a Job!");
// }

// let height;
// height = 0;


// if (height | height == 0) {
//     console.log("Yay, height is defined !")
// } else {
//     console.log("Height is UNDEFINED !")
// }

// const age = 18;

// if (age === 18) console.log(`"You just became an adult !" says loose operator ==.`);
// if (age === "18" == false) console.log(`"I don't understand your age !" says strict operator ===.`);

/// `==` does type coercion while `===` is strict and doesn't perform any type coercion


// const myAge = Number(prompt("Enter Your Age"));

// if (myAge === 24) {
//     alert("You're the same age as me !");
// } else if (myAge < 24) {
//     alert("Meh! Get the hell outta here kid!");
// } else {
//     alert("Ok Boomer!");
// }

// if (myAge !== 24) alert("Why not 24?");


//Next Boolean Logic 023

const a = true;

if (a) {
    alert("a is true")
} else if (!a) {
    alert("!a")
}