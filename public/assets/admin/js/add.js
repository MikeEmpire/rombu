$("#add-btn").on("click", function(event) {

  event.preventDefault();
  // Make a newVideo object
  var newVideo = {
    name: $("#videoName").val().trim(),
    company: $("#videoCompany").val().trim(),
    url: $("#videoURL").val().trim(),
    description: $("#videoDescription").val().trim(),
    featured: $("#videoFeatured").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/video/", newVideo)
    // On success, run the following code
    .done(function(data) {
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#videoName").val("");
  $("#videoCompany").val("");
  $("#videoURL").val("");
  $("#videoDescription").val("");
  $("#videoFeatured").val("");

});
