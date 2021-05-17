import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  //no need of @Input as $event captures the entered data
  ingredients:Ingredient[];
  // = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10)
  // ];

  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {


    //subscribe notifies abt changed data. 
    // it is binded to the memory and not component
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
    .subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients = ingredients;

      }
    );
  }

  onEditItem(index:number){

    this.slService.startedEditing.next(index);
    }
  // no need as we use service
  // onIngredientAdded(ingredient:Ingredient){

  //   this.ingredients.push(ingredient);
    

  // }
}
