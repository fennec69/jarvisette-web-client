/**
 * Created by farid on 07/08/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'light-output',
  templateUrl: "./lightoutput.component.html",
  styleUrls: ["./lightoutput.component.scss"]
})
export class LightOutputComponent implements OnInit {

  ws: WebSocket;
  isOn: boolean;
  isConnected: boolean;
  @Input() url: string;
  @Input() inputUuid: string;
  showSettings: boolean;

  constructor(public snackBar: MdSnackBar) {}

  ngOnInit(): void {
    this.isOn = false;
    this.isConnected = false;
    this.url = "ws://localhost:8080";
    this.inputUuid = "";
    this.showSettings = false;
  }

  toggleSettings(): void {
    this.showSettings = !this.showSettings;
  }

  onConnectClicked(): void {
    this.ws = new WebSocket(this.url + "/" + this.inputUuid);

    this.ws.onopen = (ev: Event) => {
      this.isConnected = true;
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
      this.showMessage(this.inputUuid + " connection error");
    };
    this.ws.onclose = (ev: CloseEvent) => {
      this.isConnected = false;
    };
    this.ws.onmessage = (ev: MessageEvent) => {
      console.log(ev.data);
      let inputMessage : LightInputMessageDto = JSON.parse(ev.data);
      this.isOn = inputMessage.power;
    };
  }

  onDisconnectClicked(): void {
    this.ws.close()
  }

  showMessage(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }
}

export class LightInputMessageDto {
  action: string;
  power: boolean;
}


