import { Component } from '@angular/core';
import { Howl, Howler } from 'howler';
const { Howl, Howler } = require('howler');
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgbModule]
})
export class AppComponent {
  title = 'music';
  playMusic() {
    sound.play();
  }
}
var sound = new Howl({
  src: ['assets/bass.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.5
});
