import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';
import { MatchCardComponent } from "../../components/match-card/match-card.component";

@Component({
  selector: 'app-live',
  imports: [CommonModule, MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit {
  livematches:any

  constructor(private _api:ApiCallService){

  }
  ngOnInit(): void {
    this.loadLiveMatches();
  }


  private loadLiveMatches() {
    this._api.getLiveMatches().subscribe({
      next: data => {
        console.log(data);
       this.livematches=data
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
