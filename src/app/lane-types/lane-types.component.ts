import { Component, OnInit } from '@angular/core';
import { LaneType } from './lane-type';
import { LaneTypeService } from '../lane-type.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lane-types',
  templateUrl: './lane-types.component.html',
  styleUrls: ['./lane-types.component.css']
})
export class LaneTypesComponent implements OnInit {

  lanetypes: LaneType[];
  constructor(private lanetypeService: LaneTypeService) { }

  getLaneTypes(): void{
    this.lanetypeService.getLaneTypes().subscribe(lanetypes => function(){
      lanetypes.forEach(element => {
        this.lanetypes.push(element);
      });
    });
  }

  ngOnInit() {
    this.getLaneTypes();
  }

}
