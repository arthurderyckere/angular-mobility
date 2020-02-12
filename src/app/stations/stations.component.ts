import { Component, OnInit } from '@angular/core';
import { IRailService } from "../services/iRail.service";
import { DisplayState } from '../model/displayState';
import { Station } from '../model/station';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  stations: Station[];
  selectedStation: Station;
  displayState: DisplayState;

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
      error: (err: any) => {
        this.displayState = {
          loading: false,
          loaded: false,
          errorMessage: err && typeof (err) === "string" ? err.toString() : "Technical Error."
        }
      }
    });
  }
}
