"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var user_1 = require('../../Services/user');
var SignUp = (function () {
    function SignUp(fb, userService) {
        this.userService = userService;
        this.submitted = false;
        this.invalidInput = false;
        this.loginError = "";
        this.form = fb.group({
            'name': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])]
        });
        this.name = this.form.controls['name'];
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }
    SignUp.prototype.onSubmit = function (values) {
        // your code goes here
        var _this = this;
        this.data = {
            name: values.name,
            email: values.email,
            password: values.password
        };
        console.log("value", this.data);
        this.userService.userSignup(this.data).subscribe(function (data) { return _this.signupSucces(data); }, function (error) { return _this.signupFail(error); });
    };
    SignUp.prototype.signupSucces = function (result) {
        localStorage.setItem('token', result.token);
    };
    SignUp.prototype.signupFail = function (error) {
        console.log(error);
        this.invalidInput = true;
        this.submitted = false;
        this.loginError = error.error_message;
    };
    SignUp = __decorate([
        core_1.Component({
            selector: 'SignUp',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [require('./signup.scss')],
            template: require('./signup.html'),
        }), 
        __metadata('design:paramtypes', [Object, user_1.UserService])
    ], SignUp);
    return SignUp;
}());
exports.SignUp = SignUp;
//# sourceMappingURL=signup.component.js.map