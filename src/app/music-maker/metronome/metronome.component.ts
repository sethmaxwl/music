import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.css']
})
export class MetronomeComponent implements OnInit {
  bpm = 60;
  metronomeOn = false;
  metronome: any;

  constructor() { }

  ngOnInit() {
  }

  toggleMetronome() {
    this.metronomeOn = !this.metronomeOn;

    if (this.metronomeOn) {
      this.enableMetronome();
    } else {
      this.disableMetronome();
    }
  }

  enableMetronome() {

  }

  disableMetronome() {

  }

}
