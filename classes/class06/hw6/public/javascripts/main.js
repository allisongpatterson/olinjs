var $form = $(this);
console.log($form);
var $currUser = $("#currUser");


var onSuccess = function(data, status) {
  $("#result").append(data);
};

var onError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

$form.submit(function(event) {
  event.preventDefault();
  // var $selForm = $(this);
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


$(".submit").click(function (data,status) {
  var label = data.author + data.text;
  $form.attr('id',data._id);
  $form.find('span').html(label);
  $form.find('input.submit').val();

    // var submitButton = this;
    // var id = $(submitButton).parent().attr('id');
    // var author = $(submitButton).parent('value');
    // var text = $(submitButton).parent('value');
    // console.log(text);
    // $.post("/new-twote", {
    //   author: author,
    //   text: text,
    // })
    //   .done(onSuccess)
    //   .error(onError);
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
