

import {Injectable} from "@angular/core";
import {Light} from "./light";

@Injectable()
export class LightService {

  lights :Light[] = [];

  constructor() {
    for(let i = 0; i < 5; i++) {
      let light = new Light();
      light.inputUuid = "light" + i;
      light.bottom = 20*i + "%";
      light.right = "50%";
      this.lights.push(light);
    }
  }

  getLights(): Light[] {
    return this.lights;
  }
}
