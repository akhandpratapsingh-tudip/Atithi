"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var user_1 = require('../../Services/user');
var router_1 = require('@angular/router');
var Login = (function () {
    function Login(fb, userService, router) {
        this.userService = userService;
        this.router = router;
        this.submitted = false;
        this.invalidInput = false;
        this.loginError = "";
        this.form = fb.group({
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }
    Login.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        this.invalidInput = false;
        if (this.form.valid) {
            // your code goes here
            this.data = {
                email: values.email,
                password: values.password
            };
            console.log("value", this.data);
            this.userService.userLogin(this.data).subscribe(function (data) { return _this.loginSucces(data); }, function (error) { return _this.loginFail(error); });
        }
    };
    Login.prototype.loginSucces = function (result) {
        localStorage.setItem('token', result.token);
        this.router.navigate(['dashboard']);
    };
    Login.prototype.loginFail = function (error) {
        console.log(error);
        this.invalidInput = true;
        this.submitted = false;
        this.loginError = error.error_message;
    };
    Login = __decorate([
        core_1.Component({
            selector: 'login',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [require('./login.scss')],
            template: require('./login.html'),
        }), 
        __metadata('design:paramtypes', [Object, user_1.UserService, Object])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login.component.js.map