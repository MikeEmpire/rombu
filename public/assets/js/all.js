$(document).ready(function() {

	$(document).on("click", "button.delete", deleteVideo);

	function deleteVideo() {
		var id = $(this).data("id");
		$.ajax({
			method: "DELETE",
			url: "/api/video/"+id
		})
		.done(function() {
			alert("delete");
			location.reload();
		})
	}

});