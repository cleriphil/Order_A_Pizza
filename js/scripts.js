// var TotalOrder = function() {
//   this.pizzas = [];
//   this.cost = 0;
// };
//
// TotalOrder.prototype.addPizza = function(pizza) {
//   this.pizzas.push(pizza);
//
// };

var Pizza = function() {
  this.pizzaSize = false;
  this.toppings = []; //when the user selects toppings, it gets added
                      //to this array-- these two things will be
                      //connected in the front end/jQuery part
  this.quantity = 1;  //to order price
  this.cost = 0;
};

Pizza.prototype.setQuantity = function(amount) {
  this.quantity = amount;
  this.cost *= amount;
};

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
  this.cost += topping.cost;
};

var Topping = function(description, cost) {
  this.description = description;
  this.cost = cost;
};

Pizza.prototype.setSize = function(size) {
  if (size === "small") {
    this.cost += 4;
  } else if (size === "medium") {
    this.cost += 6;
  } else if (size === "large"){
    this.cost += 8;
  };
};
