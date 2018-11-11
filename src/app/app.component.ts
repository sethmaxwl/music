import { Component } from '@angular/core';
import { Howl, Howler } from 'howler';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * from 'jquery';
import * from 'tone';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgbModule]
})
export class AppComponent {
  title = "music";
  
}
