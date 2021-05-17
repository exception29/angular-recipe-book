import { Component, Input, OnInit } from '@angular/core';
import { Books } from '../books.model';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {
  @Input() book:Books;  // gets input from books.ts
  constructor() { }

  ngOnInit(): void {
  }

}
