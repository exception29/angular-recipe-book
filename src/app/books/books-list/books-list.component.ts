import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { BookService } from '../book.service';
import { Books } from '../books.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  @Output() bookWasSelected = new EventEmitter<Books>(); 
  // sending selected recipe to recipe-item
  books: Books[];
  //=[ new Books('Rich Dad Poor Dad', "advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence.", 'https://ae01.alicdn.com/kf/Ha8c457d129264829aa26581ed0c9899dh/New-Rich-Dad-Poor-Dad-by-Robert-English-Edition.jpg'),
  // new Books('Harry Potter Series', 'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. ', 'https://i.pinimg.com/564x/04/67/54/046754bb11c6caa182f9a0685ef4fa5a.jpg'),
  // new Books("Dicover Your Destiny", 'Discover Your Destiny by Robin Sharma is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive', 'https://www.akshardhara.com/40970-large_default/Discover-Your-Destiny-Robin-Sharma-Jaico-Books-buy-marathi-books-online-at-akshardhara.jpg')]; //recipes contains array of recipe objects

 

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();// get copy of array from recipeservice
  }

  // onBookSelected(book:Books){

  //   this.bookWasSelected.emit(book); 
  // }

}
