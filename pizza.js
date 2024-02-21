function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "🧀";
      resolve(cheese);
    }, 1000);
  });
}

function makeDough(cheese, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "🍩";
      resolve(dough);
    }, 1000);
  });
}

function bakePizza(dough, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "🍕";
      resolve(pizza);
      // reject("Chef is ill");
      // agar resolve aur reject dono likhenge to pehle wala hi execute hoga
    }, 1000);
  });
};

// await waha lagana hai jo asynchornous hai jaise getCheese me setTimeout function hai 
// agar catch nahi karenge to code wahi stop ho jayega aur next line ka execute nahi hoga
  async function orderPizza(){
  try{
    const cheese = await getCheese();
    console.log("Here is your cheese", cheese);

    const dough = await makeDough(cheese);
    console.log("Here is your dough", dough);

    const pizza = await bakePizza(dough);
    console.log("Here is your pizza", pizza);
  } catch(err){
    console.log("error occured", err);
  }
  console.log("Process Ended");
}

orderPizza();

// getCheese()
//   .then((cheese) => {
//     console.log("Here is the cheese", cheese);
//     return makeDough(cheese);
//   })
//   .then((dough) => {
//     console.log("Here is the dough", dough);
//     return bakePizza(dough);
//   })
//   .then((pizza) => {
//     console.log("Here is the pizza", pizza);
//   })
//   .catch((data) => {
//     console.log("error occured", data);
//   })
//   .finally(() => {
//     console.log("Process ended");
//   });

// yaha sab jagah hum data likhe hai lekin value alag-alag hai
// getCheese()
//   .then((data) => {
//     console.log("Here is the cheese", data);
//     return makeDough(data);
//   })
//   .then((data) => {
//     console.log("Here is the dough", data);
//     return bakePizza(data);
//   })
//   .then((data) => {
//     console.log("Here is the pizza", data);
//   })
//   .catch((data) => {
//     console.log("error occured", data);
//   })
//   .finally(() => {
//     console.log("Process ended");
//   });

// callback hell
// getCheese((cheese) => {
//   makeDough(cheese, (dough) => {
//     bakePizza(dough, (pizza) => {
//       console.log("Got your pizza", pizza);
//     });
// });
// });
