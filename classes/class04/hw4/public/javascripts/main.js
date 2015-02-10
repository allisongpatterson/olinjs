var $form = $("#ajax-form");
// var ingredients = require("./routes/ingredients.js");

var onSuccess = function(data, status) {
  var entry = "<form id='ajax-form' method='POST'> Name: <input type='text' name='name' value='"+data.name+"Tomato'/> Price: <input type='text' name='price' value='$0.25'/> <input type='submit' id='submit-button' value='Submit'></form>";
  $("#result").append(data);
};
  // alert("EHRMAHGEHRD you clicked Submit!");

var onError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};


// var respond = function(event) { 
//   event.preventDefault();
//   formData = $form.serialize();
//   var name = $form.find("[name='name']").val();
//   var price = $form.find("[name='price']").val();
//   formData = {
//     name: name,
//     price: price
//   };
//   console.log("responding");
//   };



$form.submit(function(event) {
  event.preventDefault();
  var $selForm = $(this);
  // console.log($selForm);
  console.log(event.currentTarget);
  console.log(this);

  formData = $form.serialize();

  var name = $form.find("[name='name']").val();
  var price = $form.find("[name='price']").val();
  formData = {
    name: name,
    price: price
  }
 
  console.log("howdy", formData);
  $.get("ingredients", formData)
    .done(onSuccess)
    .error(onError);
});


$(".add-button").click(function() {
    alert("EHRMAHGEHRD you clicked Add New!");
});

$(".edit-button").click(function() {
    // alert("EHRMAHGEHRD you clicked Edit!");
    // console.log($(this).parent().attr('id'));
    var editButton = this
    var id = $(editButton).parent().attr('id')
    var name = prompt("New Ingredient Name:");
    var price = prompt("New Ingredient Price:");
    $.post("/edit-ingredient", {
      newName: name,
      newPrice: price,
      id: id
    })
      .done(function(data, status) {
        console.log(data);
        $(editButton).siblings("p").html(name+" -- "+price);
      })
      .error(onError);
});

$(".out-button").click(function() {
    alert("EHRMAHGEHRD you clicked Out of Stock!");
});

$(".submit-button").click(function() {
    alert("EHRMAHGEHRD you clicked Submit!");
});