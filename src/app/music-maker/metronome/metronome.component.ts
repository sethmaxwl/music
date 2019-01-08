import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.css']
})
export class MetronomeComponent implements OnInit {
  bpm = Tone.Transport.bpm.value;
  metronomeEventId: number;
  metronome: any;
  metronomeSound: any;
  metronomePlayer: any;

  constructor() { }

  ngOnInit() {
    this.metronomeSound = new Tone.OmniOscillator('c4', 'square3').start();
    this.metronomePlayer = new Tone.AmplitudeEnvelope().toMaster();

    this.metronomeSound.connect(this.metronomePlayer);
  }

  playBeat() {
    console.log('Met beat played');
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
    Tone.Transport.bpm.value = this.bpm;
    this.metronomeEventId = Tone.Transport.scheduleRepeat(this.playBeat, '4n');
    Tone.Transport.start();
  }

  disableMetronome() {
    Tone.Transport.clear(this.metronomeEventId);
    Tone.Transport.stop();
  }

}
