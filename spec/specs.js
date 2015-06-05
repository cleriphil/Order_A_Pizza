describe('Pizza', function() {
  it("initializes a pizza", function() {
    var myPizza = new Pizza();
    expect(myPizza.pizzaSize).to.equal(false);
    expect(myPizza.toppings).to.eql([]);
    expect(myPizza.quantity).to.eql(1);
  });

  it("sets the quanity of pizza", function() {
    var myPizza = new Pizza();
    myPizza.setQuantity(5);
    expect(myPizza.quantity).to.equal(5);
  });

});

describe('Topping', function() {
  it("initializes a topping", function() {
    var myTopping = new Topping("pepperoni", 2)
    expect(myTopping.description).to.equal("pepperoni");
    expect(myTopping.cost).to.equal(2);
  });

  it("adds a topping to a pizza", function() {
    var myPizza = new Pizza();
    var myTopping = new Topping("pepperoni", 2);

    myPizza.toppings.push(myTopping);
    expect(myPizza.toppings).to.eql([myTopping]);

  });

});

describe('PizzaSize', function() {
  it("initializes a pizza size", function() {
    var myPizzaSize = new PizzaSize("small", 4);
    expect(myPizzaSize.description).to.equal("small");
    expect(myPizzaSize.cost).to.equal(4);
  });

  it("adds a size option to a pizza", function() {
    var myPizza = new Pizza();
    var myPizzaSize = new PizzaSize("small", 4);
    myPizza.pizzaSize = myPizzaSize;
    expect(myPizza.pizzaSize).to.eql(myPizzaSize);
  });

});
