" use strict";

// //used for out put in console and debugging area
// console.log("Hello world");
// //this are the variable for store something
// //variable names are case sensitive here
// var FirstName = "rekhathakur";
// console.log(FirstName);
// //integer variable
// var value1 = 10;
// console.log(value1 + 10);//use of operrators
// console.log(value1 * 10);
// console.log(value1 / 10);
// console.log(value1 % 10);
// //finding power of a number
// console.log(value1 ** 3);
// //finding square root of an number
// console.log(value1 ** 0.5);
// //you can only use underscore_or dollar symbol
// //firsr_name(valid) first$name(valid)//when we use underscore it is called snake case writhing
// //_firstname(valid) $firstname(valid)
// // firstName //camel case writing

// //convention
// //start with small letter and use camelCase

//         //let veriable

// let firstname = "Rekha thakur";
// //in let variable you cannot define one verible two times
// console.log(firstname);

//       //declare constant

// const pi=3.14;
// console.log(pi);

//   // string declaration

// let Name ="harshit";
// console.log(Name);
// console.log(Name[0]);
// console.log(Name.length);
// console.log(Name[Name.length-1]);
// // trim(); use for remove spaces in string
// //toUpperCase
// //toLowerCase
// //slice

// let myName ="rekha thakur";
// // let newName=myName.slice(0,4);
// let newName=myName.slice(1);
// console.log(newName);
// // console.log(myName.length);
// // console.log(myName);
// // // let newString=myName.trim();
// // // console.log(newString);
// // // console.log(newString.length);
// // myName=myName.trim();
// // console.log(myName.length);
// // console.log(myName);
// // console.log(myName.toUpperCase());
// // myName = myName.toUpperCase();
// // console.log(myName);
//     //start index



// //DATA TYPE
// //javascript is dynamacally typed language
// //typeof operator
// //premative data type
// // Numbers
// //symbol
// // string
// //int 
// //Boolean
// //BigInt
// //symbol
// // null
// let age=19;
// let me="you";
// // console.log(typeof age);
// // console.log(typeof myName);
// // different method to convert stirng  into number
//  // me =+"me";    
// //me = Number(me);
// console.log(typeof me);
// // different method to convert the number into string 
// //age = String(age);
// //age = age.toString();
// //age= ""+age; 
// //age = age+"";
// //console.log(typeof age);



// string concatenation
//  let first$name="rekha";
//  let lastname="thakur";
// //  let fullname=first$name+lastname;
// //  console.log(fullname);



// template string
//  let age= 19;
//  let name="Rekha Thakur";
//  //let aboutMe="my name is "+ name + " and age is "+ age;  vary tadious way of writing a string
//  // using string tamplate 
//  let aboutMe = `my name is ${name } and my age is ${age}`; 
//  console.log(aboutMe);

//undefined 
// let name;
// console.log(typeof name);
// name = "rekha";
// console.log(typeof name);

//null 
// let myVar=null;
// console.log(myVar);
// myVar = 34;
// console.log(typeof myVar);
// console.log(typeof null); bug error are here

//BigInt
//console.log(Number.MAX_SAFE_INTEGER);
// let number=BigInt( 127699484757);
// let number = 123n;
// console.log(number);

// booleans & comparision operator 
// boolean ture / false
// let num1 = 4;
// let num2 = "4";
// console.log(num1>=num2);

// ==vs ===
// console.log(num1==num2); // == only identify numbers not data type
// console.log(num1 === num2); work on different data type

// != vs !==
//  console.log(num1 != num2);
//console.log(num1 !== num2);


// truthy and falsy values
// falsy values
// ""
// null
// undefined
// 0
// let age;
// if(age){
//   console.log(age);
// }
// else{
//   console.log("falsy value");
// }
//other than falsy values all values are falsy values

// if else condition
//  let age= 15;
//  if(age>=17){
//   console.log("user can play game");
//  }
//  else{
//   console.log("not allowed");
//  }

// number is odd or even
//  let num=6;
//  if(num%2==0){
//   console.log("even");
//  }
//  else{
//   console.log("odd");
//  }

// ternary operator
// let age=9;
// let drink = age>=5 ? "coffee":"milk";
// console.log(drink);
// normal way of done this
// if(age>=5){
//   drink="coffee";
// }
// else{
//   drink="milk";
// }
// console.log(drink);


// and operator
// let firstName = "rekha";
// let age=19;
// // if all the condition are true  only when loop is run
// if(firstName[0]==="r" && age>=19){ 
//     console.log("you are eligible for login");
// }

// or operator
// let age = 18;
// let id= 34;
// if(age>16 || id == 34){
//     console.log("weldone");
// }

// nested if else
// let winnigNumber=19;
// // takes input in string
// let userGuess=+prompt("Guess a number");
// console.log(userGuess);
// if(userGuess===winnigNumber){
//     console.log("won!");
//     console.log("well played");
// }
// else{
//     if(userGuess<winnigNumber){
//         console.log("too low !!");
//     }
//     else{
//         console.log("too high !!");
//     }
// }



// if 
// else if
// else if 
// else
// let tempInDgree = 15;

// if(tempInDgree<0){
//     console.log("too cold");
// }
// else if(tempInDgree<16){
//     console.log("it is cold outside");
// }
// else if(tempInDgree<22){
//     console.log("room temprature");
// }
// else if(tempInDgree<30){
//     console.log("weather is okay");
// }
// else if(tempInDgree<35){
//     console.log("turn on ac");
// }
// else if(tempInDgree<45){
//     console.log("dont go outside");
// }
// else {
//     console.log("warning!!");
// }

// while loop
// let i=0;
//  while(i<10){
//     console.log(i);
//     i=i+1;
//  }

 // do while loop
// let i=1;
// do{
//     console.log(i);
// }while(i>2);


