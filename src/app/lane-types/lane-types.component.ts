import { Component, OnInit, Injectable } from '@angular/core';
import { LaneType } from './lane-type';
import { LaneTypeService } from '../lane-type.service';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';
import { LaneService } from '../lane.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-lane-types',
  templateUrl: './lane-types.component.html',
  styleUrls: ['./lane-types.component.css']
})
export class LaneTypesComponent implements OnInit {

  lanetypes: LaneType[];
  static selectedLaneTypeID: number=0;

  constructor(private lanetypeService: LaneTypeService, private messageService: MessageService, private laneService: LaneService) { }

  getLaneTypes(): void{
    this.lanetypeService.getLaneTypes().subscribe(lanetypes => this.lanetypes = lanetypes);
  }

  onSelect(lanetypeID: number=0): void{
    if(lanetypeID > 0)
    {
      LaneTypesComponent.selectedLaneTypeID=lanetypeID;
      this.laneService.setLanes(this.laneService.getLanes(lanetypeID));
      this.messageService.log("Lane Type selected: "+LaneTypesComponent.selectedLaneTypeID);
    }
    else
    {
      this.laneService.setLanes(this.laneService.getLanes());
      LaneTypesComponent.selectedLaneTypeID=0;
      this.messageService.log("Lane Type reset");
    }
  }
  
  ngOnInit() {
    this.getLaneTypes();
  }

}
