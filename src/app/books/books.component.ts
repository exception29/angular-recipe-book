import { Component, OnInit } from '@angular/core';

import { BookService } from './book.service';

import { Books } from './books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers:[BookService]
})
export class BooksComponent implements OnInit {
  selectedBook:Books;
  constructor(private bookService:BookService) { }


  ngOnInit(): void {

    this.bookService.bookSelected
    .subscribe(
      (book:Books)=>{  //arrow function
        this.selectedBook = book;
      }
    )
  }



 

}
