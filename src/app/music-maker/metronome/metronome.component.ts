import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.css']
})
export class MetronomeComponent implements OnInit {
  bpm = Tone.Transport.bpm.value;
  playingBpm: number;
  metronomeEventId: number;
  metSound: Tone.Player;
  metEnv: Tone.AmplitudeEnvelope;
  constructor() { }

  ngOnInit() {
    this.metSound = new Tone.Player("../../assets/Woodblock.wav");
    this.metSound.toMaster();
    this.metEnv = new Tone.AmplitudeEnvelope().toMaster();
  }

  playBeat() {
    this.metSound.start();
  }

  toggleMetronome(metronomeOn: boolean) {
    if (metronomeOn) {
      this.enableMetronome();
    } else {
      this.disableMetronome();
    }
  }

  enableMetronome() {
    this.playingBpm = this.bpm;

    Tone.Transport.bpm.value = this.bpm;
    this.metronomeEventId = Tone.Transport.scheduleRepeat(this.playBeat(), '4n');
    Tone.Transport.start();
  }

  disableMetronome() {
    Tone.Transport.clear(this.metronomeEventId);
    Tone.Transport.stop();
  }

}
