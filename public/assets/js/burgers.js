$(function() {
    $(".devourForm").on("submit", function(event) {
      event.preventDefault();
      var id = $(this).children("#burgersId").val();
    
       
      $.ajax("/api/burgers/" + id, {
        type: "PUT"
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
         devoured: false    
       };
  
       $.ajax("/api/burgers", {
         type: "POST",
         data: newBurger
       }).then(
         function() {
           console.log("created new burger!");
          
          location.reload();
        }
       );
    
  });
});