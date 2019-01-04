import { SidebarUtilityModule } from './../sidebar-utility/sidebar-utility.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakerComponent } from './maker/maker.component';
import {MatSliderModule} from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    SidebarUtilityModule,
    MatSliderModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [MakerComponent],
  exports: [MakerComponent]
})
export class MusicMakerModule { }
