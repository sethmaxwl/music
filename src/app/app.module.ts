import { SidebarUtilityModule } from './sidebar-utility/sidebar-utility.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LandingComponent } from './landing/landing.component';
import { MatButtonModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginModule } from './login.module';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LandingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    MatGridListModule,
    SidebarUtilityModule,
    MatButtonModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
