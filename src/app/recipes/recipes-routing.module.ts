import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesResolverService } from "./recipes-resolver.service";
import { RecipesComponent } from "./recipes.component";


const routes:Routes = [

    {path:'recipes', component:RecipesComponent,children:[
        {path: '', component:RecipeStartComponent},
        {path:'new', component:RecipeEditComponent},
        {path:':id',component:RecipeDetailComponent },
        {path:':id/edit', 
        component:RecipeEditComponent, 

    }


    ]}
  
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule{

}

