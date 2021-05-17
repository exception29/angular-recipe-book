
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";
import { Ingredient } from "../shared/ingredients.model";

export class ShoppingListService{

    ingredientsChanged = new Subject<Ingredient[]>(); // to maintain changed array
    startedEditing = new Subject<number>();
    private ingredients:Ingredient[] = [
    
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

      getIngredients(){
          return this.ingredients.slice();  //.slice() return a copy so that there is no direct access to private elements

          //return this.ingredients;
          // so when we add ingredients, original array changes but the slice provides copy which remains unchanged
      }

      getIngredient(index:number){
        return this.ingredients[index];
      }

      addIngredient(ingredient:Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.next(this.ingredients.slice())

      }

      addIngredientsFromRecipe(ingredients:Ingredient[]){
        //   for(let ingredient of this.ingredients){
        //       this.addIngredient(ingredient);
        //   }

        this.ingredients.push(...ingredients); //spreading 
        //... spread to convert array of elements to list of elements and add all ingredients directly in one go
        this.ingredientsChanged.next(this.ingredients.slice())
        
      }

      updateIngredient(index:number, newIngredient:Ingredient){
        this.ingredients[index]=newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice())


      }
  
      deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice())

      }
    
}