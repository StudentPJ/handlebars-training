// get query string parameter
function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

Handlebars.registerHelper("formatName", function (property1, property2) {
	return new Handlebars.SafeString("Hello <strong>" + property1 + "</strong> and I live at <strong>" + property2 + "</strong>");
});

Handlebars.registerHelper("formatPhoneNumber", function (property) {
	if(property) {
		var phone = property.toString();
		return "(" + phone.substr(0, 3) + ")" + phone.substr(3, 3) + "-" + phone.substr(6, 4);
	}
});



Handlebars.registerHelper("makeBold", function (options) {
	return new Handlebars.SafeString("<strong>" + options.fn(this) + "</strong>");
});

Handlebars.registerHelper("toLower", function (options) {
	return options.fn(this).toLowerCase();
});

$(function () {

	var characterTemplate = $('#character-template').html();

	var compiledCharacterTemplate = Handlebars.compile(characterTemplate);

	var characterId = getParameterByName("id");

	var promise = fetch('./data/cast.json');
	var characterPartialsPromise = fetch('./character-details-partials.html');

	characterPartialsPromise.then(function (value) {
		return value.text();
	}).then(function (value) {
		$('body').append(value);
		Handlebars.registerPartial("characterDetailsPartial", $("#character-details-partial").html());
	});

	promise.then(function (value) {
		return value.json();
	}).then(function (cast) {
		if($('body').hasClass('page-cast-details')) {
			$('.character-list-container').html(compiledCharacterTemplate(cast.characters[characterId]));
		} else {
			$('.character-list-container').html(compiledCharacterTemplate(cast));
		}
	});


});