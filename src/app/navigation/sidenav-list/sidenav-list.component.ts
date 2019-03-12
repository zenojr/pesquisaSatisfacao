import { Subscription } from 'rxjs';
import { AuthService } from './../../login/auth.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSideNav = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  constructor( private authService: AuthService ) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onClose() {
    this.closeSideNav.emit()
  }

  logOut() {
    this.onClose()
    this.authService.logOut();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
