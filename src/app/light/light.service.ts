

import {Injectable} from "@angular/core";
import {Light} from "./light";

@Injectable()
export class LightService {

  lights :Light[] = [];

  constructor() {
  }

  getLights(): Light[] {
    return this.lights;
  }

  addLight(light: Light) {
    light.inputUuid = "light" + this.lights.length;
    this.lights.push(light);
  }
}
