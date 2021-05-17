import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import {map,tap } from 'rxjs/operators';


// as we want to injecy HTTP service

// we can also provide in providers at app.module.ts
@Injectable({providedIn:'root'})
export class DataSorageService{

    constructor(private http: HttpClient,
        private recipeService:RecipeService){ }

    storeRecipes(){
        
        const recipes = this.recipeService.getRecipes();

        //url from firebase/recipe.json folder, data to be sent
        //put() method in firebase overwrites the initial data
        this.http.put('https://ng-course-recipe-book-6c5de-default-rtdb.firebaseio.com/recipes.json', recipes).
        subscribe(
            response =>
                {
                    console.log(response);

        });
    }

    fetchRecipes(){

        //as we want to fetch array of recipes

        // if no ingredients were given while creating new recipe then set ingtedients to blank array
        return this.http.get<Recipe[]>('https://ng-course-recipe-book-6c5de-default-rtdb.firebaseio.com/recipes.json').
        pipe(map(recipes =>{
            return recipes.map(recipe =>{
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
            });
        }), 
        tap(recipes=>{
            this.recipeService.setRecipes(recipes);

        }))
        
    }


}