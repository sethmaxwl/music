import { Component } from '@angular/core';
import { Howl, Howler } from 'howler';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * from 'jquery';
import * from 'tone';
// var sound = new Howl({
//   src: ['assets/bass.mp3'],
//   autoplay: false,
//   loop: false,
//   html5: true,
//   preload: true
// });
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgbModule]
})
export class AppComponent {
  title = 'music';
  let octave = 5;
  const keys = [];
  let prevKey = 0;
  const instruments = {
    keyboard: {
      a: 'Cl',
      w: 'C#l',
      s: 'Dl',
      e: 'D#l',
      d: 'El',
      f: 'Fl',
      t: 'F#l',
      g: 'Gl',
      y: 'G#l',
      h: 'Al',
      u: 'A#l',
      j: 'Bl',
      // Upper octave.
      k: 'Cu',
      o: 'C#u',
      l: 'Du',
      p: 'D#u',
      ';': 'Eu',
      "'": 'Fu',
      ']': 'F#u',
      '\\': 'Gu',
    },
  };
  let instrument = Instruments.keyboard;
  const keyToNote = function(key){
    const note = instrument[key];
    if (!note) {
      return;
    }
    return Tone.Frequency(note.replace('l', octave).replace('u', octave + 1)).toNote();
  };

}
