import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../providers/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // TODO si l'utilisateur n'est pas authentifié, alors rediriger vers la page de
    // login. La fonction retourne "false"
    if(!this.authService.isLogged()){
      this.router.navigate(['/login'])
      return false
    }
    // TODO si l'utilisateur est authentifié, alors retourner "true"
    return true
  }

};
