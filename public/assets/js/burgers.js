$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
   
       
    
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        
      }).then(
        function() {
          console.log(id);
          
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      
      event.preventDefault();
  
      var newBurger = {
        name: $("#burgerName").val().trim(),
    
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
  