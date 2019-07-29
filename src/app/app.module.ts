import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusDisplayComponent } from './components/status-display/status-display.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    StatusDisplayComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
