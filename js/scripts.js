// var Order = function() {
//   this.pizzas = [];
// };

var Pizza = function() {
  this.pizzaSize = false;
  this.toppings = []; //when the user selects toppings, it gets added
                      //to this array-- these two things will be
                      //connected in the front end/jQuery part
  this.cost = 0;
  this.quantity = 1;  //should this start at one?
};

Pizza.prototype.setQuantity = function(amount) {
  this.quantity = amount;
};

var PizzaSize = function(description, cost) {//should this have cost here?
  this.description = description;
  this.cost = cost;
};

var Topping = function(description, cost) {
  this.description = description;
  this.cost = cost;
};
