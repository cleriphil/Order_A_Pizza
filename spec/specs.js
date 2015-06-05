describe('Pizza', function() {
  it("initializes a pizza", function() {
    var myPizza = new Pizza();
    expect(myPizza.pizzaSize).to.equal(false);
    expect(myPizza.toppings).to.eql([]);

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
