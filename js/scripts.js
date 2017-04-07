//B.L.


var Pizza = function (name,topping, size) {
  this.name = name;
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.cost = function(top,siz) {
  var cost=0;
  var result = if(this.topping>=top && this.topping==="1"){
    ("#outputOne").text("Cost is $15");
  } else if (this.toppin<=inputToppings){
    ("#outputTwo").text("Cost is $10");
  }
  return result;

}

//U.I.

$(document).ready(function() {
$("form#formone").submit(function(event) {
    event.preventDefault();
 var newPizza= new Pizza(inputToppings,inputSize);
 $("input:checkbox[name=toppings]:checked").each(function(){
   var inputToppings = $(this).val();
   var inputSize = $("#size").val();

newPizza.cost();
});

  });


});
