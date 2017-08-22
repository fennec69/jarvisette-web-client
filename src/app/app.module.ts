import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TextInputComponent} from './text/textinput.component';
import {
  MdButtonModule,
  MdCardModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdSelectModule,
  MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LightOutputComponent} from "./light/lightoutput.component";
import {AreaComponent} from "./area/area.component";
import {LightSettingsComponent} from "./light/lightsettings.component";
import {MicroSettingsComponent} from "./micro/microsettings.component";
import {MicroComponent} from "./micro/micro.component";

@NgModule({
  imports: [NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdToolbarModule,
    MdSelectModule,
    MdInputModule,
    MdCardModule,
    MdGridListModule,
    MdIconModule,
    MdSnackBarModule,
    MdButtonModule],
  declarations: [AppComponent, TextInputComponent, LightOutputComponent, LightSettingsComponent, MicroComponent, MicroSettingsComponent, AreaComponent],
  bootstrap: [AppComponent]
})
export class AppModule {


}
