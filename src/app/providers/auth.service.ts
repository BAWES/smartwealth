import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  RouterEvent,
  RouteConfigLoadStart, CanDeactivate
} from '@angular/router';
import {Observable, empty, throwError} from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// import { Plugins } from '@capacitor/core';
// services
import { EventService } from './event.service';



// const { Storage } = Plugins;

declare var navigator;

/**
 * Handles all Auth functions
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  public isLoggedIn = true;

  // Logged in agent details
  public name = 'Khalid';
  public email = 'Khalid@gmail.com';
  
  public disableMenu = true;

  constructor(
      public router: Router,
      public eventService: EventService,
  ) {
  }

  logout() {
    //this.isLoggedIn = false; 
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.disableMenu = (route.data.disableMenu && route.data.disableMenu == true);
    return true;
  }

  /**
   * Handles Caught Errors from All Authorized Requests Made to Server
   * @returns {Observable}
   */
  public _handleError(error: any): Observable<any> {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    // Handle Bad Requests
    // This error usually appears when agent attempts to handle an
    // account that he's been removed from assigning
    if (error.status === 400) {
      // this.eventService.agentRemoved$.next();
      // return empty();
    }

    // Handle No Internet Connection Error

    if (error.status == 0 || error.status == 504) {
      this.eventService.internetOffline$.next();
      // this._auth.logout("Unable to connect to tamr servers. Please check your internet connection.");
     // return empty();
    }

    if (!navigator.onLine || error.status === 504) {
      this.eventService.internetOffline$.next();
      // return empty();
    }

    // Handle Expired Session Error
    if (error.status === 401) {
      // this.logout('Session expired, please log back in.');
      // return empty();
    }

    // Handle internal server error - 500
    if (error.status === 500) {
      this.eventService.error500$.next();
      // return empty();
    }

    // Handle page not found - 404 error
    if (error.status === 404) {
      this.eventService.error404$.next();
      // return empty();
    }

    return throwError(errMsg);
  }
}

