import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './../landing/landing.component'

const routes: Routes = [
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
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
