

import {Injectable} from "@angular/core";
import {Light} from "./light/light";
import {Micro} from "./micro/micro";

@Injectable()
export class ModuleService {

  lights :Light[] = [];
  micros :Micro[] = [];

  constructor() {
  }

  getLights(): Light[] {
    return this.lights;
  }

  addLight(light: Light) {
    light.inputUuid = "light" + this.lights.length;
    light.x = 0;
    light.y = 0;
    this.lights.push(light);
  }

  getMicros(): Micro[] {
    return this.micros;
  }

  addMicro(micro: Micro) {
    micro.inputUuid = "micro" + this.micros.length;
    micro.x = 0;
    micro.y = 0;
    this.micros.push(micro);
  }

  getLightLocation(light :Light) : any {
    let locationMap  :{[uuid:string]: number} = {};
    for(let micro of this.micros) {
      let distance = Math.sqrt(Math.pow((light.x - micro.x), 2) + Math.pow((light.y - micro.y), 2));
      locationMap[micro.inputUuid] = distance;
    }

    return locationMap;
  }
}
