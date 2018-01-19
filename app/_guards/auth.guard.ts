import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthGuard implements CanActivate {
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        
        if (localStorage.getItem('currentUser')) {
            
            // check if token expired
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));

           // if(this.jwtHelper.isTokenExpired(currentUser.token)){
                
             //   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
               // return false;
            //}

            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }  
}