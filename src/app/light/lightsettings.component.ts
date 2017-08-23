import {Component, Input} from "@angular/core";
import {Light} from "./light";

@Component({
  selector: 'light-settings',
  templateUrl: "./lightsettings.component.html",
  styleUrls: ["./lightsettings.component.scss"]
})
export class LightSettingsComponent {

  ws: WebSocket;
  @Input() light: Light;

  constructor(public snackBar: MdSnackBar, private moduleService :ModuleService) {
  }

  onConnectClicked(): void {
    this.ws = new WebSocket(this.light.url + "/" + this.light.inputUuid);

    this.ws.onopen = (ev: Event) => {
      this.light.isConnected = true;
      let registerCommand = {
        type: 'REGISTERING',
        message: {
          services: ["light"]
        }
      };
      this.ws.send(JSON.stringify(registerCommand));
      console.log("connected");
    };
    this.ws.onerror = (ev: ErrorEvent) => {
      this.showMessage(this.light.inputUuid + " connection error");
    };
    this.ws.onclose = (ev: CloseEvent) => {
      this.light.isConnected = false;
    };
    this.ws.onmessage = (ev: MessageEvent) => {
      console.log(ev.data);
      let inputMessage: LightInputMessageDto = JSON.parse(ev.data);
      this.light.isOn = inputMessage.power;
    };
  }

  onDisconnectClicked(): void {
    this.ws.close()
  }

  sendLocation() {
    let locations = this.moduleService.getLightLocation(this.light);
    console.log(locations);
    let locationCommand = {
      type: 'LOCATION',
      message: {
        locations: locations
      }
    };
    this.ws.send(JSON.stringify(locationCommand));
    this.showMessage(this.light.inputUuid + " location sent");
  }

  showMessage(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }
}

import {MdSnackBar} from "@angular/material";
import {ModuleService} from "../module.service";

export class LightInputMessageDto {
  action: string;
  power: boolean;
}
