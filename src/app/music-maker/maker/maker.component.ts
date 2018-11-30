import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.css']
})
export class MakerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    const oscillator = new Tone.OmniOscillator('C#4', 'pwm');
    const noiseMaker = new Tone.Noise('white').start();
    const envelope = new Tone.Envelope();

    oscillator.connect(noiseMaker);
    noiseMaker.connect(envelope);
    envelope.toMaster();

    envelope.trigger(1);
  }

}
