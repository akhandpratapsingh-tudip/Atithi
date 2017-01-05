import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../../Services/user';
import { Router, RouterModule }  from '@angular/router';
@Component({
  selector: 'SignUp',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./signup.scss'), `
  #inputName3, #inputPassword3, #inputEmail3 {
    padding:15px;
    width:80%;
}
input[type=submit] {
    padding:7px;
}
.ng-valid[required], .ng-valid.required  {
  border-left: 5px solid #42A948; /* green */
}

.ng-invalid:not(form)  {
  border-left: 5px solid #a94442; /* red */
}
  `],
  template: require('./signup.html'),
})
export class SignUp {
  public form:FormGroup;
  public email:AbstractControl;
  public name:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public invalidInput:boolean = false;
  public loginError:string = "";
  useData: string;
  data:any;

  constructor(fb:FormBuilder,private userService: UserService, private router:Router) {
    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];

  }

  public onSubmit(values:Object):void {
      this.data = {
        name: values.name,
        email: values.email,
        password: values.password
      }
      this.userService.userSignup(this.data).subscribe(
        data => this.signupSucces(data),
        error =>  this.signupFail(error)
      );

  }
 public signupSucces(result) {
  localStorage.setItem('token',result.token);
  this.router.navigate(['login']);
  }
  public signupFail(error){

    console.log(error);
    this.invalidInput = true;
    this.submitted = false;
    this.loginError = error.error_message;
  }
}
