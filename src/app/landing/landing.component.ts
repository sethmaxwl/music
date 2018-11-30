import { Component, OnInit } from '@angular/core';
import { SidebarAccessService } from './../sidebar-access.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {

  constructor(private sidebarService: SidebarAccessService) { }

  ngOnInit() {
    
  }

}
