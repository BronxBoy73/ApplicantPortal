import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("AuthGuard#canActivate called");
    return this.isLoggedIn(state.url);
  }
  isLoggedIn(url: string) {
    this.router.navigate(["/login"]);
    return false;
  }
}
