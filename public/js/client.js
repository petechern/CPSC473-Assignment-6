// Client side javascript
// Call our API and updates the html with the response 

$('button').click(function() {
	$.ajax({
		type: "POST", 
		url: "/play/" + $(this).val(),
		success: function(json) {
			$("#outcome").html(json.outcome);
			$("#wins").html(json.wins);
			$("#losses").html(json.losses);
			$("#ties").html(json.ties);
		},
		dataType: "json"
	});
});
