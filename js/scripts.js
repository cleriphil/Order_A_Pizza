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
  $("select#topping").val("");
  $("select#quantity").val("");
}


$(function() {
  var newPizza = new Pizza();
  var newOrder = new TotalOrder();
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
      newPizza.addTopping(new Topping(descriptions[x], parseInt(costs[x])));
    };
    console.log(newPizza.toppings)

    var inputtedQuantity = parseInt($('select#quantity').val());
    newPizza.setQuantity(inputtedQuantity);

///after this, the pizza is added to the order
    newOrder.addPizza(newPizza);
    $('.number_of_pies').text(newOrder.pizzas.length);

    newOrder.pizzas.forEach(function(pizza) {

      pizza.toppings.forEach(function(topping) {
        $('.toppings').append('<li>' + topping.description + '</li>');
      });
      $('.size').text(pizza.size);
      $('.quantity').text(pizza.quantity);
      $('.pizza_total').text('$' + pizza.cost);



    });

    // pizza.toppings.forEach(function(topping) {
    //   $('.toppings').append('<li>' + topping.description + ' $' + topping.cost + '</li>');
    // });


  });

});
