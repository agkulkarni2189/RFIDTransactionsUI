import { Component, OnInit, Injectable } from '@angular/core';
import { LocationService } from '../location.service';
import { Location } from './location';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Location[];
  static selectedLocationID: number;

  constructor(private locationService: LocationService, private messageService: MessageService) { }

  getLocations(): void{
    this.locationService.getLocations().subscribe(locs => this.locations=locs);
  }

  onSelect(locationID: number=0): void{
    if(locationID > 0)
    {
      LocationsComponent.selectedLocationID = locationID;
      this.messageService.log("Selected Location: "+LocationsComponent.selectedLocationID);
    }
    else
      LocationsComponent.selectedLocationID=0;
  }
  
  ngOnInit() {
    this.getLocations();
  }

}
