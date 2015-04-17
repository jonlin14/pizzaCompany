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
    $('form#new_Order').submit(function() {
        event.preventDefault();
        $('.form1').hide();
        $('.form2').show();
    }); //end form new_Order

    $('form#pizza').submit(function() {
        event.preventDefault();
        var pizza_Choice = $('select#pizza_Choice').val();
        var pizza = Object.create(Pizza);
        var amountOfPizzas = document.getElementById("pizza_Amount").selectedIndex;
        pizza.init();
        pizza.setName(pizza_Choice);
        pizza.setPrice();
        var total = pizza.price * amountOfPizzas;
        $('#result').fadeIn();
        $('.price').text(total);
        $('#subtotal').text('');
    }); //end form pizza

    $('#pizza_Choice').change(function() {
        var value = this.value;
        $('#result').hide();
        $('#images').text("");

        if (value === "Cheese") {
            $('#images').text("");
            $('#images').append('<img id="cheese" class = "images" src="http://themommygamers.com/wp-content/uploads/8880327_orig.jpeg" />');
        }

        else if (value === "Pepperoni") {
            $('#images').text("");
            $('#images').prepend('<img id ="pepperoni" class = "image" src="http://www.silviocicchi.com/pizzachef/wp-content/uploads/2015/02/p41.jpg" />');
        }

        $('#pizza_Amount').change(function() {
            $('#result').hide();
            amountOfPizzas = document.getElementById("pizza_Amount").selectedIndex;
            var subtotal = 7.50 * amountOfPizzas;

            if (value === "Cheese") {
            $('#images').text("");
            $('#images').append('<img id="cheese" class = "images" src="http://themommygamers.com/wp-content/uploads/8880327_orig.jpeg" />');
            $('#subtotal').html('<p> Your subtotal is $ ' + subtotal + ' for ' + amountOfPizzas + ' cheese pizzas </p>');
            }

            else if (value === 'Pepperoni') {
            subtotal = 10.00 * amountOfPizzas;
            $('#images').text("");
            $('#images').prepend('<img id ="pepperoni" class = "image" src="http://www.silviocicchi.com/pizzachef/wp-content/uploads/2015/02/p41.jpg" />');
            $('#subtotal').html('<p> Your subtotal is $ ' + subtotal + ' for ' + amountOfPizzas + ' pepperoni pizzas </p>');
            }
        }); //end #pizza_Amount
    }); //#pizza_Choice select end
}); //function() end
