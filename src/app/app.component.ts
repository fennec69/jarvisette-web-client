import {Component, OnInit} from '@angular/core';
import {Light} from "./light/light";
import {Micro} from "./micro/micro";
import {ModuleService} from "./module.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ModuleService]
})

export class AppComponent implements OnInit {
  lights :Light[];
  micros :Micro[];

  constructor(private moduleService: ModuleService) {}

  ngOnInit(): void {
    this.lights = this.moduleService.getLights();
    this.micros = this.moduleService.getMicros();
  }

  addLight() {
    this.moduleService.addLight(new Light());
    this.lights = this.moduleService.getLights();
  }

  addMicro() {
    this.moduleService.addMicro(new Micro());
    this.micros = this.moduleService.getMicros();
  }
}
