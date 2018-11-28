import { Component, OnInit } from '@angular/core';
import { SidebarAccessService } from './../sidebar-access.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit{

  constructor(private sidebarService: SidebarAccessService) { }

  ngOnInit() {
    window.document.body.style.backgroundImage = 'url("assets/landing-backdrop.svg")';
    window.document.body.style.backgroundRepeat = 'no-repeat';
    window.document.body.style.backgroundSize = 'cover';
    window.document.body.style.backgroundPosition = 'center center';
    window.document.body.style.overflowY = 'hidden';
  }

}
