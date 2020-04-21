
$(function() {
    $(".devour-btn").on("click", function(event) {
      var id = $(this).data("id");
      console.log("testF");
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {devoured: true}
      }).then(
        function() {
          console.log("devoured burger with id " + id);
          
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
     
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0
      };
  
      
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          
          location.reload();
        }
      );
    });
  });
  