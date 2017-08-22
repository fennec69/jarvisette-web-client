/**
 * Created by farid on 07/08/2017.
 */
import {Component, Input} from '@angular/core';
import { Micro} from "./micro";

@Component({
  selector: 'micro',
  templateUrl: "./micro.component.html",
  styleUrls: ["./micro.component.scss"]
})
export class MicroComponent {

  @Input() micro :Micro;

}


