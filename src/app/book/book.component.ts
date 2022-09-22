import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
 books = [];
 model=new Book();
  constructor(private bookService: BookService) {}
  ngOnInit() {
    this.getAllUsers();
    this.books.length;
    // this.model.id=20;
  }
  public getAllUsers() {
    this.bookService.getAllBookService().subscribe((data: any[]) => {
      this.books = data;
    });
  }
addUser()
  {
alert(this.model);
  }
  editBook(id){
    alert(id);
  }
}