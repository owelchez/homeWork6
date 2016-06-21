
$('#animalForm').on('submit', function () {
			var animalInput = $('#animalInput').val();
			console.log('You\'re trying to search for: ', animalInput);
			var animalDiv = $('<div>');
			var pTag = $('<p>', {
				text: animalInput,
			})
			return false;
		});



	
				

	/*var animal = $(this).data('animal');	
	var apiKey = 'dc6zaTOxFJmzC';
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";											

	$.ajax({
		url: queryURL,
		method: 'GET',
	}).done(function(response){

		console.log(response);
	});*/



