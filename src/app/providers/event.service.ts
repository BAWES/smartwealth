import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  public userLogout$ = new Subject();
  public userLogin$ = new Subject(); 
  public setOneSignalSubscription$ = new Subject();
  
  public internetOffline$ = new Subject();
  public internetOnline$ = new Subject();

  public error404$ = new Subject();
  public error500$ = new Subject();

  public checkPendingRequest$ = new Subject();
}
