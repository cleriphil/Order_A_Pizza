describe('Pizza', function() {
  it("initializes a pizza", function() {
    var myPizza = new Pizza("small");
    expect(myPizza.pizzaSize).to.equal("small");
    expect(myPizza.toppings).to.eql([]);

  });

});
