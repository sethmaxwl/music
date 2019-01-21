import { Component, OnInit } from '@angular/core';
import { SidebarAccessService } from './../sidebar-access.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {

  constructor(private sidebarService: SidebarAccessService) { }

}
