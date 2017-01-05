"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
//import { AuthenticationHelper } from "./app.authentication";
var router_1 = require('@angular/router');
var HttpClientHelper = (function () {
    // baseUrl:String= 'http://144.214.55.144:3001/v1/';
    function HttpClientHelper(http, router) {
        this.http = http;
        this.router = router;
        // baseUrl:String  = 'http://52.91.19.85:3001/v1/';  // Serve URL to web API
        this.baseUrl = 'http://atithi.dev.tudip.com/'; // Local URL to web API
        this.http = http;
    }
    HttpClientHelper.prototype.createAuthorizationHeader = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', localStorage.getItem('token'));
        return headers;
    };
    HttpClientHelper.prototype.get = function (url) {
        url = this.baseUrl + url;
        var headers = this.createAuthorizationHeader();
        return this.http.get(url, { headers: headers })
            .map(this.extractResponse)
            .catch(this.handleError);
    };
    HttpClientHelper.prototype.postPreLogin = function (url, data) {
        var body = JSON.stringify(data);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        url = this.baseUrl + url;
        return this.http.post(url, body, { headers: headers })
            .map(this.extractResponse)
            .catch(this.handleErrorPreLogin);
    };
    HttpClientHelper.prototype.post = function (url, data) {
        var body = JSON.stringify(data);
        var headers = this.createAuthorizationHeader();
        url = this.baseUrl + url;
        return this.http.post(url, body, { headers: headers })
            .map(this.extractResponse)
            .catch(this.handleError);
    };
    HttpClientHelper.prototype.postByHeader = function (url, data, header) {
        var body = JSON.stringify(data);
        url = this.baseUrl + url;
        return this.http.post(url, body, { headers: header })
            .map(this.extractResponse)
            .catch(this.handleError);
    };
    HttpClientHelper.prototype.postByHeaderPreLogin = function (url, data, header) {
        var body = JSON.stringify(data);
        url = this.baseUrl + url;
        return this.http.post(url, body, { headers: header })
            .map(this.extractResponse)
            .catch(this.handleErrorPreLogin);
    };
    HttpClientHelper.prototype.extractResponse = function (res) {
        var body = res.json();
        return body.data || {};
    };
    HttpClientHelper.prototype.handleError = function (error) {
        var result = error.json();
        if (!result || !result.error_message) {
            result.error_message = 'Unexpected Error Occured at server';
        }
        else {
            if (result.error_code == '102' || result.error_code == '103') {
                this.router.navigate(['pages']);
            }
        }
        return Observable_1.Observable.throw(result || 'Server error');
    };
    HttpClientHelper.prototype.handleErrorPreLogin = function (error) {
        var result = error.json();
        if (!result || !result.error_message) {
            result.error_message = 'Unexpected Error Occured at server';
        }
        return Observable_1.Observable.throw(result || 'Server error');
    };
    HttpClientHelper = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object, Object])
    ], HttpClientHelper);
    return HttpClientHelper;
}());
exports.HttpClientHelper = HttpClientHelper;
//# sourceMappingURL=app.httpClient.js.map