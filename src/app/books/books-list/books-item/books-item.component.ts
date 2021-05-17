import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import { Books } from '../../books.model';

@Component({
  selector: 'app-books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.css']
})
export class BooksItemComponent implements OnInit {

  
  @Input() book:Books; 

  @Output() bookSelected = new EventEmitter<void>();
 

  constructor(private bookService:BookService) { 

  }

  ngOnInit(): void {
  }
  onSelected(){

    this.bookService.bookSelected.emit(this.book); 

  }

}
