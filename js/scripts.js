var Pizza = function() {
  this.pizzaSize = false;
  this.toppings = []; //when the user selects toppings, it gets added
                      //to this array-- these two things will be
                      //connected in the front end/jQuery part
};

var PizzaSize = function(description, cost) {
  this.description = description;
  this.cost = cost;
};

var Topping = function(description, cost) {
  this.description = description;
  this.cost = cost;
};
