import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ThemeChangerComponent } from './theme-changer/theme-changer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ThemeChangerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
