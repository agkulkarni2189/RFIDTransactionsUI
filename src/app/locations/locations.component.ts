import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Location } from './location'

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Location[];

  constructor(private locationService: LocationService) { }

  getLocations(): void{
    this.locationService.getLocations().subscribe(locs => this.locations=locs);
  }

  ngOnInit() {
    this.getLocations();
  }

}
