/**
 * Created by farid on 07/08/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../text/textinput.component";
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'area-zone',
  templateUrl: "./area.component.html",
  styleUrls: ["./area.component.scss"]
})
export class AreaComponent {

  lights :[Light] = [
    {bottom : "100%", right: "100%"},
    {bottom : "0%", right: "100%"},
    {bottom : "0%", right: "0%"},
    {bottom : "100%", right: "0%"},
    {bottom : "50%", right: "50%"}
    ];
}

class Light {
  bottom :string;
  right :string;
}



