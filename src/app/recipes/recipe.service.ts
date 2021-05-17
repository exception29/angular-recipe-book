import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable() // to inject service within a service
//here, to inject shoppingListService into RecipeService
export class RecipeService{

  recipesChanged = new Subject<Recipe[]>();

constructor(private slService:ShoppingListService){} // creating instance of service
recipeSelected = new EventEmitter<Recipe>();  //public


// now we have recipes in firebase database
// private recipes: Recipe[]= [ 
//   new Recipe('Pizza',
//    'Crispy, Cheezy, Veg Pizza', 
//    'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Waagmi_Soni/Gralic_Crust_Veggie_Pizza.jpg',
//    [new Ingredient('Pizza base', 2),
//   new Ingredient('Cheese', 1),
//   new Ingredient('Veggies', 5),
  
// ]),
//   new Recipe('Chocolate Dessert', 
//   'Simply yummy, oreo and vanilla is he best combination that you will get to taste',
//    'https://i.pinimg.com/736x/e8/bb/fe/e8bbfef4616d2bbee9a9f0cd3f35ded5.jpg',
//   [new Ingredient('Oreo', 2),
//   new Ingredient('Vanilla', 1),
//   new Ingredient('Chocolate sauce', 1 )]),
//   new Recipe('Desserts', 
//   'Just fantastic', 
//   'https://weelicious.com/imager/weelicious_com/uploads/Banana-Sushi-1_1b74faffbe944b0675f0e20473d3ad34.jpg',
//   [new Ingredient('Refined wheat floor', 2),
//   new Ingredient('Chocolates', 1),
//   new Ingredient('Dry-fruits', 3),
//   new Ingredient('Banana', 1),
//   ]
//   )]; //recipes contains array of recipe objects

private recipes: Recipe[]= [];

  getRecipes(){
    return this.recipes.slice();  // create a copy of array of recipes and returns it 

    }   

    //adding to shopping list service
    addIngredientsToShoppingList(ingredients:Ingredient[]){

      this.slService.addIngredientsFromRecipe(ingredients);
    }

    // to overwrite with new recipes
    setRecipes(recipes:Recipe[]){

      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());

    }

    //for using index in routing
    getRecipe(index:number){
      return this.recipes[index];
    }

    //pushing newly added  recipe to the list
    addRecipe(recipe:Recipe){
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());

    }
    updateRecipe(index:number, newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
      this.recipes.splice(index,1);
      this.recipesChanged.next(this.recipes.slice());

    }
}   