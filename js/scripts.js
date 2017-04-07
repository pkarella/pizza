//B.L.

var price =0;
var Pizza = function (topping) {
  this.topping = topping;
}

Pizza.prototype.cost = function() {
   if(this.topping === "Sausage"){
   price+=5;
} return price;
}

//U.I.

$(document).ready(function() {
$("#formone").submit(function(event) {
    event.preventDefault();

 var inputTopping = $("#topping").val();
var newPizza= new Pizza(inputToppings);
 newPizza.cost();

  });
});
