/**
 * Created by farid on 07/08/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Light} from "./light";

@Component({
  selector: 'light-output',
  templateUrl: "./lightoutput.component.html",
  styleUrls: ["./lightoutput.component.scss"]
})
export class LightOutputComponent implements OnInit {

  light :Light;

  ngOnInit(): void {
    this.light = new Light();
    this.light.isOn = false;
    this.light.isConnected = false;
    this.light.url = "ws://localhost:8080";
    this.light.inputUuid = "";
  }

}


