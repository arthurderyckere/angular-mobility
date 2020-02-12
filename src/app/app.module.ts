import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationsComponent } from './stations/stations.component';
import { HttpClientModule } from '@angular/common/http';
import { StationComponent } from './stations/station/station.component';
import { SpinnerComponent } from './core/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    StationsComponent,
    StationComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
