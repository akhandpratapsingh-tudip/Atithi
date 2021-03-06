import {ViewChild, OnInit, trigger} from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators,NgModel } from '@angular/forms';
import {UserService} from'../../Services/user';
import {AuthenticationHelper} from '../../app.authentication';
import {Component, ViewEncapsulation} from '@angular/core';
import * as moment from 'moment';
import {Visitor} from'./visitor';
import { Router, ActivatedRoute }       from '@angular/router';

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl:'./dashboard.html',
  styles: [require('./dashboard.scss')],
})

export class dashboard implements OnInit  {
  public form:FormGroup;
  public name:AbstractControl;
  public email:AbstractControl;
  public mobile:AbstractControl;
  public in_time:AbstractControl;
  public out_time:AbstractControl;
  public submitted:boolean = false;
  public invalidInput:boolean = false;
  public registerError:string = "";
  public id;
  public dates: string;
  public dates1:string;
   public visitors: Visitor[];
   public visitorEdit: Visitor;
   public editVisitor: boolean;
   public hideElement:boolean=true;
 userData: string;
  loginError:any;
  data: any;

constructor(fb: FormBuilder, private userService: UserService ,  private router: Router, private authentication: AuthenticationHelper){

 this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      'in_time': '',
      'out_time': ''
    });
    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.mobile = this.form.controls['mobile'];
    this.in_time = this.form.controls['in_time'];
    this.out_time = this.form.controls['out_time'];
}
ngOnInit():void {
  this.getVisitors();
}

public onSubmit(values:Object):void {
    this.addVisitor(values);
  }
  public addVisitor(values){
  this.submitted = true;
  this.invalidInput = false;
  var intime=1480132800;
  var outtime=1480135800;
    this.data ={
      name: values.name,
      email: values.email,
      phone_no:values.mobile,
      in_time: new Date(values.in_time).getTime()/1000,
      out_time: new Date(values.out_time).getTime()/1000,

    };

   this.userService.addVisitor(this.data).subscribe(
       data => this.addSucces(data),
      error =>  this.registerFail(error)
    )

}
 public addSucces(result) {
    location.reload();
  }

  public registerFail(error){
    this.invalidInput = true;
    this.submitted = false;
    this.loginError = error.message;
  }

 public getVisitors(){
    this.userService.getAllVisitor().subscribe(
        data => this.getAll(data),
        error =>  this.Error(error)
    );}

public getAll(data) {
    this.visitors = data;
  }

public delete(id){
    if(window.confirm("Really want to delete the visitor:"))
      this.userService.getDeleted(id).subscribe(
          data => this.getVisitor(),
          error =>  this.Error(error)
      )
  }


  public update(result){
    this.data ={
      name: result.name,
      email: result.email,
      phone_no:result.mobile,
      in_time: new Date(result.in_time).getTime()/1000,
      out_time: new Date(result.out_time).getTime()/1000,
    };
   this.userService.getUpdate(this.id,this.data).subscribe(
        data => this.getSucces(),
        error =>  this.Error(error)
    )
  }

public edit(visitorS) {
  console.log("Edit:", visitorS);
  this.editVisitor = true;
  this.visitorEdit = visitorS;
  // this.form.controls['in_time'].setValue('07-07-2000' );
  // console.log("this.visitorEdit.in_time:", this.visitorEdit.in_time);
  // this.visitorEdit.in_time = new Date(this.visitorEdit.in_time);
  // this.visitorEdit.in_time = Date.parse(this.visitorEdit.in_time);
  // console.log("this.visitorEdit.in_time:", (this.visitorEdit.in_time));
  this.id=visitorS.id;
}


public getVisitor(){
    this.userService.getAllVisitor().subscribe(
        data => this.getAll(data),
        error =>  this.Error(error)
    )
    }

public getSucces() {
    this.getVisitor();
    this.editVisitor = false;
    this.hideElement=true;
    location.reload();
}

public Error(error){
    this.invalidInput = true;
    this.submitted = false;
    this.loginError = error.message;
  }

  public logout() {
    localStorage.removeItem('token');
  }
}

