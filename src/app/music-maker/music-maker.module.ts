import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakerComponent } from './maker/maker.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  declarations: [MakerComponent],
  exports: [MakerComponent]
})
export class MusicMakerModule { }
