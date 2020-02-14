import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
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
 * Generated from: lib/testing-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestingLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
TestingLibComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-testing-lib",
                template: `
    <p>
      testing-lib works!
    </p>
    <button mat-raised-button>
      Click
    </button>
  `
            }] }
];
/** @nocollapse */
TestingLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/testing-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestingLibModule {
}
TestingLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TestingLibComponent],
                imports: [MatButtonModule],
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

export { TestingLibComponent, TestingLibModule, TestingLibService };
//# sourceMappingURL=testing-lib.js.map
