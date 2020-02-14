(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/dialog'), require('@angular/material/button')) :
    typeof define === 'function' && define.amd ? define('testing-lib', ['exports', '@angular/core', '@angular/material/dialog', '@angular/material/button'], factory) :
    (global = global || self, factory(global['testing-lib'] = {}, global.ng.core, global.ng.material.dialog, global.ng.material.button));
}(this, (function (exports, core, dialog, button) { 'use strict';

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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
                        selector: "lib-testing-lib",
                        template: "\n    <p>\n      testing-lib works!\n    </p>\n    <button mat-raised-button (click)=\"openDialog()\">\n      Click\n    </button>\n  "
                    }] }
        ];
        /** @nocollapse */
        TestingLibComponent.ctorParameters = function () { return [
            { type: dialog.MatDialog }
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
            { type: core.NgModule, args: [{
                        declarations: [TestingLibComponent, TestingDialogComponent],
                        entryComponents: [TestingDialogComponent],
                        imports: [button.MatButtonModule, dialog.MatDialogModule],
                        exports: [TestingLibComponent]
                    },] }
        ];
        return TestingLibModule;
    }());

    exports.TestingLibComponent = TestingLibComponent;
    exports.TestingLibModule = TestingLibModule;
    exports.TestingLibService = TestingLibService;
    exports.ɵa = TestingDialogComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=testing-lib.umd.js.map
