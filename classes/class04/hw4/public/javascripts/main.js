var $form = $("#ajax-form");

var onSuccess = function(data, status) {
  var img = "<img src='"+"images/cat.jpg"+"'/>";
  alert("EHRMAHGEHRD you clicked Submit!");
  $("#result").html(img);
};

var onError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

$form.submit(function(event) {
  event.preventDefault();
  formData = $form.serialize();
  // var mood = $form.find("[name='mood']:checked").val();
  // var name = $form.find("[name='name']").val();
  // formData = {
  //   mood: mood,
  //   name: name
  // }
  $.get("ingredients", formData)
    .done(onSuccess)
    .error(onError);
});


$("#add-button").click(function() {
    alert("EHRMAHGEHRD you clicked Add New!");
});

$("#edit-button").click(function() {
    alert("EHRMAHGEHRD you clicked Edit!");
});

$("#out-button").click(function() {
    alert("EHRMAHGEHRD you clicked Out of Stock!");
});
