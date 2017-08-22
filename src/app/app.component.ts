import {Component, OnInit} from '@angular/core';
import {LightService} from "./light/light.service";
import {Light} from "./light/light";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [LightService]
})

export class AppComponent implements OnInit {
  lights :Light[];

  constructor(private lightService: LightService) {}

  ngOnInit(): void {
    this.lights = this.lightService.getLights();
  }

  addLight() {
    this.lightService.addLight(new Light());
    this.lights = this.lightService.getLights();
  }
}
