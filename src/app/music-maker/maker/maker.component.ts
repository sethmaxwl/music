import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.css']
})

export class MakerComponent {
  octave = 4;
  @HostListener('window:keydown', ['$event']) keyEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 65: //A
        this.makeMusic("C" + this.octave);
        break;
      case 87: //W
        this.makeMusic("C#" + this.octave);
        break;
      case 83: //S
        this.makeMusic("D" + this.octave);
        break;
      case 69: //E
        this.makeMusic("D#" + this.octave);
        break;
      case 68: //D
        this.makeMusic("E" + this.octave);
        break;
      case 70: //F
        this.makeMusic("F" + this.octave);
        break;
      case 84: //T
        this.makeMusic("F#" + this.octave);
        break;
      case 71: //G
        this.makeMusic("G" + this.octave);
        break;
      case 89: // Y
        this.makeMusic("G#" + this.octave);
        break;
      case 72: //H
        this.makeMusic("A" + this.octave);
        break;
      case 85: // U
        this.makeMusic("A#" + this.octave);
        break;
      case 74: //J
        this.makeMusic("B" + this.octave);
        break;
      case 77: //M
        this.increment();
        break;
      case 78: //N
        this.decrement();
        break;
    }
  }
  makeMusic(frequency) {
    var osc = new Tone.OmniOscillator(frequency, "pwm");
    osc.start();
    var env = new Tone.AmplitudeEnvelope();
    osc.connect(env);
    env.toMaster();
    osc.start();
    env.triggerAttackRelease(1);
  }
  increment(){
    if (this.octave < 8){
      this.octave++;
    }
  }
  decrement(){
    if (this.octave > 2){
      this.octave--;
    }
  }
}
