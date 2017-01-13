import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../../Services/user';
import { Router, RouterModule } from '@angular/router'
import {TokenHelper} from '../token/token';
@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  templateUrl:'./login.html',
  })
export class Login {
  private tokenKey: string = 'tokenKey';
  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public invalidInput:boolean = false;
  public loginError:string = "";
  useData: string;
  data:any;
  logFail: boolean = false;
  constructor(public tokenhelp: TokenHelper ,fb:FormBuilder,private userService: UserService, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }
  public onSubmit(values:Object):void {
    this.submitted = true;
    this.invalidInput = false;
    if (this.form.valid) {
      this.data = {
        email: values.email,
        password: values.password
      }
      console.log("value",this.data)
      this.userService.userLogin(this.data).subscribe(
        data => this.loginSucces(data),
        error =>  this.loginFail(error)
      );
    }
  }
  public loginSucces(result) {
  this.router.navigate(['dashboard']);
  }
  public loginFail(error){
    this.invalidInput = true;
    this.submitted = false;
    this.loginError = error.error_message;
    this.logFail = true;
  }
}
