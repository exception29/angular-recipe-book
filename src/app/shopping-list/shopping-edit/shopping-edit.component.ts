import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  subscription:Subscription;
  editMode = false;
  editedItemIndex :number;
  editedItem:Ingredient;

  // @ViewChild('nameInput') nameInputRef:   ElementRef;
  // @ViewChild('amountInput') amountInputRef:   ElementRef;
  @ViewChild('f') slForm:NgForm; // referencing our form
 // @Output() ingredientAdded = new EventEmitter<Ingredient>(); // sending or adding new ingredient to list

  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {

    this.subscription = this.slService.startedEditing
    .subscribe((index:number)=>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name : this.editedItem.name,
          amount: this.editedItem.amount
        })
    }
    
    );
  }

  onAddItem(form:NgForm){

    // const ingName =this.nameInputRef.nativeElement.value;
    // const ingAmount =this.amountInputRef.nativeElement.value;
    const value = form.value;
    //const newIngredient =   new Ingredient(ingName, ingAmount);
    const newIngredient =   new Ingredient(value.name,value.amount);


    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngredient)
    }
    else{
      this.slService.addIngredient(newIngredient);  // we directly add ingredient to service 

    }
    this.editMode = false;

    form.reset();

    //no need to emit ingredient to list now
    //this.ingredientAdded.emit(newIngredient); //sending object to shopping list

  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){

    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();

  }

  ngOnDestroy(){
    this.subscription.unsubscribe;
  }

}
