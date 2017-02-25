var movies = [
	{
		title: 'In Bruges',
		stars: 5,
		watched: true
	},
	{
		title: "Frozen",
		stars: 4.5,
		watched: false
	},
	{
		title: "Mad Max Fury Road",
		stars: 5,
		watched: false
	},
	{
		title: "Les Miserables",
		stars: 3.5,
		watched: false
	},
	{
		title: "Finding Nemo",
		stars: 5,
		watched: true
	}
]
// movie.forEach(function(index){
// 	if(movie[index].watched === true){
// 		console.log('seen');
// 	}
// 	else{
// 		console.log('not seen');
// 	}
// 	console.log('You have ' + movie[index].watched + ' ' + movie[index].title + ' - ' + movie[index].stars + ' stars.');
// })


movies.forEach(function(movie){
	var result = 'You have ';
	if(movie.watched){
		result += 'watched';
	}
	else{
		result += 'not seen '
	}
	result += '\'' + movie.title + '\' - ';
	result += movie.stars + ' stars';
	console.log(result);
});
