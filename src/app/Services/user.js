"use strict";
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var app_httpclient_1 = require('../app.httpclient');
require('rxjs/Rx');
// import localStorage from 'localStorage';
var UserService = (function () {
    function UserService(httpClient) {
        this.loginUrl = 'api/auth/login';
        this.signupUrl = 'api/auth/register';
        this.httpClient = httpClient;
    }
    // For signup service
    UserService.prototype.userLogin = function (data) {
        return this.httpClient.postPreLogin(this.loginUrl, data)
            .map(this.extractResponse)
            .catch(this.handleError);
    };
    UserService.prototype.userSignup = function (data) {
        return this.httpClient.postPreLogin(this.signupUrl, data)
            .map(this.extractResponse)
            .catch(this.handleError);
    };
    UserService.prototype.extractResponse = function (res) {
        return res;
    };
    UserService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [app_httpclient_1.HttpClientHelper])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.js.map