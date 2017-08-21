/**
 * Created by farid on 07/08/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../text/textinput.component";
import {MdSnackBar} from "@angular/material";
import {Light} from "../light/light";

@Component({
  selector: 'area-zone',
  templateUrl: "./area.component.html",
  styleUrls: ["./area.component.scss"]
})
export class AreaComponent {

  @Input() lights :Light[];

}




