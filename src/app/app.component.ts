import { SidebarAccessService } from './sidebar-access.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidebar: MatSidenav;

  constructor(private sidebarService: SidebarAccessService) {
  }

  ngOnInit() {
    this.sidebarService.setSidebarReference(this.sidebar);
  }
}
