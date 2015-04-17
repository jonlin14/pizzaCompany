//var choice = { 'cheese': 7.50, 'pepperoni': 10.00 };

var Pizza = {

                init: function() {
                this.price = null;
                this.name = null;
                }, //init end
                setName: function(newName) {
                this.name = newName;
                }, //setName end
                setPrice: function() {
                    if (this.name === 'Cheese') {
                        this.price = 7.50;
                    }//if end
                    else if (this.name === 'Pepperoni') {
                        this.price = 10.00;
                    }//else if end
                }//setPrice end
            } // var pizza end

$(function() {
    $('form#pizza').submit(function() {
        event.preventDefault();
        var pizza_Choice = $('select#pizza_Choice').val();
        console.log(pizza_Choice);
        var pizza = Object.create(Pizza);
        pizza.init();
        pizza.setName(pizza_Choice);
        pizza.setPrice();

        $('.price').text(pizza.price);

    }); //form#pizza end

}); //function() end
