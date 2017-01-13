import { Injectable, Inject } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClientHelper } from '../app.httpclient';
import {AuthenticationHelper} from '../app.authentication';
import {TokenHelper} from '../pages/token/token';
import 'rxjs/Rx';
@Injectable()
export class UserService {
  private loginUrl: string = 'api/auth/login';
  private signupUrl: string = 'api/auth/register';
  private httpClient: HttpClientHelper;
  private GetvisitorUrl:string= 'api/visitors?token=';
  private httpclient:Http;


  private AddvisitorUrl:string = 'api/visitors/store?token=';
  constructor(public tokenhelp: TokenHelper,httpClient: HttpClientHelper,private htttp:Http, private authentication:AuthenticationHelper ) {
    this.httpClient = httpClient;
  }

  // For signup service

  userLogin(data): Observable<any> {

    return this.httpClient.postPreLogin(this.loginUrl, data)
      .map(this.extractResponse)
      .catch(this.handleError);
  }

  userSignup(data): Observable<any> {
    return this.httpClient.postPreLogin(this.signupUrl, data)
      .map(this.extractResponse)
      .catch(this.handleError);
  }

private extractResponse(res: JSON) {
    return res;
  }
  private handleError(error: any) {
    console.log("incorrect credentials");
    return Observable.throw(error);


  }


addHeader(): Headers {
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
    //  headers.append('token', localStorage.getItem('token'));
     return headers;
  }
  addVisitor (data): Observable<any> {
    console.log("Save:", data);
    let url = "http://atithi.dev.tudip.com/api/visitors/store?token={"+localStorage.getItem('token')+"}";
    let header = this.addHeader();
    return this.htttp.post(url, data,{headers:header})
        .map(this.addvisDone)
      .catch(this.handleError);
  }
  addVisitorHeader():Headers{

   let headers=new Headers();
   headers.append('Content-Type','application/json');
   return headers;
  }


  getAllVisitor (): Observable<any> {

    let url="http://atithi.dev.tudip.com/api/visitors?token={"+localStorage.getItem('token')+'}';
    let headers=this.addVisitorHeader();
    return this.htttp.get(url,{headers:headers})
        .map(this.extResponse)
        .catch(this.handleError);
  }


getDeleted (id): Observable<any> {
    return this.htttp.delete("http://atithi.dev.tudip.com/api/visitors/"+id+"?token={"+localStorage.getItem('token')+"}")
        .map(this.extResponse)
        .catch(this.handleError);
  }

  getUpdate (id,result): Observable<any> {
    console.log("=====",result);
    console.log("id=======",id);
    return this.htttp.post("http://atithi.dev.tudip.com/api/visitors/"+id+"?token={"+localStorage.getItem('token')+"}",result)
        .map(this.extResponse)
        .catch(this.handleError);
  }


  addvisDone(){}
 private extResponse(res: Response) {
    let body = res.json();
    return body;
  }
}
