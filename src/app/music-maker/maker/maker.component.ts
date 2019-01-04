import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.css']
})

export class MakerComponent {
  number = 1;
  maxOctave = 8;
  minOctave = 2;
  types = ["pwm", "sine", "pulse"];
  octave = 4;
  type = "pwm";
  env = new Tone.AmplitudeEnvelope();
  displayMessage = "Selected type: " + this.type;
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
    var osc = new Tone.OmniOscillator(frequency, this.type);
    osc.start();
    var env = new Tone.AmplitudeEnvelope();
    osc.connect(env);
    env.toMaster();
    osc.start();
    env.triggerAttack();
    setTimeout(function(){
      osc.dispose();
    }, (this.number * 1000));
  }
  onKey(event) {this.number = event.target.value;}
  increment(){
    if (this.octave < this.maxOctave){
      this.octave++;
    }
  }
  decrement(){
    if (this.octave > this.minOctave){
      this.octave--;
    }
  }
  updateSelection(selection) {
    this.type = selection;
    if (selection == 'sine') {
      if (this.octave < 4) {
        this.octave = 4;
      }
      this.minOctave = 4;
    } else {
      this.minOctave = 2;
    }
    this.displayMessage = "Selected type: " + selection;
  }
}
