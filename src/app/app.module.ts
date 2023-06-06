import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { HandArrowComponent } from './analog-clock/hand-arrow/hand-arrow.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AnalogClockComponent,
    HandArrowComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
