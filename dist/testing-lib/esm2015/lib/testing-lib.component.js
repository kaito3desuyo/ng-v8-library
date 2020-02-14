/**
 * @fileoverview added by tsickle
 * Generated from: lib/testing-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TestingDialogComponent } from "./testing-dialog/testing-dialog.component";
export class TestingLibComponent {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    openDialog() {
        this.dialog.open(TestingDialogComponent, {
            data: {}
        });
    }
}
TestingLibComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-testing-lib",
                template: `
    <p>
      testing-lib works!
    </p>
    <button mat-raised-button (click)="openDialog()">
      Click
    </button>
  `
            }] }
];
/** @nocollapse */
TestingLibComponent.ctorParameters = () => [
    { type: MatDialog }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TestingLibComponent.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy1saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGVzdGluZy1saWIvIiwic291cmNlcyI6WyJsaWIvdGVzdGluZy1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFjbkYsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUM5QixZQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQzs7OztJQUV6QyxRQUFRLEtBQUksQ0FBQzs7OztJQUViLFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUN2QyxJQUFJLEVBQUUsRUFBRTtTQUNULENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7O0dBT1Q7YUFFRjs7OztZQWRRLFNBQVM7Ozs7Ozs7SUFnQkoscUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuaW1wb3J0IHsgVGVzdGluZ0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gXCIuL3Rlc3RpbmctZGlhbG9nL3Rlc3RpbmctZGlhbG9nLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLXRlc3RpbmctbGliXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICB0ZXN0aW5nLWxpYiB3b3JrcyFcbiAgICA8L3A+XG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+XG4gICAgICBDbGlja1xuICAgIDwvYnV0dG9uPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RpbmdMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICBvcGVuRGlhbG9nKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nLm9wZW4oVGVzdGluZ0RpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgZGF0YToge31cbiAgICB9KTtcbiAgfVxufVxuIl19