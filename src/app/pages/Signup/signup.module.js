"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var nga_module_1 = require('../../theme/nga.module');
var signup_component_1 = require('./signup.component');
var signup_routing_1 = require('./signup.routing');
var SignUpModule = (function () {
    function SignUpModule() {
    }
    SignUpModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                nga_module_1.NgaModule,
                signup_routing_1.routing
            ],
            declarations: [
                signup_component_1.SignUp
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SignUpModule);
    return SignUpModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SignUpModule;
//# sourceMappingURL=signup.module.js.map