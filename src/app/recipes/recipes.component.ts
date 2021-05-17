import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  //providers:[RecipeService]  
  
  // adding to app.module so that it is shsred by entire app and not just recipes feature
  
  // this is parent component of service and as service is created in recipes folder/component
  //providers is used here so now every child of this component will have instance of service
  // we onlu have to use constructor to tell angular that we want instance of that service in that particular component
  // Describes how the Injector should be configured.
  //Providers is used to register the classes to an angular module as a service. And then,
  // this service classes can be used by other components during the itself creation phase in the module.
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {

    //using recipeService to send selectedRecipe to recipe-detail
    this.recipeService.recipeSelected
    .subscribe(
      (recipe:Recipe)=>{  //arrow function
        this.selectedRecipe = recipe;
      }
    )
  }

}
