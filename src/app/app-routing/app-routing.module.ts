import { MakerComponent } from './../music-maker/maker/maker.component';
import { MusicMakerModule } from './../music-maker/music-maker.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './../landing/landing.component';

const routes: Routes = [
  {
    path: 'maker',
    component: MakerComponent
  },
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
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
