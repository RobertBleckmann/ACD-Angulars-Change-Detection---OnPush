import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashOneComponent } from './dashboard/dash-one/dash-one.component';
import { DashTwoComponent } from './dashboard/dash-two/dash-two.component';
import { DashThreeComponent } from './dashboard/dash-three/dash-three.component';
import 'zone.js';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    AppComponent,
    DashboardComponent,
    DashOneComponent,
    DashTwoComponent,
    DashThreeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
