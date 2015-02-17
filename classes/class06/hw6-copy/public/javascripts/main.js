var $form = $(this);

var onSuccess = function(data, status) {
  $(data).append("#result");
  console.log(data);
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
 
  $.get("/new-twote", formData)
    .done(onSuccess)
    .error(onError);
});


$("#new").click(function (data, status) {
    console.log(data)
    var newButton = this;
    var id = $(newButton).parent().attr('id');
    var author = $('#twote-author').val();
    var text = $('#twote-text').val();
    $.post("/new-twote", {
      author: author,
      text: text
    })
      .done(onSuccess)
      .error(onError);
});


$(".edit-button").click(function() {
    var editButton = this;
    console.log($(editButton).siblings('p'));
    var id = $(editButton).parent().attr('id');
    var author = "moose" //$(editButton).siblings('span');
    var newText = prompt("New Text:");
    $.post("/edit-twote", {
      author: author,
      newText: newText,
      id: id
    })
      .done(function(data, status) {
        // console.log("howdy");
        $(editButton).siblings("p").html('"'+newText+'"' + " - " + author);
      })
      .error(onError);
      // console.log("here");
});

$(".delete-button").click(function() {
    var deleteButton = this;
    var id = $(deleteButton).parent().attr('id');
    var author = $(deleteButton).parent().attr('author');
    var text = $(deleteButton).text;
    $.post("/delete-twote", {
      name: author,
      name: text,
      id: id
    })
      .done(function(data, status) {
        $(deleteButton).parent().remove();
      })
      .error(onError);
});
