describe('pizzaPrice', function() {
    var testPizza = Object.create(Pizza);
    beforeEach(function () {
        testPizza.init();
    }); // before each end
    describe('pizzaPriceSet', function() {
        it('it should return a pizza price object of null', function() {
            testPizza.init();
            expect(testPizza.price).to.equal(null);
        }); //it end
    }); //pizzaPriceSet describe end
    describe('pizzaNameSet', function() {
        it('it should return a pizza name of null', function() {
            testPizza.init()
            expect(testPizza.name).to.equal(null);
        }); //it end
    }); //pizzaNameSet end
}); // parent describe end
