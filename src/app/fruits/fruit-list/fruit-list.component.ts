import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit.model';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {

 
  @Output() fruitWasSelected = new EventEmitter<Fruit>(); 
  

  // sending selected recipe to recipe-item
  fruits: Fruit[]= [ new Fruit('Apples',  'https://4.imimg.com/data4/FV/PP/ANDROID-36340621/product-500x500.jpeg'),
  new Fruit('Mangoes', 'https://5.imimg.com/data5/NB/DH/MY-1232526/badami-mango-500x500.jpg'),
  new Fruit('Strawberries', 'https://s30386.pcdn.co/wp-content/uploads/2019/08/Strawberries_HNL1306_ts104880701.jpg')]; 

  

  constructor() { }

  ngOnInit(): void {
  }

  onFruitSelected(fruit:Fruit){

    this.fruitWasSelected.emit(fruit); //emit this fruit to child fruit-item

  }


}
