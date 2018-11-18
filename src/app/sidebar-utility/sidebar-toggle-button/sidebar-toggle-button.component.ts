import { SidebarAccessService } from './../../sidebar-access.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-toggle-button',
  templateUrl: './sidebar-toggle-button.component.html',
  styleUrls: ['./sidebar-toggle-button.component.css']
})
export class SidebarToggleButtonComponent implements OnInit {

  constructor(private sidebarService: SidebarAccessService) { }

  ngOnInit() {
  }

  toggleSidebar(): void {
    this.sidebarService.getSidebarReference().toggle();
  }

}
