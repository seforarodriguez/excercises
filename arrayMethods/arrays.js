var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

// Use the forEach method to add the name of each planet to a div element in your HTML

function Planetscode(element, index, array) {
	console.log('array[' + index + '] = ' + element);
}

planets.forEach(Planetscode);

var code = "<div>" + planets + "</div>"

var el = document.getElementById("planets");

el document.getElementById("planets") = code;

// Use the map method to create a new array where the first letter of each planet is capitalized

// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];