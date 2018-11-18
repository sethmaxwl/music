import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidebarAccessService {
  sidebar: MatSidenav;

  constructor() { }

  setSidebarReference(appSidebar: MatSidenav): void {
    this.sidebar = appSidebar;
  }

  getSidebarReference(): MatSidenav {
    return this.sidebar;
  }
}
