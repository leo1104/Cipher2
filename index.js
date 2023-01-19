

// make a function for greeting someone and print the message in the console

// let a = prompt("Hey");

// function any() {
//     alert(a)
// }




// create a function in which you declare 2 variables and print them with a sentence and the
// variables should be in between the sentence. 

const b=2;
// if(b===2){
//     console.log("asdasd");
// }else{
//     console.log("error");
// }



// make 3 functions after that call these 3 functions inside the sitch statement for some cases 




// switch (b) {
//     case value: 2 cases 
        
//         break;

//     default:
//         break;
// }


// for(let i=100;i>0;i--){
//     console.log(i);
// }


// make a for loop and print a count of 1-50 and the output should contain some sentence with the count 

// console.log("hello");
// console.warn("WEarn");
// console.error("err");


// const a=20

// const person = {
//     name:"TestSubject",
//     // key value pair 
//     age:23
// }

// console.log(person['age']);








// make an object of your preference and call a key value pair that is present inside the object 

// const animal={
//     class:'dog',
//     food:'dog food'
// }

// console.log(animal.food);








// const person={};


// person.name="Test"

// console.log(person);







// make an empty object and assign key value pairs to the object conditionally
// if else 
// switch 


// lets say if a====2 , object should contain a property or a key value pair as name:"tt" 

// lets say if a====5 , object should contain a property or a key value pair as class:"5" 


// 5==2 //false
// const person={};

// const a=5;

// if(a===2){
//     person.name="pq"
// }else{
//     person.age=22
// }

// console.log(person);



//2 parameters/arguments in setTimeout

//1st==> function that you want to run after a particular time has passed
//2nd==> time itself in milliseconds 


// function greet() {
//     console.log("gooofy");
// }

// setTimeout(greet,4000);

// console.log("2nd");


// data structure in any programming language



// const arr1 = ["Kela","seb","badam","kiwi",6]

// 2 argument, others as well


// 2 argumnets/parameters 

// 1st starting index /index 

// 2nd argument ==> how many elements you want to remove from the array 

// 1st operation remove 
// arr1.splice(2,1)

// 2nd operation add 
// arr1.splice(2,0,"aam","patang")


//3rd operation modify or add as well as delete at the same time

// const removed =arr1.splice(2,2,"aam","patang")

// console.log(arr1);

// console.log(removed);











// create a function that logs something in the console and display it after 7 seconds 






//create 4 array which has 5 values


// apply add functionality using splice in 1st array

// apply remove functionality using splice in 2nd array

// apply both add and remove functionality using splice in 3nd array

// apply remove functionality using splice in 4th array and store the removed elements and display them





// const arr = [2,3,4,6,7,8]


// 1st argument of map => each value of the array element 

// 2nd argument of map => index at each step
 
// function fun1(value,index,array) {
//     console.log(value);
// }

// arr.map(fun1)


// difference => you have to declare varibale to use for loop, iterate it and give a stopping conditions. But in map no conditions or declarations are required 


// arr.map((b,i)=>{
//     console.log(b)
// })


// for element =2, index=0

// for element =3, index=1

// for element =4, index=2

// for element =6, index=3

// for element =7, index=4

// for element =8, index=5



// create a map function and add index value to the given element and print all the elements one by one 


// example arr=[2,3,4,5,6]

// 1st element of array is 2, so it becomes 2+0=2

// where 0 is the position or the index 

// ||ly 3+1=4

// where 1 is the postion or the index in the array for 3

// 2
// 4
// 6
// 8
// 10



// const arr = [
//     {type:"animal",breed:"dog"},
//     {type:"human",breed:"male"},
//     {type:"bird",breed:"crow"},
//     {breed:"crow"}
// ];


// console.log(arr);
// mapping objects 
// arr.map((val)=>{
//     console.log(val.type);
// })

// const arr=[1,2,3,4,5,6,7,8]
//the function in the filter always has a condition by which we filter out unnessasary itemsor values.
//seperate function
// function checkNum(arr) {
//     // console.log(arr);
//     return arr>=5
// }

// const result = arr.filter(checkNum)//takes 1st argument as a function
//arrow function
// const result = arr.filter((element)=>element>=5)
// console.log(result);





// 1>=5 //false []
// 2>=5 //false []
// 3>=5 //false []
// 4>=5 //false []
// 5>=5 //true  [5]
// 6>=5 //true  [5,6]
// 7>=5 //true  [5,6,7]
// 8>=5 //true  [5,6,7,8]




// const arr=[1,2,3,4,5,6,7,8,9,10];


// I want a new array from "arr" array and I want to extract only even numbers from arr.   new arr =>[2,4,6,7,10]

// const result = arr.filter((element)=>element%2==0);

// console.log(result);




const arr=[{
    name:"test",
    age:16,
    rollNum:{
        argss:12,
        interest:"123"
    }
},
{
    name:"test1",
    age:17,
    rollNum:{
        argss:13,
        interest:"123"
    }
},
{
    name:"test2",
    age:18,
    rollNum:{
        argss:14,
        interest:"123"
    }
},
{
    name:"test3",
    age:19,
    rollNum:{
        argss:15,
        interest:"123"
    }
}];

// const result = arr.filter((element)=>element.age==17)
// const result = arr.filter((element)=>element.age>=18)
// const result = arr.filter((element)=>element.rollNum.argss==14)

// console.log(result);

// arr.map((elem)=>console.log(elem.rollNum['argss']))


// newPostUpVote
// newCommentMention
// newAnnouncement
// newBadge
// newInviteUser
// newUserGettingStarted



// Q- print an array which contains all the objects that have notificationType as newPostUpVote


// = assignment operator ex:a=2
// == comparison operator true for different data types like string and numbers ex:2==2
//=== comparison operator false for different data types like string and numbers ex 2===2


// console.log(2==2);
// console.log(2==='2'); 



// Q- compare a string number with an integer type number (the two numbers should be same) using "==" and "==="

const arr1=[1,2,3,4,5,6];

//reduce, filter and map are only applicable on arrays, strictly recommended not to use with objects

const z = arr1.reduce((h1,h2)=>{
    
    return h1;
})

// console.log(z);


// 1st iteration
// h1=> 1 [2,3,4,5,6]
// h2=> 2 [3,4,5,6]

// // 2nd iteration
// h1=> 3 [3,4,5,6]
// h2=> 3 [4,5,6]

// // 3rd iteration
// h1=> 6 [4,5,6]
// h2=> 4 [5,6]

// // 4th iteration
// h1=> 10 [5,6]
// h2=> 5 [6]

// // 5th iteration
// h1=>15 [6]
// h2=> 6 []


// given an array of elements

let arr12 = [1,2,3,4,5,6];

//reduce the array to the multiplication of each number

// 1*2*3*4*5*6 =>720 
// also show all the iterations in console

// function fun1() {
//     console.log("gg");
// }

// let a = document.getElementById("lasd");

// console.log(a);

// a.addEventListener('click',()=>console.log('gg'))




// alert("asdsa")



// make a button and when the button is clicked an alert should popup saying stay hydrated


// do this part in 2 buttons.in 1st button use html onclick attribute,
// in 2nd button use eventListeners

// let x = document.getElementsByClassName('lol')

// console.log(x);

// //addEventListener is always a single element
// x[0].addEventListener('click',()=>console.log("asdasd"))


// add 3 elements with the same class name

// clicking on all 3 should give me different outputs in the form of alert boxes

// 1st element click should give me hello

// 2nd element click should give me //name

//3rd should greet me