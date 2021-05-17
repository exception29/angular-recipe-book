import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit.model';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {
  @Input() fruit:Fruit;
  constructor() { }

  ngOnInit(): void {
  }


}
