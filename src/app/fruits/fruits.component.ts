import { Component, OnInit } from '@angular/core';
import { Fruit } from './fruit.model';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
 
})
export class FruitsComponent implements OnInit {
  selectedFruit:Fruit;
  constructor() { }

  ngOnInit(): void {
  }

}
