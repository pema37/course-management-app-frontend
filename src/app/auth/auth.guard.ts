import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {

  constructor(
    private router: Router, 
    private user_service: UserService
  ) {}

  canActivate(): boolean {

    if (this.user_service.isLoggedIn === false) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}


