var DishView = function (container, model) {
      this.updateDisplay = function() {
			// if (model.getDishID() === undefined) {
				// id = 1
				// }
			// else{
				// id = model.getDishID();
				// }
				var oneRecipe = model.getDish(model.getDishID());
				console.log('oneRecipe:', oneRecipe);
				var ingredients = oneRecipe.ingredients[0];
				var len = oneRecipe.ingredients.length;
				
				//var val = 3;


				// for(i = 0; i < len; i++){
				//    var ingredients = oneRecipe.ingredients[i];
				//    $(".main1view2info").append('<div class=" col-xs-2  main1-view2-ingr ">' + ingredients.quantity, ingredients.unit, ingredients.name, ingredients.price + '</div><br>');
				// }
				


				// $(".main1view2").html();

				// COL 1
				$(".main1view2dishname > div").html('<div class=" col-xs-6  main1-view2-dish" id="' + id + '"><h2>' + oneRecipe.name + '</h2><img class="icon" src="./images/' + oneRecipe.image + '"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p></div>');

				// COL 2
				$(".main1view2ingredients > div").html(function() {
					  $(".main1view2ingredients > div").html('');
					  for(i = 0; i < len; i++){
							var ingredients = oneRecipe.ingredients[i];
							$(".main1view2ingredients > div").append('<div class=" col-xs-12  main1-view2-ingr "><b>' + ingredients.quantity+' '+ ingredients.unit+'</b> '+ingredients.name+ ' -- '+ ingredients.price + ' SEK</div><br>');
					  };
				});
				
				// COL 3
				$(".main1view2preparation > div").html('<div class=" col-xs-6  main1-view2-prep "><h3>Preparation</h3><h4>' + oneRecipe.description + '</h4></div>');
				
      };
};