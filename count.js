const time=1000;

function raiseDough(callback) {
  setTimeout(function() {
    console.log("10");
    callback();
  }
  , 10*1000);
}

function rollDough(callback) {
  setTimeout(function() {
    console.log("9");
    callback();
  }
  , 9*1000);
}


//to pour a sauce 
function pourSauce(callback) {
  setTimeout(function() {
    console.log("8");
    callback();
  }
  , 8*1000);
}

//Add toppings 
function addToppings(callback) {;
  setTimeout(function() {
    console.log("7");
    callback();
  }
  , 7*1000);
}

//Bake pizza 
function bakePizza(callback) {
  setTimeout(function() {
    console.log("6");
    callback();
  }
  , 6*1000);
}

//Deivering pizza
function deliverPizza(callback) {
  setTimeout(function() {
    console.log("5");
    callback();
  }
  , 5*1000);
}

function four(callback) {
  setTimeout(function() {
    console.log("4");
    callback();
  }
  , 4*1000);
}
function three(callback) {
  setTimeout(function() {
    console.log("3");
    callback();
  }
  , 3*1000);
}
function two(callback) {
  setTimeout(function() {
    console.log("2");
    callback();
  }
  , 2*1000);
}
function one(callback) {
  setTimeout(function() {
    console.log("1");
    callback();
  }
  , 1*1000);
}


// Lets use all the function and put them one inside another 
raiseDough(()=>{
  rollDough(()=>{
    pourSauce(()=>{
      addToppings(()=>{
        bakePizza(()=>{
          deliverPizza(()=>{
              four(()=>{
                  three(()=>{
                      two(()=>{
                          one(()=>{
                              console.log("Timer has been Ended!");
                          });
                      });
                  });
              });
          });
        });
      });
    });
  });
});
