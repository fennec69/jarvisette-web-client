import {Component, OnInit} from '@angular/core';
import {LightService} from "./light/light.service";
import {Light} from "./light/light";
import {Micro} from "./micro/micro";
import {MicroService} from "./micro/micro.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [LightService, MicroService]
})

export class AppComponent implements OnInit {
  lights :Light[];
  micros :Micro[];

  constructor(private lightService: LightService, private microService :MicroService) {}

  ngOnInit(): void {
    this.lights = this.lightService.getLights();
    this.micros = this.microService.getMicros();
  }

  addLight() {
    this.lightService.addLight(new Light());
    this.lights = this.lightService.getLights();
  }

  addMicro() {
    this.microService.addMicro(new Micro());
    this.micros = this.microService.getMicros();
  }
}
