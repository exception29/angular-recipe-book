import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Fruit } from '../../fruit.model';

@Component({
  selector: 'app-fruit-item',
  templateUrl: './fruit-item.component.html',
  styleUrls: ['./fruit-item.component.css']
})
export class FruitItemComponent implements OnInit {

  
  @Input() fruit:Fruit; 

  @Output() fruitSelected = new EventEmitter<void>();
 

  constructor() { 

  }

  ngOnInit(): void {
  }
  onSelected(){

    this.fruitSelected.emit();

  }

}
