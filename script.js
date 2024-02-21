/*************** Promises in JavaScript ***************/

// Promises introduced in JavaScript in 2015 to remove problem occur by callback hell.
// In JavaScript, a promise is a good way to handle asynchronous operations. It is 
// used to find out if the asynchronous operation is successfully completed or not.
// A promise may have one of three states.
// Pending
// Fulfilled
// Rejected

//              Pending       
//              Promise
//       _____________|_____________
//       |                         | 
// fulfill                      reject 
// .then(onFulfillment)       .catch(onRejection)

// Creating a Promise 
// To create a promise object, we use the Promise() constructor.
// let variable1 = new Promise(function(resolve, reject){
//     //do something
// });
// The Promsie() constructor takes a function as an argument. The function 
// also accepts two functions resolve() and reject().
// If the promise returns successfully, the resolve() function is called. 
// And, if an error occurs, the reject() function is called.

const ticket = new Promise(function(reso, rej){
    const isBoarded = true;
    // if(isBoarded){
    //     reso("You are in the flight");
    // }else{
    //     rej("You missed your flight");
    // };
    (isBoarded )? reso("You are") : rej("You are not");

});

// Using a Promise
// The then() method
// The then() method is used with the callback when the promise is successfully 
// fulfilled or resolved.

// The catch() method
// The catch() method is used with the callback when the promise is rejected or  
// if an error occurs.

// The finally() method
// The finally() method gets executed when the promise is either resolved successfully 
// or rejected.


ticket.then((data)=>{
    console.log("Wohoo,", data);
}).catch((data)=>{
    console.log("Oops,", data)
}).finally(()=>{
    console.log("I'm always executed");
});





