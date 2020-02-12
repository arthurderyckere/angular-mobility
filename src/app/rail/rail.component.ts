import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rail',
  templateUrl: './rail.component.html',
  styleUrls: ['./rail.component.css']
})
export class RailComponent implements OnInit {
  stationId: string;
  constructor() { }
  handleStationChange(stationId: any) {
    this.stationId = stationId;
  }
  ngOnInit() {
  }

}
