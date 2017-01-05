"use strict";
var router_1 = require('@angular/router');
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: 'login',
        loadChildren: function () { return System.import('./login/login.module'); }
    },
    {
        path: 'signup',
        loadChildren: function () { return System.import('./signup/signup.module'); }
    },
    {
        path: 'forgetPassword',
        loadChildren: function () { return System.import('./forgetPassword/forgetPassword.module'); }
    },
    {
        path: 'dashboard',
        loadChildren: function () { return System.import('./dashboard/dashboard.module'); }
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=pages.routing.js.map