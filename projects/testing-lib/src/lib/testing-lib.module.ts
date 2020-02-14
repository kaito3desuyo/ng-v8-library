import { NgModule } from "@angular/core";
import { TestingLibComponent } from "./testing-lib.component";
import { MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [TestingLibComponent],
  imports: [MatButtonModule],
  exports: [TestingLibComponent]
})
export class TestingLibModule {}
