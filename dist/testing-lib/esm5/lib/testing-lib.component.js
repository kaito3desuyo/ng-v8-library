/**
 * @fileoverview added by tsickle
 * Generated from: lib/testing-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TestingDialogComponent } from "./testing-dialog/testing-dialog.component";
var TestingLibComponent = /** @class */ (function () {
    function TestingLibComponent(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    TestingLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    TestingLibComponent.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        this.dialog.open(TestingDialogComponent, {
            data: {}
        });
    };
    TestingLibComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-testing-lib",
                    template: "\n    <p>\n      testing-lib works!\n    </p>\n    <button mat-raised-button (click)=\"openDialog()\">\n      Click\n    </button>\n  "
                }] }
    ];
    /** @nocollapse */
    TestingLibComponent.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    return TestingLibComponent;
}());
export { TestingLibComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TestingLibComponent.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy1saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGVzdGluZy1saWIvIiwic291cmNlcyI6WyJsaWIvdGVzdGluZy1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFbkY7SUFhRSw2QkFBb0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7Ozs7SUFFekMsc0NBQVE7OztJQUFSLGNBQVksQ0FBQzs7OztJQUViLHdDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQ3ZDLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsd0lBT1Q7aUJBRUY7Ozs7Z0JBZFEsU0FBUzs7SUF5QmxCLDBCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FWWSxtQkFBbUI7Ozs7OztJQUNsQixxQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5pbXBvcnQgeyBUZXN0aW5nRGlhbG9nQ29tcG9uZW50IH0gZnJvbSBcIi4vdGVzdGluZy1kaWFsb2cvdGVzdGluZy1kaWFsb2cuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWItdGVzdGluZy1saWJcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHRlc3RpbmctbGliIHdvcmtzIVxuICAgIDwvcD5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5cbiAgICAgIENsaWNrXG4gICAgPC9idXR0b24+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVGVzdGluZ0xpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2cub3BlbihUZXN0aW5nRGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICBkYXRhOiB7fVxuICAgIH0pO1xuICB9XG59XG4iXX0=