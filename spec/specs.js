describe('pizzaPrice', function() {
    var testPizza = Object.create(Pizza);
//    var choice = Object.create(Choice);
    beforeEach(function () {
        testPizza.init();
    }); // before each end
    describe('pizzaPriceSet', function() {
        it('it should return a pizza price object of null', function() {
            testPizza.init();
            expect(testPizza.price).to.equal(null);
        }); //it end
        it('it should return a price of 7.50 for cheese', function() {
            testPizza.init();
            testPizza.setName('cheese');
            testPizza.setPrice();
            expect(testPizza.price).to.equal(7.50);
        }); //it end
        it('it should return a price of 10.00 for pepperoni', function() {
            testPizza.init();
            testPizza.setName('pepperoni');
            testPizza.setPrice();
            expect(testPizza.price).to.equal(10.00);
        }); //it end
    }); //pizzaPriceSet describe end
    describe('pizzaNameSet', function() {
        it('it should return a pizza name of null', function() {
            testPizza.init();
            expect(testPizza.name).to.equal(null);
        }); //it end
        it('it should return a pizza name of cheese', function() {
            testPizza.init();
            testPizza.setName('cheese');
            expect(testPizza.name).to.equal('cheese');
        });//it end
    }); //pizzaNameSet describe end
}); // parent describe end
