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
                    if (this.name === 'cheese') {
                        this.price = 7.50;
                    }//if end
                    else if (this.name === 'pepperoni') {
                        this.price = 10.00;
                    }//else end
                }//setPrice end
            } // var pizza end
