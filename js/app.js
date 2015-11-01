$(function() {
	// Dev
	var API_URL = 'http://localhost:63342/TrofeoAcquambiente/sponsors.json';

	// Prod
	//var API_URL = "http://46.101.208.192/sponsors.json"

	var SPONSOR_DURATION = 10000;

	//Richiede in modo anticipato le immagini, così c'è meno lag nelle
	// animazioni
	function preload(sponsors) {
		$(sponsors).each(function(){
			$('<img/>')[0].src = this.image;
		});
	}



	$.getJSON(API_URL, function(json) {
		var sponsors = json.sponsors;
		var index = 0;

		preload(sponsors);

		var updateImage = function(){
			$('#sponsor-url').attr('href', sponsors[index].url);


			$('#sponsor-image').fadeOut(500, function() {
				$('#sponsor-url').attr('href', sponsors[index].url);
				$('#sponsor-image')
					.attr('src', sponsors[index].image)
					.attr('alt', sponsors[index].name)
					.fadeIn(500);
			});



			index++;
			if (index === sponsors.length) {index = 0;}
		};

		setInterval(updateImage, SPONSOR_DURATION);

	});
});