import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarToggleButtonComponent } from './sidebar-toggle-button/sidebar-toggle-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarToggleButtonComponent],
  exports: [
    SidebarToggleButtonComponent
  ]
})
export class SidebarUtilityModule { }
