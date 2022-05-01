async function getMovies() {

	const response= await  fetch('http://localhost:3000/movies').then()
	const movies= await response.json();
		movies.forEach((movie)=>{
			addToMoviesListOnPage(movie.id,movie.title,movie.posterPath);
		});
	return movies;
	

}

function addToMoviesListOnPage(id,movieTitle,posterPath){
var ul = document.getElementById("moviesList");
var li = document.createElement("li");
li.setAttribute("style","max-width: 18rem;");
	li.setAttribute("id",id);
	li.classList.add("card","border-primary","mb-3");
	var div=document.createElement("div");
	div.classList.add("card-body","text-primary");
	// Movie Title
	var h5=document.createElement("h5");
	h5.classList.add("card-title");
	var h5Content = document.createTextNode(movieTitle);
	h5.appendChild(h5Content);
	var image = document.createElement("img");
	image.classList.add("card-img-top");
	image.setAttribute("src", posterPath);
	image.setAttribute("alt","Card image cap");
	
	// Add To Favourite Button
	var addToFavourateBtn= document.createElement("button");
	addToFavourateBtn.setAttribute("type","button");
	addToFavourateBtn.setAttribute("onclick","addFavourite('"+id+"')");
	addToFavourateBtn.classList.add("btn","btn-primary","btn-lg","btn-block");
	var buttonContent = document.createTextNode("Add To Favourates List");
	addToFavourateBtn.appendChild(buttonContent);


	div.appendChild(h5);
	div.appendChild(image);
	div.appendChild(addToFavourateBtn);
	li.appendChild(div)
	ul.appendChild(li);
}

async function getFavourites() {
	let movies;
const response= await  fetch('http://localhost:3000/favourites')
if(response.ok){
	 movies= await response.json();
	 movies.forEach((movie)=>{
		addToFavouritesListOnPage(movie.id,movie.title,movie.posterPath);
	});
}
else{
	movies= null;
	//return Promise.reject();
}
	
		
	return movies;

}

  function addFavourite(id){
	let movie=   getMovieById(id).catch((err)=>{console.log(err)});
	let favouriteMovie =   getFavouriteById(id);
	let status;

	if(favouriteMovie == null){
		status= 	postToFavouriteMovie(movie).catch((err)=>{console.log(err)});
		//return status;
	}
	else{
			//return Error("Movie is already added to favourites");
	}

}

 function getMovieById(id){
	let url='http://localhost:3000/movies/'+id;
	//let movie;
	 return fetch(url,{
		method: 'GET',
		headers:{
			"Content-Type":'application/json'
		},
	}).
	then((res)=>{return new (res.json())}).
	catch((err)=>{return (null)});
	
}

 function getFavouriteById(id){
	let url='http://localhost:3000/favourites/'+id;
	let movie;
	return fetch(url,{
		method: 'GET',
		headers:{
			"Content-Type":'application/json'
		}
	}).then((res)=>{return res.json()}).catch((err)=>{return null});
	/*if(response.ok){
		movie= await response.json();
	}
	else{
		movie = null;
	}*/
	//let movie= await response.json().catch((err)=>{ return Error('Not Found')});
	//return response;
	
}

 function postToFavouriteMovie(movie){
	//let result; 
	return fetch('http://localhost:3000/favourites', {
		method: 'POST',
		body: JSON.stringify(movie),
		headers:{
			'Content-Type': 'application/json'
		  }
	  });
	
	/*if(response.ok){
		result = await response.json();
		addToFavouritesListOnPage(movie.id,movie.title,movie.posterPath);
		return result;
	}
	else{
		result = null;
		return Promise.reject();
	}

	return result;*/
}

function addToFavouritesListOnPage(id,movieTitle,posterPath) {

var ul = document.getElementById("favouritesList");
var li = document.createElement("li");
li.setAttribute("style","max-width: 18rem;");
	li.setAttribute("id",id);
	li.classList.add("card","border-primary","mb-3");
	var div=document.createElement("div");
	div.classList.add("card-body","text-primary");
	// Movie Title
	var h5=document.createElement("h5");
	h5.classList.add("card-title");
	var h5Content = document.createTextNode(movieTitle);
	h5.appendChild(h5Content);
	var image = document.createElement("img");
	image.classList.add("card-img-top");
	image.setAttribute("src", posterPath);
	image.setAttribute("alt","Card image cap");
	



	div.appendChild(h5);
	div.appendChild(image);

	li.appendChild(div)
	ul.appendChild(li);
}

module.exports = {
getMovies,
getFavourites,
addFavourite
};

// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution

