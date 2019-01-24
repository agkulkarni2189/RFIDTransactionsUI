import { Component, OnInit } from '@angular/core';
import { Lane } from './lane';
import { LaneService } from '../lane.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lanes',
  templateUrl: './lanes.component.html',
  styleUrls: ['./lanes.component.css']
})
export class LanesComponent implements OnInit {

  lanes: Lane[];
  constructor(private laneService: LaneService) { }

  getLanes(): void{
    this.laneService.getLanes().subscribe(lanes => function(){
      lanes.forEach(element => {
        this.lanes.push(element);
      });
    });
  }
  
  ngOnInit() {
    this.getLanes();
  }

}
