import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  
  @Input() recipe:Recipe;
  @Input() index:number;
  //get recipe from parent ie. recipe-list
  //@Input() allows parent to update data in child component
  //ie. from recipe-list(parent) to recipe-item(child) 

  // by using service, we are directly taking data from service

  // @Output() recipeSelected = new EventEmitter<void>();
  // // send recipe to recipe detail (child)

  //instead of emitting recipe on select to recipe-detail
  // we are using recipeService

  // not needed as we r using routing
  
  // constructor(private recipeService:RecipeService) {  }

  ngOnInit(): void {
  }

  //from service use recipeSelected property and emit entire recipe
  //no need to take that selected recipe from list anymore, directly get the clicked recipe from srevice
  // onSelected(){

  //   this.recipeService.recipeSelected.emit(this.recipe); 
    
  //   //this.recipeSelected.emit();

  // }
}
