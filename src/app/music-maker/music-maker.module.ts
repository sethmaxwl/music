import { SidebarUtilityModule } from './../sidebar-utility/sidebar-utility.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakerComponent } from './maker/maker.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    SidebarUtilityModule
  ],
  declarations: [MakerComponent],
  exports: [MakerComponent]
})
export class MusicMakerModule { }
