function orderSandwich(...args: any[]): void { //...args: collect the items specified in order sandwitch function 
    console.log("Sandwich order summary:");
    if (arguments.length === 0) {
        console.log("No items specified for the sandwich.");
    } else {
        console.log("Items include in sandwhich are");
        for (let i = 0; i < arguments.length; i++) {
            console.log(`${i + 1}. ${arguments[i]}`);
        }
    }
  }
  
  // Call the function three times with different number of arguments
  orderSandwich("Chicken", "Tomato", "Mayonnaise");
  orderSandwich("Chicken","Cheese");
  orderSandwich("Chicken", "Capsicum","Onion","Cheese"); 