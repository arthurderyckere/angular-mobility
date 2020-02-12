import { Component, OnInit, Input } from '@angular/core';
import { IRailService } from '../../service/iRail.service';
import { Liveboard } from 'src/app/model/liveboard';
import { DisplayState } from 'src/app/model/displayState';

@Component({
  selector: 'app-liveboard',
  templateUrl: './liveboard.component.html',
  styleUrls: ['./liveboard.component.css']
})
export class LiveboardComponent implements OnInit {
  liveboard: Liveboard;
  displayState: DisplayState;
  @Input() stationId: string;
  constructor(private iRailService: IRailService) { }

  ngOnInit() {
    if (this.stationId && this.stationId != "") {
      this.iRailService.getLiveBoard(this.stationId).subscribe({
        complete: () => {
          this.displayState = {
            loading: false,
            loaded: true,
            errorMessage: undefined
          }
        },
        next: (data: Liveboard) => {
          this.liveboard = data;
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
      })
    }
  }
}

