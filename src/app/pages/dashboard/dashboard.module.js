"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var nga_module_1 = require('../../theme/nga.module');
var dashboard_component_1 = require('./dashboard.component');
var dashboard_routing_1 = require('./dashboard.routing');
var user_1 = require('../../Services/user');
var dashboardModule = (function () {
    function dashboardModule() {
    }
    dashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                nga_module_1.NgaModule,
                dashboard_routing_1.routing
            ],
            declarations: [
                dashboard_component_1.dashboard
            ],
            providers: [user_1.UserService]
        }), 
        __metadata('design:paramtypes', [])
    ], dashboardModule);
    return dashboardModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dashboardModule;
//# sourceMappingURL=dashboard.module.js.map