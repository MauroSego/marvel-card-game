var $ = window.jQuery

$.get('http://gateway.marvel.com:80/v1/public/series?title=avengers&apikey=286d02c660ed0b1dcd4fa356df94f827')
.done( function (results ){
	debugger
})

//Promises
/*
Tienen 3 estados: Pending, resolving y rejecting*/