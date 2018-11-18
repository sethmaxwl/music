import { MakerComponent } from './../music-maker/maker/maker.component';
import { MusicMakerModule } from './../music-maker/music-maker.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'maker', component: MakerComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MusicMakerModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
