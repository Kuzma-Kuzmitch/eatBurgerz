$(function() {

$(".create-form").on("submit", function(event) {
  event.preventDefault();

  var newBurger = {
    name: $("#burger").val().trim(),
    devoured: 0
  };

  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log("Order up!");
      location.reload();
    }
  );
});

$(".change-devour").on("click", function(event) {
  var id = $(this).data("id");

  var newDevour = {
    devoured: 0
  };

  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newDevour
  }).then(
    function() {
      console.log("changed sleep to", newDevour);
      location.reload();
    }
  );
});








});
