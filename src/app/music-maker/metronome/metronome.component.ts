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

  constructor() { }

  ngOnInit() {
  }

  playBeat() {
    const metSound = new Tone.OmniOscillator('c4', 'square3').start();
    const metPlayer = new Tone.AmplitudeEnvelope().toMaster();

    metSound.connect(metPlayer);

    metPlayer.triggerAttackRelease(0.05);
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
    this.metronomeEventId = Tone.Transport.scheduleRepeat(this.playBeat, '4n');
    Tone.Transport.start();
  }

  disableMetronome() {
    Tone.Transport.clear(this.metronomeEventId);
    Tone.Transport.stop();
  }

}
