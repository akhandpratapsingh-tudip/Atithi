"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var AuthenticationHelper = (function () {
    function AuthenticationHelper(route) {
        this.route = route;
        this.tokenKey = 'crowdsourcing_authToken';
        this.userValueChanged = new core_1.EventEmitter(true);
    }
    AuthenticationHelper.prototype.isLoggedIn = function () {
        var token = localStorage.getItem(this.tokenKey);
        if (token && token.length > 0) {
            return true;
        }
        return false;
    };
    AuthenticationHelper.prototype.setLoggedIn = function (token) {
        localStorage.setItem(this.tokenKey, token);
    };
    AuthenticationHelper.prototype.removeLoggedIn = function () {
        localStorage.removeItem(this.tokenKey);
    };
    AuthenticationHelper.prototype.getToken = function () {
        return localStorage.getItem(this.tokenKey);
    };
    AuthenticationHelper.prototype.setUser = function (inputUser) {
        this.user = inputUser;
    };
    AuthenticationHelper.prototype.getUser = function () {
        return this.user;
    };
    AuthenticationHelper.prototype.hasUser = function () {
        if (this.user) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationHelper.prototype.isAdmin = function () {
        if (this.user && this.user.role)
            if (this.user.role.indexOf('admin') >= 0 || this.user.role.indexOf('superadmin') >= 0) {
                return true;
            }
            else {
                return false;
            }
    };
    AuthenticationHelper.prototype.hasPermission = function (moduleName) {
        if (this.user.modules.indexOf('leaderboard') >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationHelper.prototype.userValueChangedEvent = function (value) {
        this.user = value;
        this.userValueChanged.emit(value);
    };
    AuthenticationHelper.prototype.getuserValueChangeEmitter = function () {
        return this.userValueChanged;
    };
    AuthenticationHelper.prototype.redirectToLogin = function () {
        this.route.navigate(['login']);
    };
    AuthenticationHelper.prototype.redirectToDashboard = function () {
        this.route.navigate(['dashboard']);
    };
    AuthenticationHelper.moduleName = [];
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AuthenticationHelper.prototype, "userValueChanged", void 0);
    AuthenticationHelper = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object])
    ], AuthenticationHelper);
    return AuthenticationHelper;
}());
exports.AuthenticationHelper = AuthenticationHelper;
//# sourceMappingURL=app.authentication.js.map