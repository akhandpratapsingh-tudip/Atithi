import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/app.user';
import { Router, ActivatedRoute }       from '@angular/router';
import { AuthenticationHelper } from '../../app.authentication.ts';
@Component({
  selector: 'addVisitor',
  encapsulation: ViewEncapsulation.None,
  template: require('./addVisitor.html'),
  styles: [require('./addVisitor.scss')]
})

export class addVisitor {
  public form:FormGroup;
  public name:AbstractControl;
  public email:AbstractControl;
  public mobile:AbstractControl;
  public in_time:AbstractControl;
  public out_time:AbstractControl;
  public submitted:boolean = false;
  public invalidInput:boolean = false;
  public registerError:string = "";
  userData: string;
  loginError:any;
  data: any;
  private searchStr: string;

  constructor(fb: FormBuilder, private userService: UserService,  private router: Router, private authentication: AuthenticationHelper, private spinner: BaThemeSpinner, private utility: Utility) {


    //////////////////////////////////////////////////////////////////
    /*toastr.options = {positionClass: 'toast-top-right',};*/
    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': [],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      'in_time': [],
      'out_time': []
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.mobile = this.form.controls['mobile'];
    this.in_time = this.form.controls['in_time'];
    this.out_time = this.form.controls['out_time'];


  }

  public onSubmit(values:Object):void {

    this.addVistor(values);

  }
  public addVistor(values){
    /*var parsedUnixTime = new Date('Mon, 25 Dec 1995 13:30:00 GMT').getUnixTime();*/
  console.log("Values",values);
  this.submitted = true;
  this.invalidInput = false;
  var intime=1480132800;
  var outtime=1480135800;
    this.data ={
      name: values.name,
      email: values.email,
      phone_no:values.mobile,
      in_time: new Date(values.in_time).getTime()/1000,
      out_time: new Date(values.out_time).getTime()/1000
    };
  //this.data=JSON.stringify(values);
  console.log("Data" +this.data);
   this.userService.addVisitor(this.data).subscribe(
       data => this.addSucces(data),
      error =>  this.registerFail(error)
    )

}
public addSucces(result) {
    console.log("i am at addSucess");
    window.confirm('Visitor Added Successfully');
    this.router.navigate(['dashboard']);

  }

  public registerFail(error){
    this.spinner.hideProgress();
    /*toastr.error(error.message);*/
    this.invalidInput = true;
    this.submitted = false;
    this.loginError = error.message;
  }




}



