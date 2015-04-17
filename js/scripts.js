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
    var Order = { Total: 0, Cheese: 0, Pepperoni: 0 };
    $('form#new_Order').submit(function() {
        $('.form1').hide();
        $('.form2').show();

        event.preventDefault();
       });




    $('form#pizza').submit(function() {
        event.preventDefault();
        var pizza_Choice = $('select#pizza_Choice').val();
        var pizza = Object.create(Pizza);
        pizza.init();
        pizza.setName(pizza_Choice);
        pizza.setPrice();
        var x = document.getElementById("pizza_Amount").selectedIndex;
        var total = pizza.price * x;

        $('#result').fadeIn();
        $('.price').text(total);

    }); //end form pizza
    $('#pizza_Choice').change(function() {
        var value = this.value;



        $('#result').hide();
        $('#images').text("");
        if (value === "Cheese") {
            $('#images').text("");
            $('#images').append('<img id="cheese" class = "images" src="http://themommygamers.com/wp-content/uploads/8880327_orig.jpeg" />')
        }
        else if (value === "Pepperoni") {
            $('#images').text("");
            $('#images').prepend('<img id ="pepperoni" class = "image" src="http://www.silviocicchi.com/pizzachef/wp-content/uploads/2015/02/p41.jpg" />')
        }
        $('#pizza_Amount').change(function() {

            var subtotal = 7.50 * document.getElementById("pizza_Amount").selectedIndex;
            if (value === "Cheese") {
            $('#images').text("");
            $('#images').append('<img id="cheese" class = "images" src="http://themommygamers.com/wp-content/uploads/8880327_orig.jpeg" />')
            $('#subtotal').html('<p> Your subtotal is $</p>' + subtotal);
            }
             else if (value === 'Pepperoni') {
            subtotal = 10.00 * document.getElementById("pizza_Amount").selectedIndex;
            $('#images').text("");
            $('#images').prepend('<img id ="pepperoni" class = "image" src="http://www.silviocicchi.com/pizzachef/wp-content/uploads/2015/02/p41.jpg" />')
            $('#subtotal').html('<p> Your subtotal is $</p>' + subtotal);
            }
    });
    });
     //#pizza_Choice select end


}); //function() end
