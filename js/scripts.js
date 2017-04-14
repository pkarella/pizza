//B.L.
function Pizza(name,topping,sauce,crust,size){
  this.name= name;
  this.topping = topping;
  this.sauce = sauce;
  this.crust = crust;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.greeting = function(){
  return ("Thankyou for your order "+ this.name +" Enjoy!!");
}

Pizza.prototype.cost = function(){
  if(this.sauce=== "marinara"){
    this.price += 1;
  } else if(this.sauce=== "meat"){
    this.price += 2;
  } else if(this.sauce=== "oliveoil"){
    this.price += 1;
  }
  if(this.crust=== "thin"){
    this.price += 1;
  } else if(this.crust=== "thick"){
    this.price += 2;
  }
  if(this.size=== "small"){
    this.price += 5;
  } else if(this.size=== "medium"){
    this.price += 7;
  } else if(this.size=== "large"){
    this.price += 9;
  }
  if(this.topping=== 6){
    this.price += 4;
  } else if(this.topping === 4 ){
    this.price +=3;
  } else if(this.topping === 3){
    this.price +=2;
  } else if(this.topping<=2){
    this.price +=1;
  }
    return this.price;
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
    var finalPizzaCost= toppingArray.length;

    var newPizza = new Pizza (resultName,finalPizzaCost,resultSauce, resultCrust,resultSize);

    $("#output").show();
    $("#formone").hide();
    $("p#outputOne").text("Your Total Will Be " + "$" + newPizza.cost());
    $("p#outputTwo").text(newPizza.greeting());
    $("#buttontwo").click(function(event){
      $("#formone").show();
      $("#output").hide();
    });
  });
});
