import { Injectable, Inject } from '@angular/core';
@Injectable()

export class TokenHelper {
    public token: any;
    setToken(token){
        this.token = token;
        console.log('token saved',this.token)
    }
    getToken(){
        return this.token;
    }
}
