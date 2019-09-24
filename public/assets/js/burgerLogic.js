// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("devour");//false

    var eatState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatState
    }).then(function() {
      location.reload();
    });
  });

  $(".form-eatDa").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    if ($(".form-control").val() != "") {
      var newBurger = {
        burger_name: $("#burger_input").val().trim()
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        // Reload the page to get the updated list
        location.reload();
      });
    } else {
      alert("Enter to Eat-Da-Burger!");
    }
  });
});
