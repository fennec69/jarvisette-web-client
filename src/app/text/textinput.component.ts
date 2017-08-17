/**
 * Created by farid on 07/08/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'text-input',
  templateUrl: "./textinput.component.html",
  styleUrls:["./textinput.component.scss"]
})
export class TextInputComponent implements OnInit {
  @Input() config: TextInputModel;
  ws: WebSocket;
  connected = false;
  showSettings = true;
  messages :Message[] = [];
  outputTypes = [
    "text",
    "audio"
  ];

  constructor(public snackBar: MdSnackBar) {}

  ngOnInit(): void {
    this.config = {
      url: "ws://localhost:8080",
      inputUuid: "",
      outputUuid: "",
      outputType: this.outputTypes[0],
      text: ""
    };
  }

  onConnectClicked(): void {
    this.ws = new WebSocket(this.config.url + "/" + this.config.inputUuid);

    this.ws.onopen = (ev: Event) => {
      this.connected = true;
      let registerCommand = {
        type :'REGISTERING',
        message: {
          services: ["text"]
        }
      };
      this.ws.send(JSON.stringify(registerCommand));
      console.log("connected");
    };
    this.ws.onclose = (ev: CloseEvent) => {
      this.connected = false;
      console.log("disconnected");
    };
    this.ws.onerror = (ev: ErrorEvent) => {
      this.showMessage(this.config.inputUuid + " connection error");
    };
    this.ws.onmessage = (ev: MessageEvent) => {
      let inputMessage : InputMessageDto = JSON.parse(ev.data);
      let message = new Message();
      message.in = true;
      message.message = inputMessage.message;
      this.messages.push(message)
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

  sendMessage(): void {
    let inputCommand = {
      type :"TEXT_COMMAND",
      message: {
        responseUUID: this.config.outputUuid,
        responseType: this.config.outputType,
        text: this.config.text
      }
    };
    if(this.connected) {
      this.ws.send(JSON.stringify(inputCommand));
      let message = new Message();
      message.in = false;
      message.message = this.config.text;
      this.messages.push(message)
      this.config.text = "";
    }
  }

  onOutputTypeSelected(outputType: string): void {
    this.config.outputType = outputType;
  }
}

export class TextInputModel {
  url: string;
  inputUuid: string;
  outputUuid: string;
  outputType: string;
  text: string;
}

export class InputMessageDto {
  action: string;
  message: string;
}

export class Message {
  in: boolean;
  message: string;
}
