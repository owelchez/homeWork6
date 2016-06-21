	var apiKey = 'dc6zaTOxFJmzC';
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";	

	
	$.ajax({
		url: queryURL,
		method: 'GET',
	}).done(function(response){		



	/*Creates buttons for animals and adds them to the HTML*/

$('#animalForm').on('submit', function () {
			var animalInput = $('#animalInput').val();
			var animalButton = $('<button>', {
				id: 'animal',
			});
			$(animalButton).append(animalInput);
			$('.animalContainer').append(animalButton);
			return false;
		});



		console.log(response);

}); // Ajax function response closing braces