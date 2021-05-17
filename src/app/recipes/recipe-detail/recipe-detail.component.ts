import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //@Input() 
  // as we are using routing
  recipe:Recipe;
  id:number;

  constructor(private recipeService:RecipeService,
    private route:ActivatedRoute,
    private router:Router ) { }
//for binding id
  ngOnInit(): void {

    //notifies changed info ie when user enters index
    this.route.params.subscribe(
      (params:Params)=>{
        this.id =   params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingList(){

    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo:this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
    }
}
