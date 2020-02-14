import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

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
 * Generated from: lib/testing-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestingLibComponent = /** @class */ (function () {
    function TestingLibComponent() {
    }
    /**
     * @return {?}
     */
    TestingLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    TestingLibComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-testing-lib",
                    template: "\n    <p>\n      testing-lib works!\n    </p>\n    <button mat-raised-button>\n      Click\n    </button>\n  "
                }] }
    ];
    /** @nocollapse */
    TestingLibComponent.ctorParameters = function () { return []; };
    return TestingLibComponent;
}());

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
                    declarations: [TestingLibComponent],
                    imports: [MatButtonModule],
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

export { TestingLibComponent, TestingLibModule, TestingLibService };
//# sourceMappingURL=testing-lib.js.map
