import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  isLoginUser  : boolean = false

  submitHandler(username : string , password : string){
    if(username && password){
      this.isLoginUser = true
      return this.isLoginUser
    }else{
      this.isLoginUser = false
      return this.isLoginUser
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.isLoginUser
  }

  constructor() { }
}
