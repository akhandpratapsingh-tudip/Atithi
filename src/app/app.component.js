"use strict";
var core_1 = require('@angular/core');
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App() {
    }
    App.prototype.ngAfterViewInit = function () {
        // hide spinner once all loaders are completed
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n      <router-outlet></router-outlet>\n      "
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.component.js.map