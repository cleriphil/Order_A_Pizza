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

function resetFields() {
  $("select#size").val("");
  $("select#multipleSelect").val("");
  $("select#quantity").val("");
}


$(function() {

  var newOrder = new TotalOrder();
  $('form#order_pizza').submit(function(event) {
    var newPizza = new Pizza();
    event.preventDefault();
    $('#cart').show();

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
      newPizza.addTopping(new Topping(descriptions[x], parseInt(costs[x])));
    };
    console.log(newPizza.toppings)

    var inputtedQuantity = parseInt($('select#quantity').val());
    newPizza.setQuantity(inputtedQuantity);

///after this, the pizza is added to the order
    newOrder.addPizza(newPizza);
    $('.number_of_pies').text(newOrder.pizzas.length);

    resetFields();

    newPizza.toppings.forEach(function(topping) {
      $('.pizza_info').append('<h5>Toppings:</h5>' + topping.description);
    });
    $('.pizza_info').append('<h5>Size:</h5>' + newPizza.size);
    $('.pizza_info').append('<h5>Quantity:</h5>' + newPizza.quantity);
    $('.pizza_info').append('<h5>Cost:</h5>' +'$' + newPizza.cost + '<hr>');
    $('.order_total').text(newOrder.cost);



  });
});
