var app = angular.module("pokeApp",[]);

app.controller("PokeController", function($scope){
	console.log("controller works");

	$scope.view = {};
// call api
$.ajax({
  url: "http://pokeapi.co/api/v2/pokemon?limit=5",
  method: 'GET',
  cache: false,
  success: function(info){
   console.log("INFO", info);
   $scope.view.pokemon = info.results;
  }
});
// store a random array of 5 pokemon
// use custom directive to display pokemon

});


app.directive('pokemonStats', function(){
	return{
		templateUrl: './pokeStats.html',
		scope: {
			pokeStats: '=pokeStats'
		}
	}
});



