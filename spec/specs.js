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

  it("adds a topping to a pizza", function() {
    var myPizza = new Pizza();
    var myTopping = new Topping("pepperoni", 2);
    myPizza.addTopping(myTopping);
    expect(myPizza.toppings).to.eql([myTopping]);

  });

  it("determines the price based on the toppings", function() {
    var pizza1 = new Pizza();
    var Pepperoni = new Topping("pepperoni", 2);
    var Bacon = new Topping("bacon", 3);
    var extraCheese = new Topping("extra cheese", 1);
    var Peppers = new Topping("peppers", 2);
    pizza1.addTopping(Pepperoni);
    pizza1.addTopping(Bacon);
    pizza1.addTopping(extraCheese);
    pizza1.addTopping(Peppers);
    expect(pizza1.pizzaCost()).to.equal(8);
  });

  it("determines the price of a pizza based on its size", function() {
    var pizza1 = new Pizza();
    pizza1.pizzaSize = "small";
    expect(pizza1.pizzaCost()).to.equal(4);
    });

    it("determines the total price of a pizza", function() {
      var pizza1 = new Pizza();
      pizza1.pizzaSize = "large";
      var Pepperoni = new Topping("pepperoni", 2);
      var Bacon = new Topping("bacon", 3);
      var extraCheese = new Topping("extra cheese", 1);
      var Peppers = new Topping("peppers", 2);
      pizza1.addTopping(Pepperoni);
      pizza1.addTopping(Bacon);
      pizza1.addTopping(extraCheese);
      pizza1.addTopping(Peppers);
      expect(pizza1.pizzaCost()).to.equal(16);
    });


});

describe('Topping', function() {
  it("initializes a topping", function() {
    var myTopping = new Topping("pepperoni", 2)
    expect(myTopping.description).to.equal("pepperoni");
    expect(myTopping.cost).to.equal(2);
  });


});




// describe('PizzaSize', function() {
//   it("initializes a pizza size", function() {
//     var myPizzaSize = new PizzaSize("small", 4);
//     expect(myPizzaSize.description).to.equal("small");
//     expect(myPizzaSize.cost).to.equal(4);
//   });
//
//   it("adds a size option to a pizza", function() {
//     var myPizza = new Pizza();
//     var myPizzaSize = new PizzaSize("small", 4);
//     myPizza.pizzaSize = myPizzaSize;
//     expect(myPizza.pizzaSize).to.eql(myPizzaSize);
//   });
//
// });
