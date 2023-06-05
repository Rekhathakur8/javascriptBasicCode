// "use strict";

// //arrays is a object in javascript
// //reference type
// // ordered collection of items
// // let fruits=["rekha","shobha","mammy"];
// // console.log(fruits);
// // fruits[2] = "banana";
// // console.log(fruits);
// // console.log(typeof fruits);
// // console.log(Array.isArray(fruits));


// // array push pop method
// // let fruits=["rekha","shobha","mammy"];
// // fruits.push("papa");
// // console.log(fruits);
// // fruits.pop();
// // console.log(fruits);
// // console.log(fruits.pop());
// // let popedFruit = fruits.pop();
// // console.log(fruits);
// // console.log("poped name is",popedFruit);


// //unshift  ----> used for adding an element in first index of array
// // fruits.unshift("banana");
// // console.log(fruits);

// // let removedName= fruits.shift();
// // console.log(fruits);
// // console.log(removedName);


// // --->> push and pop is faster then sift and unsift


// // premitive  data type
// // this type of data stored in stack
// //  let num1=6;
// //   let num2=num1;
// //    console.log("value of num1 is",num1);
// //    console.log("value of num2",num2);
// //    num1++;
// //    console.log("after increamenting num1");
// //    console.log("value of num1 is",num1);
// //    console.log("value of num2",num2);

// // refrence data type
// // this type of data stored in heap
// //array
// //let array1=[1,2,3,4,5];

// // let array2=array1;
// // console.log("array1 is", array1);
// // console.log("array2 is", array2);
// // array1.push("6");
// // console.log("after push an 6 in aarray one");
// // console.log("array1 is", array1);
// // console.log("array2 is", array2);

// //colne of array
// //  let array1=[1,2,3,4,5];
// //  let array0=[6,7,8,9];
// //  let array2=[...array1, ...array0];
// // // // array2=array1.slice(0);
// // // let array2=[].concat(array1);
// // // let array2=[...array1].concat(4,5);---->spread operator
// // console.log("array1 is", array1);
// //  console.log("array2 is", array2);



// // for loop in array
// // let fruits=["rekha","shobha","mammy"];
// //  for(let i=0; i<3; i++){
// //     console.log(fruits[i]);
// //  }

// for of loop
//----> for-of and for in are two different looping constructs in javascript
// definitiom-->>for -of is used to iterate over the values in an iterable object
// such ,as an array or a string .it allows you to access the values of the object
// directly ,without having to use an index--->
// example-->using a for of loop over the characters in a string:
//eg.1
// const myName = "rekha";
// for(let charector of myName){
//     console.log("charector is ::",charector);
// }
//eg.2
// const myName =["rekha","shoba","pooja"];
// for(let charector of myName){
//          console.log("charector is ::",charector);
//      }
//eg.3
// const obj ={
//     name:"rekha",
//     id: 1,
//     gender:"female"
// }
// for(let charector of obj){
//         console.log("charector is ::",charector);
//     }
//object is not iterable so you can not iterate for loop here


// for in loop
/* 
for - in is used to iterate over the enumerable properties
of an object . it allows you to access the keys of the object rather than the values
 */

//examples;--->
/*
1..>> const obj = {
   a:1,
   b:2,
   c:3
};
for(let key in obj){
   console.log(`the keys are ${key}`);
}
*/

// example2
/*
 const  array = [1,2,3,"rekha",6,7];
 for(let key in array){
     console.log(`keys are ${key}`);
 }
*/
// NOTE--->
/*  for in also iterate  over any inherited properties of an object . if you only
 want to operate over the object own properties , you can use Object.keys() or Object.entries()
 in combination with for loop.
 */
// eg 1;
/* const obj1 = { 1:"rani", 2: "rekha", 3:"shobha" ,4:"pooja", 5:"taruna",6:"bittu"};
 for (const key of Object.keys(obj1)){
    console.log(key);
 }*/
// for ..of for [array,map,set,string] to iterate over values;
// for ..in for an array to iterate over a key;
// for ..in for objects to enumerate its(objeces) properties;


// array distructuring
// const Array = ["value1", "value2", "value3", "value4", "value5"];
// // let myvar1=Array[0];
// // let myvar2= Array[1];
// // console.log("myvar1 is",myvar1);
// // console.log("myvar2 is ",myvar2);
// // let myNewArray=Array.slice(2);
// //  let [var1,,var2]=Array;
// // console.log("value of var1 is",var1);
// // console.log("value of var2 is",var2);
// // console.log(myNewArray);






// // object
// // array are good but not sufficient
// // for real world data
// // objects stores key value pairs
// // objects dont have index

// // how to creat objects
// // const person = {
// //     name: "Rekha",
// //     age: 19,
// //     branch:"b.tech",
// //     hobbies:["dancing","bookReading","carRacing"]
// // };
// // // accesing the data from object
// // console.log(person);
// // console.log(person.name);
// // console.log(person.age);
// // console.log(person.hobbies);
// // // how to add key vlaue pair to object
// // person.gender="female";
// // console.log(person);
// // // accesing data by using []
// // console.log(person["age"]);


// // difference between dot and bracket notation
// // const key="email";
// // const person = {
// //     name: "Rekha",
// //     age: 19,
// //     branch:"b.tech",
// // " person hobbies":["dancing","bookReading","carRacing"]
// // };
// // person[key]="rrekhathakur222@gmail.com";
// // console.log(person);


// // how to iterate object
// // const person = {
// //     name: "Rekha",
// //     age: 19,
// //     branch:"b.tech",
// //     hobbies:["dancing","bookReading","carRacing"]
// // };



// // computed properties
// // const key1= "objkey1";
// // const key2 = "objkey2";
// // const value1 ="myvalue1";
// // const value2="myvlaue2";
// // const obj = {
// //     [key1] : value1,
// //     [key2] : value2
// // }
// // console.log(obj);

// // spread operator in array
// const array1=[1,2,3];
// const array2=[4,5,6];
// const newArray=[...array1,...array2];
// console.log(newArray);
// const newArray=[..."rekha"];
// console.log(newArray);



// spread operator in objects
// const obj1 = {
//     key1:"value1",
//     key2:"value2"
// };
// const obj2 = {
//     key3:"value3",
//     key4:"value4"
// };
// const newObject = {...obj1,...obj2};
// onsole.log(newObject);
// const newObject = {..."abc"}
// console.log(newObject);


// object destructuring
// const band = {
//     bandName: "rekha thakur",
//     famousSong: "nothing"
// }
// const {bandName,famousSong} = band;
// console.log(bandName);



// objects inside array
//vary useful in real world apllication
// const  users = [
//     {name:"rekha thakur",gender:"female", id:1},
//     {name:"sekha thakur",gender:"male", id:2},
//     {name:"pekha thakur",gender:"female", id:3},
//     {name:"qekha thakur",gender:"female", id:4},
// ]
// for(let user of users){
//     console.log(user.id);
// }


// // nested destrucring
// const [{name},user2,user3] = users;
// console.log(user3.name);
