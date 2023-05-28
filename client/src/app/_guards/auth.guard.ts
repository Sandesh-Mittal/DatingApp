import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private accountService: AccountService, private toastr: ToastrService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (user) return true;
        else {
          this.toastr.error('You shall not pass!')
          return false
        }
      })
    )
  }
}
