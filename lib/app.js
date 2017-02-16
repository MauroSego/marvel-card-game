var $ = window.jQuery

var key = 'apikey=286d02c660ed0b1dcd4fa356df94f827'
var url = 'http://gateway.marvel.com/v1/public/series?title=avengers&' + key


Promise.resolve($.get(url))
.then( function (results ){
	var characters = results.data.results[0].characters.items
	var promises = [];
	for (var i in characters) {
		var character = characters[i];
		var characterUrl = characters[0].resourceURI + '?' + key;
		promises.push(Promise.resolve($.get(characterUrl)))
	}
	return Promise.all(promises)
})
.then( function (characters) {
	console.log(characters);
})
.catch(function (err) {
	console.log(err);
})

//Promises
/*
Tienen 3 estados: Pending, resolving y rejecting*/