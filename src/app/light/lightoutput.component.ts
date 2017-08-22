/**
 * Created by farid on 07/08/2017.
 */
import {Component, Input} from '@angular/core';
import {Light} from "./light";

@Component({
  selector: 'light-output',
  templateUrl: "./lightoutput.component.html",
  styleUrls: ["./lightoutput.component.scss"]
})
export class LightOutputComponent {

  @Input() light :Light;

}


