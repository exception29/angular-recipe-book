import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
 // providers:[RecipeService]  
})
export class RecipeListComponent implements OnInit {

  //@Output() recipeWasSelected = new EventEmitter<Recipe>(); 
  // sending selected recipe to recipe-item
  recipes: Recipe[];

  subscription:Subscription;

  //telling angular that we require instance of service
  // this informs angular that we will need instance of recipeservice
  constructor(private recipeService:RecipeService,
    private router:Router,
    private route:ActivatedRoute) { } //binding to property (use servicename as type name)


  //directly load recipes into list from recipeService
  ngOnInit(): void {

    //listening to changed recipe list using subscribe
   // get copy of array from recipeservice
   this.recipes = this.recipeService.getRecipes();
    this.subscription= this.recipeService.recipesChanged.
    subscribe(
      (recipes:Recipe[])=>{
        this.recipes = recipes;

      }
    );
   
  
  }


  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe(); //to avoid memory leakage
  }
  // onRecipeSelected(recipe:Recipe){

  //   this.recipeWasSelected.emit(recipe); //emit this recipe to child recipe-item

  // }




}
