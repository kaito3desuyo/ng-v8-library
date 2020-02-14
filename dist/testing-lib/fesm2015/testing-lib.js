import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/testing-lib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestingLibService {
    constructor() { }
}
TestingLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TestingLibService.ctorParameters = () => [];
/** @nocollapse */ TestingLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TestingLibService_Factory() { return new TestingLibService(); }, token: TestingLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/testing-dialog/testing-dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestingDialogComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TestingDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-testing-dialog',
                template: "<p>\n  testing-dialog works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
TestingDialogComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/testing-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestingLibComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/testing-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestingLibModule {
}
TestingLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TestingLibComponent, TestingDialogComponent],
                entryComponents: [TestingDialogComponent],
                imports: [MatButtonModule, MatDialogModule],
                exports: [TestingLibComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: testing-lib.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TestingLibComponent, TestingLibModule, TestingLibService, TestingDialogComponent as ɵa };
//# sourceMappingURL=testing-lib.js.map
