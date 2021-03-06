// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// Create Todo
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		// Grabbing new to-do text from input
		var todoText = $(this).val();
		$(this).val(""); 
		// Create a new Li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-pencil-square-o").click(function() {
	$("input[type='text']").fadeToggle(500);
}); 