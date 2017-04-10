//B.L.
function Pizza(name,topping,sauce,crust,size){
this.name= name;
this.topping = topping;
this.sauce = sauce;
this.crust = crust;
this.size = size;
this.price = 10;
}

Pizza.prototype.greeting = function(){
return ("Thankyou for your order "+ this.name +" Enjoy!!");

}



// Pizza.prototype.cost =function(){
// if ((this.topping ==="garlic" && this.sauce ==="marinara" && this.crust === "thin" && this.size === "small")||(this.topping ==="mushroom" && this.sauce ==="meat" && this.crust === "thin" && this.size === "small")||(this.topping === "garlic" && this.sauce ==="oliveoil" && this.crust === "thin" && this.size === "small")||(this.topping ==="sausage"&& this.sauce ==="marinara"&& this.crust === "thin" && this.size === "small")||(this.topping === "mushroom" && this.sauce ==="marinara" && this.crust === "thin" && this.size === "small")) {
//   return this.price + 2;
// } else if ((this.topping ==="garlic"&& this.sauce ==="oliveoil"&& this.crust === "thick" && this.size === "medium")||(this.topping ==="mushroom"&& this.sauce ==="meat"&& this.crust === "thick" && this.size === "medium")||(this.topping === "sausage" && this.sauce ==="oliveoil" && this.crust === "thin" && this.size === "small")||(this.topping ==="mushroom"&& this.sauce ==="marinara"&& this.crust === "thick" && this.size === "medium")) {
// return this.price + 3;
// }else if ((this.topping ==="sausage" && this.sauce ==="marinara" && this.crust === "thin" && this.size === "large")||(this.topping ==="mushroom" && this.sauce ==="marinara" && this.crust === "thin" && this.size === "large")||(this.topping === "sausage" && this.sauce ==="meat" && this.crust === "thick" && this.size === "large")||(this.topping ==="garlic" && this.sauce ==="marinara" && this.crust === "thin" && this.size === "large")) {
//   return this.price + 4;
//
// }
// }


Pizza.prototype.cost = function(){

for(var i =0; i<this.topping.length; i++){
  if (this.topping[i]==="sausage" && this.topping[i]==="mushroom" && this.topping[i]==="garlic"){
   this.price += 15;
   }

 if (this.topping[i]==="mushroom"){
 this.price += 4;
} if(this.topping[i]==="sausage"){
 this.price += 2;
}
return this.price;
}
}






//U.I.

$(document).ready(function() {
  $("#formone").submit(function(event) {
    event.preventDefault();
    var toppingArray=[];
    var resultName = $("#name").val();
    $("input:checkbox[name=topping]:checked").each(function(){
    toppingArray.push($(this).val());
    });
    var resultSauce = $("#sauce").val();
    var resultCrust = $("#crust").val();
    var resultSize = $("#size").val();


var newPizza = new Pizza (resultName,toppingArray,resultSauce, resultCrust,resultSize);



    $("p#outputOne").text("Your Total Will Be " + "$" + newPizza.cost(toppingArray));
    $("p#outputTwo").text(newPizza.greeting());


    $("#buttontwo").click(function(){
        $("p#outputOne").hide();
    });
    // $("#name").val('');
    //  $("#topping").val('');
    //  $("#sauce").val('');
    //  $("#crust").val('');
    // $("#size").val('');
  });
});
