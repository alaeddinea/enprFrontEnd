import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems, navItems1, navItemsUser, navItemsManipulation, navItemsPsycho, navItemsSante } from '../../_nav';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../_services/token-storage.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  currentUser: any;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private tokenStorageService: TokenStorageService, private token: TokenStorageService, @Inject(DOCUMENT) _document?: any) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.currentUser = this.token.getUser();
    if (this.currentUser == null) {
      this.router.navigate(['']);
    } else if (this.currentUser.roles.some((item) => item == 'ROLE_ADMIN')) {
      this.navItems = navItems;
    } else if (this.currentUser.roles.some((item) => item == 'ROLE_USER')) {
      this.navItems = navItemsUser;
    }  else if (this.currentUser.roles.some((item) => item == 'ROLE_MANIPULATION')) {
      this.navItems = navItemsManipulation;
    }  else if (this.currentUser.roles.some((item) => item == 'ROLE_PSYCHO')) {
      this.navItems = navItemsPsycho;
    } else if (this.currentUser.roles.some((item) => item == 'ROLE_SANTE')) {
    this.navItems = navItemsSante;
  }

  }
  ngOnDestroy(): void {
    this.changes.disconnect();
  }
  logout(): void {
    this.tokenStorageService.signOut();
    // window.location.reload();
    this.router.navigate(['']);

  }
}
