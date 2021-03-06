import { Component, OnInit, Injectable } from '@angular/core';
import { Lane } from './lane';
import { LaneService } from '../lane.service';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-lanes',
  templateUrl: './lanes.component.html',
  styleUrls: ['./lanes.component.css']
})
export class LanesComponent implements OnInit {

  lanes: Lane[];
  static selectedLaneID: number=0;
  constructor(private laneService: LaneService, private messageService: MessageService) { }

  onSelect(laneID: number=0): void{
      if(laneID > 0)
      {
        LanesComponent.selectedLaneID=laneID;
        this.messageService.log("Selected lane: "+LanesComponent.selectedLaneID);
      }
      else
        LanesComponent.selectedLaneID=0;
  }

  ngOnInit() {
    this.laneService.currentFilteredLanes.subscribe(lanes => lanes.subscribe(lanes => this.lanes=lanes));
  }

}
