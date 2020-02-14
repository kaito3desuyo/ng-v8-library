(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('testing-lib', ['exports', '@angular/core', '@angular/material'], factory) :
    (global = global || self, factory(global['testing-lib'] = {}, global.ng.core, global.ng.material));
}(this, (function (exports, core, material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/testing-lib.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestingLibService = /** @class */ (function () {
        function TestingLibService() {
        }
        TestingLibService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TestingLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ TestingLibService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TestingLibService_Factory() { return new TestingLibService(); }, token: TestingLibService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [TestingLibComponent],
                        imports: [material.MatButtonModule],
                        exports: [TestingLibComponent]
                    },] }
        ];
        return TestingLibModule;
    }());

    exports.TestingLibComponent = TestingLibComponent;
    exports.TestingLibModule = TestingLibModule;
    exports.TestingLibService = TestingLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=testing-lib.umd.js.map
