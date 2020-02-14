import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TestingDialogComponent } from "./testing-dialog/testing-dialog.component";

@Component({
  selector: "lib-testing-lib",
  template: `
    <p>
      testing-lib works!
    </p>
    <button mat-raised-button (click)="openDialog()">
      Click
    </button>
  `,
  styles: []
})
export class TestingLibComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    this.dialog.open(TestingDialogComponent, {
      data: {}
    });
  }
}
