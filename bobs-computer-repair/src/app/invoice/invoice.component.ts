/*
==============================
; Title: invoice.component.ts
; Author: Laurie Mailloux
; Date: 05 September 2020
; Description: Invoice Component
==============================
*/



import { Component, OnInit, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { OrderComponent } from "../order/order.component";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.css"]
})
export class InvoiceComponent implements OnInit {
  @Input() passwordOrder: boolean;
  @Input() passwordPrice: number;
  @Input() public order;

  constructor(private dialogRef: MatDialogRef<OrderComponent>) {}

  ngOnInit() {
    console.log(this.order);
  }

  close() {
    this.dialogRef.close();
    location.reload();
  }
}
