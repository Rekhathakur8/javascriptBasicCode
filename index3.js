"use.strict";

//  functions declaration
// 1
// function management(){
//     console.log("denied...");
// }

// function expression
// const management = function(){
//     console.log("denied");
// }
// management();


// arrow function 
//  const management = () => {
//     console.log("denied");
//  }
//  const management =()=> console.log("denied");
//  management(1);

// function inside function
// const management = () => {
//     const management2 = () => {
//         console.log("start");
//     }
//     const system = () => {
//         console.log("system is off");
//     }
//     management2();
//     system();
// }
// management();



// lexical scope
/*function myWeb(){
    const myVar="value1";
    function myFunc(){
        const myVar="value2";
        console.log("inside myFunc value is :",myVar)
    }
    const myFunc2= function(){}
    const myFunc3 = () => {}
    console.log(myVar);
    myFunc();
}
myWeb();*/


// block scope vs function scope
// let and const are block scope and var is function scope
/*{
    // it is a block 
    // you can access this let in this block only not outside this block same as const
    let youh="me";
    console.log(youh);
    // you access this var outside and inside the block
    var name="you";
    console.log(name);
}*/

// default parameter
// function addTwo(a,b){
//     if(typeof b=== "undefined"){
//         b=1;
//     }
//     return a+b;
// }
// console.log(addTwo(4));

// othr wy to do this
/*function addTwo(a,b=0){
    return a+b;
}
console.log(addTwo(4,6));
*/

// rest parameter
function printNum(a,b,...c){
    // console.log("a is",a);
    // console.log("b is",b);
    // console.log("c is",c);
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
printNum(3,4,5,6,7,8,9);
