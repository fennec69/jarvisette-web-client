import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TextInputComponent} from './text/textinput.component';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdSelectModule, MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LightOutputComponent} from "./light/lightoutput.component";

@NgModule({
  imports: [NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdToolbarModule,
    MdSelectModule,
    MdInputModule,
    MdCardModule,
    MdIconModule,
    MdSnackBarModule,
    MdButtonModule],
  declarations: [AppComponent, TextInputComponent, LightOutputComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
