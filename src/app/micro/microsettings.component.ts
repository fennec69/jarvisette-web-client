import {Component, Input} from "@angular/core";
import {Micro} from "./micro";

@Component({
  selector: 'micro-settings',
  templateUrl: "./microsettings.component.html",
  styleUrls: ["./microsettings.component.scss"]
})
export class MicroSettingsComponent {

  ws: WebSocket;
  @Input() micro: Micro;

  constructor(public snackBar: MdSnackBar) {
  }

  onConnectClicked(): void {
    this.ws = new WebSocket(this.micro.url + "/" + this.micro.inputUuid);

    this.ws.onopen = (ev: Event) => {
      this.micro.isConnected = true;
      let registerCommand = {
        type: 'REGISTERING',
        message: {
          services: ["micro"]
        }
      };
      this.ws.send(JSON.stringify(registerCommand));
      console.log("connected");
    };
    this.ws.onerror = (ev: ErrorEvent) => {
      this.showMessage(this.micro.inputUuid + " connection error");
    };
    this.ws.onclose = (ev: CloseEvent) => {
      this.micro.isConnected = false;
    };
    this.ws.onmessage = (ev: MessageEvent) => {
      console.log(ev.data);
    };
  }

  onDisconnectClicked(): void {
    this.ws.close()
  }

  sendLocation() {
    let locationCommand = {
      type: 'LOCATION',
      message: {
        locations: {
          test1: 10,
          test2: 5
        }
      }
    };
    this.ws.send(JSON.stringify(locationCommand));
    this.showMessage(this.micro.inputUuid + " location sent");
  }

  showMessage(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }
}

import {MdSnackBar} from "@angular/material";

