var $form = $("#ajax-form");

var onSuccess = function(data, status) {
  $("#result").append(data);
};

var onError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

$form.submit(function(event) {
  event.preventDefault();
  var $selForm = $(this);
  // console.log($selForm);
  // console.log(event.currentTarget);
  // console.log(this);

  formData = $form.serialize();

  var author = $form.find("[name='author']").val();
  var text = $form.find("[name='text']").val();
  formData = {
    author: author,
    text: text
  }
 
  $.get("new-twote", formData)
    .done(onSuccess)
    .error(onError);
});


$(".submit").click(function() {
    alert("EHRMAHGEHRD you clicked Add New!");
    var addButton = this;
    var author = prompt("hey");
    var text = prompt("yo");
    $.post("/new-twote", {
      author: author,
      text: text,
      id: id
    })
      .done(onSuccess)
      .error(onError);
});


$(".edit-button").click(function() {
    var editButton = this;
    var id = $(editButton).parent().attr('id');
    var name = prompt("New Ingredient Name:");
    var price = prompt("New Ingredient Price:");
    $.post("/edit-ingredient", {
      newName: name,
      newPrice: price,
      id: id
    })
      .done(function(data, status) {
        $(editButton).siblings("p").html(name+" -- $"+price);
      })
      .error(onError);
});

$(".out-button").click(function() {
    var outButton = this;
    var id = $(outButton).parent().attr('id');
    var name = $(outButton).parent().attr('name');
    var price = $(outButton).price;
    $.post("/remove-ingredient", {
      name: name,
      name: price,
      id: id
    })
      .done(function(data, status) {
        $(outButton).parent().remove();
      })
      .error(onError);
});
