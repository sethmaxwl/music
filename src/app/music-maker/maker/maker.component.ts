import { Component, OnInit } from '@angular/core';
import { SidebarAccessService } from 'src/app/sidebar-access.service';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.css']
})
export class MakerComponent implements OnInit {

  constructor(private sidebarService: SidebarAccessService) { }

  ngOnInit() {
  }

  toggleSidebar(): void {
    const sidebar = this.sidebarService.getSidebarReference();

    if (sidebar) {
      sidebar.toggle();
    }
  }

}
