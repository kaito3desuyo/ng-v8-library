import { Component, OnInit } from "@angular/core";

@Component({
  selector: "lib-testing-lib",
  template: `
    <p>
      testing-lib works!
    </p>
    <button mat-raised-button>
      Click
    </button>
  `,
  styles: []
})
export class TestingLibComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
