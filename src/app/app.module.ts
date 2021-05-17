import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FruitListComponent } from './fruits/fruit-list/fruit-list.component';
import { FruitComponent } from './fruits/fruit/fruit.component';
import { FruitItemComponent } from './fruits/fruit-list/fruit-item/fruit-item.component';
import {FruitsComponent} from './fruits/fruits.component';
import { BooksComponent } from './books/books.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksItemComponent } from './books/books-list/books-item/books-item.component';
import { BooksDetailComponent } from './books/books-detail/books-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    FruitListComponent,
    FruitComponent,
    FruitItemComponent,
    FruitsComponent,
    BooksComponent,
    BooksListComponent,
    BooksItemComponent,
    BooksDetailComponent,
    DropdownDirective,
    PersonDetailsComponent,
    RecipeStartComponent,
    RecipeEditComponent,
   
    
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesRoutingModule
  
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
