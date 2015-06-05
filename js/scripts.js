// var Order = function() {
//   this.pizzas = [];
// };

var Pizza = function() {
  this.pizzaSize = false;
  this.toppings = []; //when the user selects toppings, it gets added
                      //to this array-- these two things will be
                      //connected in the front end/jQuery part
  this.quantity = 1;  //to order price
};

Pizza.prototype.setQuantity = function(amount) {
  this.quantity = amount;
};

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
  };
// var PizzaSize = function(description, cost) {//should this have cost here?
//   this.description = description;
//   this.cost = cost; //to pizza price
// };

var Topping = function(description, cost) {
  this.description = description;
  this.cost = cost; //to pizza price
};

Pizza.prototype.pizzaCost = function() {
  var totalCost = 0;
  this.toppings.forEach(function(topping){
    totalCost += topping.cost;
  });

  if (this.pizzaSize === "small") {
    totalCost += 4;
  } else if (this.pizzaSize === "medium") {
    totalCost += 6;
  } else if (this.pizzaSize === "large"){
    totalCost += 8;
  }

  return totalCost;


};
