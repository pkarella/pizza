//B.L.
function Pizza(name,topping,sauce,crust,size,price){
this.name= name;
this.topping = topping;
this.sauce = sauce;
this.crust = crust;
this.size = size;
this.price = 10;
}


Pizza.prototype.cost = function(){
  if (this.topping ==="sausage" && this.sauce ==="marinara" && this.crust === "thin" && this.size === "small"){
  return this.price + 2;
} else if (this.topping ==="mushroom"&& this.sauce ==="meat"&& this.crust === "thick" && this.size === "large"){
return this.price + 3;
}
}


//U.I.

$(document).ready(function() {
$("#formone").submit(function(event) {
    event.preventDefault();
    var resultName = $("#name").val();
    var resultTopping = $("#topping").val();
    var resultSauce = $("#sauce").val();
    var resultCrust = $("#crust").val();
    var resultSize = $("#size").val();
    var newPizza = new Pizza (resultName, resultTopping, resultSauce, resultCrust,resultSize);

    $("p#outputOne").text(newPizza.cost());

  });
});
