/**
 * Title: book-details.dialog.component.ts
 * Author: Professor Krasso
 * Date: 08 August 2020
 * Modified By: Laurie Mailloux
 * Description: Book-Details Dialog Component 
 */

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {

  book: IBook;

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) { 
    this.book = data.book;
  }

  ngOnInit(): void {
  }

}
