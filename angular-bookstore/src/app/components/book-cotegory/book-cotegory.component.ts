import { Component, OnInit } from '@angular/core';
import { BookCategory } from 'src/app/common/book-category';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-cotegory',
  templateUrl: './book-cotegory.component.html',
  styleUrls: ['./book-cotegory.component.css']
})
export class BookCotegoryComponent implements OnInit {

  bookCategories: BookCategory[];

  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this.listBookCategories();
  }

  listBookCategories() {
    this._bookService.getBookCategories().subscribe(
      data => this.bookCategories = data
    );
  }
}


