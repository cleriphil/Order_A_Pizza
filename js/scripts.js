var TotalOrder = function() {
  this.pizzas = [];
  this.cost = 0;
};

TotalOrder.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
  this.cost += pizza.cost;
};

var Pizza = function() {
  this.size = false;
  this.toppings = [];
  this.quantity = 1;
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
  this.size = size;

  if (size === "small") {
    this.cost += 4;
  } else if (size === "medium") {
    this.cost += 6;
  } else if (size === "large"){
    this.cost += 8;
  };
};

$(function() {
  var newPizza = new Pizza();
  $('form#order_pizza').submit(function(event) {
    event.preventDefault();
    var inputtedSize = $('select#size').val();
    newPizza.setSize(inputtedSize);




    var costs = [];
    var descriptions = [];
    $('#multipleSelect :selected').each(function(){
      costs.push($(this).val());
      descriptions.push($(this).text());
    });

    var numberOfToppings = descriptions.length;
    for(x=0;x<numberOfToppings;x++){
      newPizza.addTopping(new Topping(descriptions[x], costs[x]));
    };

    console.log(newPizza.toppings)


    $('.test').text(newPizza.toppings[0].description); //for testing
    $('.test2').text(newPizza.toppings[1].description); //for testing
    // $('.test').append(inputtedSize);

  });

});
