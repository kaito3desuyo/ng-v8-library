import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/testing-lib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestingLibService = /** @class */ (function () {
    function TestingLibService() {
    }
    TestingLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TestingLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ TestingLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TestingLibService_Factory() { return new TestingLibService(); }, token: TestingLibService, providedIn: "root" });
    return TestingLibService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/testing-dialog/testing-dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestingDialogComponent = /** @class */ (function () {
    function TestingDialogComponent() {
    }
    /**
     * @return {?}
     */
    TestingDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TestingDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-testing-dialog',
                    template: "<p>\n  testing-dialog works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TestingDialogComponent.ctorParameters = function () { return []; };
    return TestingDialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/testing-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
var TestingLibModule = /** @class */ (function () {
    function TestingLibModule() {
    }
    TestingLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TestingLibComponent, TestingDialogComponent],
                    entryComponents: [TestingDialogComponent],
                    imports: [MatButtonModule, MatDialogModule],
                    exports: [TestingLibComponent]
                },] }
    ];
    return TestingLibModule;
}());

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
