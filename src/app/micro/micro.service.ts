

import {Injectable} from "@angular/core";
import {Micro} from "./micro";

@Injectable()
export class MicroService {

  micros :Micro[] = [];

  constructor() {
  }

  getMicros(): Micro[] {
    return this.micros;
  }

  addMicro(micro: Micro) {
    micro.inputUuid = "micro" + this.micros.length;
    this.micros.push(micro);
  }
}
