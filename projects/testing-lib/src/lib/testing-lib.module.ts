import { NgModule } from "@angular/core";
import { TestingLibComponent } from "./testing-lib.component";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { TestingDialogComponent } from "./testing-dialog/testing-dialog.component";

@NgModule({
  declarations: [TestingLibComponent, TestingDialogComponent],
  entryComponents: [TestingDialogComponent],
  imports: [MatButtonModule, MatDialogModule],
  exports: [TestingLibComponent]
})
export class TestingLibModule {}
