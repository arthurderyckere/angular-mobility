import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationsComponent } from './stations/stations.component';
import { StationComponent } from './stations/station/station.component';
import { RailComponent } from './rail.component';
import { SpinnerComponent } from '../core/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LiveboardComponent } from './stations/liveboard/liveboard.component';

@NgModule({
  declarations: [
    StationsComponent,
    StationComponent,
    SpinnerComponent,
    RailComponent,
    LiveboardComponent
  ],
  imports: [
    CommonModule,
    // Module used for ngModel binding in input or select elements
    FormsModule,
    // Module used for Http requests in service layer
    HttpClientModule
  ],
  exports: [RailComponent]
})
export class RailModule { }
