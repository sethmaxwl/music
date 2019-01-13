import { Component, OnInit } from '@angular/core';

const metSound = new Tone.Player('../../assets/Woodblock.wav');

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.css']
})

export class MetronomeComponent implements OnInit {
  bpm = Tone.Transport.bpm.value;
  metronomeEventId: number;

  constructor() { }

  ngOnInit() {
    metSound.loop = false;
    metSound.toMaster();
  }

  playBeat() {
    metSound.start('+0', 0, '1n');
  }

  toggleMetronome(metronomeOn: boolean) {
    if (metronomeOn) {
      this.enableMetronome();
    } else {
      this.disableMetronome();
    }
  }

  enableMetronome() {
    const self = this;
    this.metronomeEventId = Tone.Transport.scheduleRepeat(function (time) {
      self.playBeat();
    }, '4n');
    Tone.Transport.start();
  }

  updateBPM() {
    Tone.Transport.bpm.value = this.bpm;
  }

  disableMetronome() {
    Tone.Transport.clear(this.metronomeEventId);
    Tone.Transport.stop();
  }

}
