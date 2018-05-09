const cast = {
	'characters': [
		{
			"name": "Jon Snow",
			"shortCode": "jon-snow",
			"actor": "Kit Harrington",
			"house": "Stark",
			"location": "The Wall"
		},
		{
			"name": "Tyrion Lannister",
			"shortCode": "tyrion",
			"actor": "Peter Dinklage",
			"house": "Lannister",
			"location": undefined
		},
		{
			"name": "Brienne of Tarth",
			"shortCode": "brienne",
			"actor": "Gwendoline Christie",
			"house": "Clegane",
			"location": null
		},
		{
			"name": "Eddard Stark",
			"shortCode": "ned-stark",
			"actor": "Sean Bean",
			"house": "Stark"
		},
		{
			"name": "Sandor Clegane",
			"shortCode": "the-hound",
			"actor": "Rory McCann",
			"house": "Clegane",
			"location": false
		},
		{
			"name": "Daenerys Targerim",
			"shortCode": "daenerys",
			"actor": "Emilia Clarke",
			"house": "Targerim",
			"location": "Mereen"
		},
		{
			"name": "King Joffrey Baratheon",
			"shortCode": "joffrey",
			"actor": "Jack Gleeson",
			"house": "Baratheon"
		}
	]
};

$(function () {

	var characterTemplate = $('#character-template').html();

	var compiledCharacterTemplate = Handlebars.compile(characterTemplate);

	$('.character-list-container').html(compiledCharacterTemplate(cast));
});