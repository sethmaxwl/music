import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.css']
})
export class MetronomeComponent implements OnInit {
  bpm = 60;
  metronome: any;
  metronomeSound: any;
  metronomePlayer: any;

  constructor() { }

  ngOnInit() {
    this.metronomeSound = new Tone.OmniOscillator('c4', 'square2').start();
    this.metronomePlayer = new Tone.AmplitudeEnvelope().toMaster();

    this.metronomeSound.connect(this.metronomePlayer);
  }

  playBeat() {
    this.metronomePlayer.triggerAttackRelease(0.05);
  }

  toggleMetronome(metronomeOn: boolean) {
    if (metronomeOn) {
      this.enableMetronome();
    } else {
      this.disableMetronome();
    }
  }

  enableMetronome() {
    this.metronome = new Tone.Loop(this.playBeat, this.bpm / 60.0).start();
  }

  disableMetronome() {
    this.metronome.stop();
  }

}
