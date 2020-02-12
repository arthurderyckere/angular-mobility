import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Station } from 'src/app/model/station';
import { DisplayState } from 'src/app/model/displayState';
import { IRailService } from '../service/iRail.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  stations: Station[];
  selectedStation: Station;
  displayState: DisplayState;
  @Output() stationChanged = new EventEmitter();

  constructor(private iRailService: IRailService) {
  }

  ngOnInit() {
    this.displayState = {
      loading: false,
      loaded: false,
      errorMessage: undefined
    }
  }
  loadStations(): void {
    this.displayState = {
      loading: true,
      loaded: false,
      errorMessage: undefined
    }
    this.iRailService.getStations().subscribe({
      complete: () => {
        this.displayState = {
          loading: false,
          loaded: true,
          errorMessage: undefined
        }
      },
      next: (data: Station[]) => {
        this.stations = data;
        this.displayState = {
          loading: true,
          loaded: false,
          errorMessage: undefined
        }
      },
      error: (err: object) => {
        this.displayState = {
          loading: false,
          loaded: false,
          errorMessage: err ? err.toString() : "Technical Error."
        }
      }
    });
  }
  handleSelectStation() {
    this.stationChanged.emit(this.selectedStation.id);
  }
}
