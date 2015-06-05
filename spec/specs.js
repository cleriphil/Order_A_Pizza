describe('Pizza', function() {
  it("initializes a pizza", function() {
    var myPizza = new Pizza();
    expect(myPizza.pizzaSize).to.equal(false);
    expect(myPizza.toppings).to.eql([]);

  });

});
